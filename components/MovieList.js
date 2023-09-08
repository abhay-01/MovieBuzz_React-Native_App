import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function MovieList({ title, data }) {
  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 justify-between flex-row items-center">
        <Text className="text-white text-xl">{title}</Text>
        <TouchableOpacity>
          <Text style = {{color:'yellow'}} className = 'text-lg' >See All</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
