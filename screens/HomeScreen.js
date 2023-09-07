import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    <View style = {{flex:1 background}}>
    <SafeAreaView>
      <Text>HomeScreen</Text>
      </SafeAreaView >
      </View>
  )
}

export default HomeScreen