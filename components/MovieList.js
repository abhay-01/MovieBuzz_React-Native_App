import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Dimensions } from 'react-native'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MovieScreen from '../screens/MovieScreen'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default function MovieList({ title, data, hideSeeAll}) {
  const movieName = "Shershah";
  const navigation = useNavigation();

  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 justify-between flex-row items-center">
        <Text className="text-white text-xl">{title}</Text>

     {
      !hideSeeAll && 
      <TouchableOpacity>
      <Text style={{ color: 'yellow' }} className='text-lg' >See All</Text>
     </TouchableOpacity>
     }
       
      </View>

      {/* movie row */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {
          data.map((item, index) => {
            return(
            <TouchableWithoutFeedback key={index}
              onPress={() => navigation.navigate('MovieScreen', item)}
            >
              <View className='space-y-1 mr-4'>
          <Image
                className="rounded-xl"
                source={require('../assets/movie2.png')}
                style={{
                  width: width * 0.4,
                  height: height * 0.22,

                }}
              />
                 </View>
              <Text className="text-neutral-300 ml-1 mt-3 text-center">{
                movieName.length>14?movieName.slice(0,14)+"...":movieName
              }</Text>
        </TouchableWithoutFeedback>
          )

       })
      }

    </ScrollView>
    </View >
  )
}
