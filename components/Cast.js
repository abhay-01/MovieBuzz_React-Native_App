import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { image185 } from '../api/MovieApi'


export default function Cast({ cast, headShown}) {
    const navigation = useNavigation();
    const personName = "Keenu Reeves"
    const characterName = "John Wick"
    return (
        <View className="my-6">

            {
                !headShown &&(

                    <Text className="text-white text-xl mx-4 mb-5">Top Cast</Text>

                )
            }

            {
                headShown && (
                    <Text className="text-white text-xl mx-4 mb-5">Cast you watch</Text>


                )
            }




            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                {
                    cast && cast.map((item, index) => {
                        return (
                            <TouchableOpacity key={index}
                            className="mr-4 items-center"
                            onPress={() => navigation.navigate('PersonScreen', item)}
                            >
                                <Image
                                    // source={require('../assets/person1.png'18)}
                                    source={{ uri: image185(item.profile_path) }}
                                    style={{
                                        width: 80,
                                        height: 100,
                                        borderRadius: 40,
                                        marginBottom: 10 ,
                                        borderColor: 'white',
                                        borderWidth: 1.3
                                    }}
                                    
                                    />

                                <Text className = "text-white text-xs mt-1">{
                                    item.character.length > 10 ? item.character.slice(0, 14) + "..." : item.character
                    }
                                </Text>

                                <Text className = "text-neutral-400 text-xs mt-1">{
                                    item.original_name.length > 10 ?  item.original_name.slice(0, 10) + "..." :  item.original_name
                    }
                                </Text>
                            </TouchableOpacity>
                                )
                })
            }

                            </ScrollView>

</View>
    )
}
