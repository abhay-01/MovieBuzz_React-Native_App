import React from 'react'
import { View, Text } from 'react-native'
import * as Progress from 'react-native-progress'
import { Dimensions } from 'react-native'


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default function Loading() {
  return (
    <View
    style = {{
        width: width,
        height: height*0.7
    }}
    
    className = "flex-row justify-center items-center">
    <Progress.CircleSnail
    color = 'orange'
    size={190}
    thickness={10}
        />
        </View>
  )
}
