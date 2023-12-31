import React, { useCallback } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { Dimensions } from 'react-native'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { XMarkIcon } from 'react-native-heroicons/outline'
import { useState } from 'react'
import Loading from '../components/Loading'
import { debounce } from 'lodash'
import { searchMovies } from '../api/MovieApi'
import { image185 } from '../api/MovieApi'
import { fallback_poster } from '../api/MovieApi'




const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function SearchScreen() {
    const movieName = "Ant-Man and the Wasp: Quantumania";
    const navigation = useNavigation();
    const [results, setResults] = useState([1, 2, 3, 4])
    const [loading, setLoading] = useState(false);

    const handleSearch = text => {
        // console.log("value: ", text);
        if (text && text.length > 2) {
            setLoading(true);
            searchMovies({
                query: text,
                include_adult: 'false',
                language: 'en-US',
                pages: '1'
            }).then(res => {
                setLoading(false);
                console.log("res: ", res);
                if (res && res.results)
                    setResults(res.results);
            })
        } else {
            setLoading(false);
            setResults([]);
        }

    }

    const handleTextDebounce = useCallback(debounce(handleSearch, 1000), []);



    return (
        <ScrollView className="bg-neutral-800 flex-1">
            <View
                className="border border-neutral-500 mx-4 mt-11 mb-3 flex-row justify-between items-center rounded-full">
                <TextInput
                    onChangeText={handleTextDebounce}
                    placeholder="Search Movies..."
                    placeholderTextColor="white"
                    className="text-white text-base pb-1 pl-4 flex-1 tracking-wider"
                />

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    className="rounded-full bg-neutral-400 p-2 m-1"

                >
                    <XMarkIcon size="30" strokeWidth={2} color="white" className="mr-4" />

                </TouchableOpacity>




            </View>

            {
                loading ? (
                    <Loading />
                ) :


                    results.length > 0 ? (

                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{
                                paddingHorizontal: 15,

                            }}
                            className="mt-3"

                        >
                            {

                            }
                            <Text className="text-white">Results({results.length})</Text>

                            <View className="flex-wrap justify-between flex-row items-center">
                                {
                                    results.map((item, index) => {
                                        return (
                                            <TouchableOpacity key={index} onPress={() => navigation.navigate("MovieScreen", item)}
                                                className="m-2"
                                            >
                                                <View className="space-y-2 mb-4">
                                                    <Image className="rounded-3xl"
                                                        // source={require('../assets/movie1.png')}
                                                        source={{ uri: image185(item.poster_path) || fallback_poster }}
                                                        style={{
                                                            width: width * 0.4,
                                                            height: height * 0.3,
                                                        }}
                                                    />
                                                    <Text className="text-white ml-2">

                                                        {
                                                           item.title
                                                        // item?.title.length > 20 ? item?.title.slice(0, 20) : item?.title

                                                           
                                                        }
                                                    </Text>


                                                </View>

                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>
                        </ScrollView>
                    ) : (
                        <View className="flex-1 justify-center items-center mt-10">
                            <Text className="text-white text-3xl">
                                No Results Found!
                            </Text>

                        </View>

                    )
            }


        </ScrollView>

    )
}
