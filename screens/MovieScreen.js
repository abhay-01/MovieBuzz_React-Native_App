import { useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { Dimensions } from 'react-native';
import { HeartIcon } from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'react-native-svg';
import Cast from '../components/Cast';
import MovieList from '../components/MovieList';
import { image500 } from '../api/MovieApi'
import Loading from '../components/Loading'
import { fallback_poster } from '../api/MovieApi';
import { fetchMovieCredits, fetchMovieDetails, fetchSimilarMovies } from '../api/MovieApi';



const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function MovieScreen() {

    const [isFilled, setIsFilled] = useState(false);
    const [similarMovies, setSimilarMovies] = useState([]);

    const [cast, setCast] = useState([]);
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(false);

    const movieName = "Ant-Man and the Wasp: Quantamania";

    const { params: item } = useRoute();

    const navigation = useNavigation();

    useEffect(() => {

        //will call api

        // console.log("Details: ",item);

        setLoading(true);
        getMovieDetails(item.id);
        getMovieCredits(item.id);
        getSimilarMovies(item.id);



    }, [item]);

    const getMovieDetails = async id => {

        const details = await fetchMovieDetails(id);
        // console.log("Details: ", details);

        setMovie(details);
        setLoading(false);
    }

    const getMovieCredits = async id => {
        const credits = await fetchMovieCredits(id);
        console.log("Credits: ", credits);
        setCast(credits.cast);
    }

    const getSimilarMovies = async id => {
        const similar = await fetchSimilarMovies(id);
        // console.log(similar);
        setSimilarMovies(similar.results);
    }




    return (
        <ScrollView
            contentContainerStyle={{
                paddingBottom: 20
            }}

            className="bg-neutral-900 flex-1"
        >
            <View className="w-full">
                <SafeAreaView className="w-full absolute z-20 flex-row justify-between items-center px-4 mt-3">
                    <TouchableOpacity style={{ backgroundColor: 'orange' }} className='rounded-xl p-1' onPress={() => navigation.goBack()}>
                        <ChevronLeftIcon size="30" strokeWidth={2} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <HeartIcon size="30" strokeWidth={2}
                            color={isFilled ? "red" : "white"}
                            onPress={() => setIsFilled(!isFilled)}
                        />
                    </TouchableOpacity>
                </SafeAreaView>

                {

                    loading ? (
                        <Loading />
                    ) : (

                        <View>
                            <Image
                                // source={require('../assets/movie1.png')}

                                source={{ uri: image500(movie?.poster_path) || fallback_poster }}
                                style={{
                                    width,
                                    height: height * 0.61,

                                }}
                            />

                            <LinearGradient
                                color={['rgba(0, 0, 0, 0.6)', 'transparent']}
                                style={{
                                    width,
                                    height: height * 0.40,
                                }}
                                start={{ x: 0.5, y: 0 }}
                                end={{ x: 0.5, y: 1 }}
                                className="absolute bottom-0"
                            />
                        </View>
                    )
                }

                {/* movie details */}
                <View style={{
                    marginTop: -(height * 0)
                }}
                    className="space-y-3" 
                >

                    <Text className="text-white text-center text-3xl font-bold tracking wider">{movie.original_title}</Text>
                    {
                        movie?.id?(
                            <Text className="text-neutral-400 font-semibold text-center">{movie.status} | {movie.release_date} | {movie.runtime} min</Text>

                        ):
                        null
                    }

                    <View className = "flex-row justify-center mx-4 space-x-2">

                    {
                        movie?.genres?.map((genre, index) => {
                            
                            let isLast = index === movie.genres.length - 1;
                            return(
<Text className="text-neutral-400 font-semibold text-center">
                                        {genre?.name} {isLast? null :'|'}
                                    </Text>

                            )
                             } )
                    }

</View>

                    {/* <Text className="text-neutral-400 font-semibold text-center"> Action| Thrill | Comedy</Text> */}

                    <Text className="text-neutral-400 mx-4 tracking-wide">
                        {movie.overview}
                    </Text>

                </View>

                {/* cast */}

                <Cast cast={cast} headShown={false} />

                {/* similar movies */}

                <MovieList title="You Love to Watch" hideSeeAll={true} data={similarMovies} />
            </View>
        </ScrollView>

    )
}
