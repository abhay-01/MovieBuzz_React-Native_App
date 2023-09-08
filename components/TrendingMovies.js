import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import { TouchableOpacity } from 'react-native-gesture-handler'


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const TrendingMovies = ({ data }) => {
    return (
        <View className="mb-8">
            <Text className="text-white text-xl mx-4 mb-5">Trending Movies</Text>
            <Carousel

                data={data}
                renderItem={({ item }) => <MovieCard movie={item} />}
                inactiveSlideOpacity={0.60}
                sliderWidth={width}
                itemWidth={width*0.6}
                slideStyle={{ display: 'flex', alignItems: 'center' }}

            />
        </View>
    )
}

const MovieCard = ({ movie }) => {
    return (
        <TouchableOpacity>
            <Image
            source = {require('../assets/movie1.jpg')} 
            style = {{
                width: width*0.6,
                height: height*0.4,
            }}
            />
        </TouchableOpacity>
    )
}
export default TrendingMovies

