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
import Loading from '../components/Loading'



const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function MovieScreen() {

    const [isFilled, setIsFilled] = useState(false);
    const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    const [cast, setCast] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const [loading, setLoading] = useState(false);

    const movieName = "Ant-Man and the Wasp: Quantumania";

    const { params: item } = useRoute();

    const navigation = useNavigation();

    useEffect(() => {

        //will call api
    }, []);

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
                                source={require('../assets/movie1.png')}
                                style={{
                                    width,
                                    height: height * 0.48,

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

                    <Text className="text-white text-center text-3xl font-bold tracking wider">{movieName}</Text>
                    <Text className="text-neutral-400 font-semibold text-center">Released | 2020 | 170 min</Text>
                    <Text className="text-neutral-400 font-semibold text-center">Action | Thrill | Comedy</Text>

                    <Text className="text-neutral-400 mx-4 tracking-wide">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magento this collia di super ammi hoeulksnlf joej fhei oe nie
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
