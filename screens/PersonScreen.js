import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HeartIcon } from 'react-native-heroicons/solid';
import MovieList from '../components/MovieList';
import Loading from '../components/Loading';



const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default function PersonScreen() {

    const navigation = useNavigation();
    const [isFilled, setIsFilled] = useState(false);
    const [loading, setLoading] = useState(false);

    const [personMovies, setPersonMovies] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    return (
        <ScrollView

            className="flex-1 bg-neutral-900"
            contentContainerStyle={{
                paddingBottom: 20
            }}
        >
            <View className="w-full">
                <SafeAreaView className="w-full z-20 flex-row justify-between items-center px-4 mt-3">
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
                            <View className="flex-row justify-center"
                                style={{
                                    shadowColor: "red",
                                    shadowRadius: 40,
                                    shadowOpacity: 1,
                                    shadowOffset: { width: 0, height: 5 }
                                }}

                            >
                                <View className="items-center rounded-full overflow-hidden h-70 w-70 border-2 border-neutral-500"

                                >
                                    <Image
                                        source={require('../assets/person1.png')}
                                        style={{
                                            width: width * 0.75,
                                            height: height * 0.4,

                                        }} />
                                </View>
                            </View>

                        </View>
                    )
                }


                <View className="mt-5">
                    <Text className="text-white text-3xl text-center">Keenu Reeves</Text>
                    <Text className="text-3xs text-center text-neutral-500">London,United Kingdom</Text>
                </View>

                <View className="bg-neutral-700 rounded-full mx-3 p-3 mt-6 flex-row justify-between items-center">
                    <View className="items-center border-r-2 border-r-neutral-400 px-2">
                        <Text className="text-white font-semibold">Gender</Text>
                        <Text className="text-neutral-300 text-sm">Male</Text>
                    </View>

                    <View className="items-center border-r-2 border-r-neutral-400 px-2">
                        <Text className="text-white font-semibold">Birthday</Text>
                        <Text className="text-neutral-300 text-sm">19xx-mm-dd</Text>
                    </View>

                    <View className="items-center border-r-2 border-r-neutral-400 px-2">
                        <Text className="text-white font-semibold">Known For</Text>
                        <Text className="text-neutral-300 text-sm">Acting</Text>
                    </View>

                    <View className="items-center px-2">
                        <Text className="text-white font-semibold ">Popularity</Text>
                        <Text className="text-neutral-300 text-sm">70.2</Text>
                    </View>


                </View>

                <View className="space-y-3 mx-4 my-6">
                    <Text className="text-white text-xl">Biography</Text>
                    <Text className="text-neutral-400 mx-4 tracking-wide">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magento this collia di super ammi hoeulksnlf joej fhei oe nie
                    </Text>
                </View>

                <MovieList title="Filmography" hideSeeAll={true} data={personMovies} />



            </View>
        </ScrollView>

    )
}
