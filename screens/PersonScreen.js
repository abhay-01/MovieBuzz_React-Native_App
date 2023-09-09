import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HeartIcon } from 'react-native-heroicons/solid';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function PersonScreen() {

    const navigation = useNavigation();
    const [isFilled, setIsFilled] = useState(false);

    return (
        <ScrollView
            contentContainerStyle={{
                paddingBottom: 20
            }}

            className="bg-neutral-900 flex-1"
        >
            <View className="w-full">
                <SafeAreaView className="w-full flex-row justify-between items-center px-4 mt-3">
                    <TouchableOpacity style={{ backgroundColor: 'orange' }} className='rounded-xl p-1' onPress={() => navigation.goBack()}>
                        <ChevronLeftIcon size="30" strokeWidth={2} color="white" onPress={() => navigation.goBack()} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <HeartIcon size="30" strokeWidth={2}
                            color={isFilled ? "red" : "white"}
                            onPress={() => setIsFilled(!isFilled)}
                        />
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        </ScrollView>

    )
}
