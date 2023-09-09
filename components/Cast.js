import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

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
                                    source={require('../assets/person1.png')}
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
                                    characterName.length > 10 ? characterName.slice(0, 14) + "..." : characterName
                    }
                                </Text>

                                <Text className = "text-neutral-400 text-xs mt-1">{
                                    personName.length > 10 ? personName.slice(0, 10) + "..." : characterName
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
