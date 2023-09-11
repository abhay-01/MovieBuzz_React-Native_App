import { View, Text, Platform, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { ScrollView } from 'react-native-gesture-handler';
import TrendingMovies from '../components/TrendingMovies';
import MovieList from '../components/MovieList';
import Cast from '../components/Cast';
import SearchScreen from './SearchScreen';
import { useNavigation } from '@react-navigation/native';
import Loading from '../components/Loading';
import { fetchTrendingMovies, fetchUpcomingMovies, fetchTopRatedMovies } from '../api/MovieApi';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const ios = Platform.OS == 'ios';
const HomeScreen = () => {
  const [trending, setTrending] = useState([])
  const [upcoming, setUpcoming] = useState([])
  const [topRated, setTopRated] = useState([])
  const [cast, setCast] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {

    getTrendingMovies();
    getUpcomingMovies();
    getTopRatedMovies();


  }, []);
  const getTrendingMovies = async () => {

    const TrendingData = await fetchTrendingMovies();

    if (TrendingData && TrendingData.results) {
      setTrending(TrendingData.results);
      setLoading(false);
    }

  }

  const getUpcomingMovies = async () => {
    const UpcomingData = await fetchUpcomingMovies();
    if (UpcomingData && UpcomingData.results) {
      setUpcoming(UpcomingData.results);
    }
  }

  const getTopRatedMovies = async () => {
    const TopRatedData = await fetchTopRatedMovies();
    if (TopRatedData && TopRatedData.results) {
      setTopRated(TopRatedData.results);
    }
  }




  return (
    <View className="flex-1 bg-neutral-800">
      {/* search bar */}
      <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4">
          <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
          <Text
            className="text-white text-3xl font-bold">
            <Text style={{ color: 'yellow' }}>M</Text>ovies <Text style={{ color: 'yellow' }}>B</Text>uzz
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
            <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {
        loading ? (
          <Loading />
        ) : (


          <ScrollView

            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 10 }}
          >

            {/* Trending movies crousel */}

            {

              trending.length > 0 ? (<TrendingMovies data={trending} />) : null
            }



            {/* Upcoming movies */}

            <MovieList title="Upcoming" data={upcoming} />

            {/* TopRated Movies */}

            <MovieList title="Top-Rated" data={topRated} />


            {/* <Cast cast={cast} headShown={true} /> */}

          </ScrollView>
        )
      }

    </View>
  )
}

export default HomeScreen