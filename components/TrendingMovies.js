import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import MovieScreen from '../screens/MovieScreen'
import { image500 } from '../api/MovieApi'


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const TrendingMovies = ({ data }) => {



   
    return (
        <View className="mb-8">
            <Text className="text-white text-xl mx-4 mb-5">Trending Movies</Text>
            <Carousel

                data={data}
                renderItem={({ item }) => <MovieCard item={item} />}
                inactiveSlideOpacity={0.60}
                sliderWidth={width}
                itemWidth={width*0.6}
                slideStyle={{ display: 'flex', alignItems: 'center' }}

            />
        </View>
    )
}

const MovieCard = ({ item}) => {
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback  onPress={() => navigation.navigate('MovieScreen', item)}
        > 
            <Image
            // source = {require('../assets/movie1.jpg')} 

            source={{ uri: image500(item.poster_path) }}
            style = {{
                width: width*0.6,
                height: height*0.4,
            }}

            className = "rounded-xl"
            />
        </TouchableWithoutFeedback>
    )
}
export default TrendingMovies

