import { useRoute } from '@react-navigation/native'
import React, { useEffect,useState } from 'react'
import { View, TouchableOpacity,Image,Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { Dimensions } from 'react-native';
import {HeartIcon} from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'react-native-svg';




const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function MovieScreen() {

    const[isFilled,setIsFilled] = useState(false);
    const {params:item} = useRoute();

    const navigation = useNavigation();

    useEffect(() => {

        //will call api
    }, []);

  return (
    <ScrollView
    contentContainerStyle={{
        paddingBottom:20
    }}

    className = "bg-neutral-900 flex-1"
    >
        <View className ="w-full">
        <SafeAreaView className = "w-full absolute z-20 flex-row justify-between items-center px-4 mt-3">
            <TouchableOpacity style = {{backgroundColor:'orange'}} className = 'rounded-xl p-1' onPress = {() => navigation.goBack()}>
                <ChevronLeftIcon size = "30" strokeWidth = {2} color = "white"/>
            </TouchableOpacity>

            <TouchableOpacity>
                <HeartIcon size = "30" strokeWidth = {2} 
                color = {isFilled?"red":"white"}
                onPress = {() => setIsFilled(!isFilled)}
                />
            </TouchableOpacity>
        </SafeAreaView>
        <View>
            <Image
            source = {require('../assets/movie1.png')}
            style = {{
                width,
                height:height*0.55,
                
            }}
            />

           <LinearGradient
           color = {['transparent','rgba(28,28,28,0.8)','rgba(28,28,28,1)']}
              style = {{
                width,
                height:height*0.55,
              }}
              start = {{x:0.5,y:0}}
              end = {{x:0.5,y:1}}
              className = "absolute bottom-0"
           />
        </View>

        {/* movie details */}

        <View className = "flex-1 justify-between items-center">
            <Text className = "text-3xl color-white">Movie hai</Text>


        </View>
        </View>
    </ScrollView>
   
  )
}
