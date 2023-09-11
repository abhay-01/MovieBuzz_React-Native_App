import axios from 'axios';

import { apiKey } from '../constants';


//endpoints

const trendingMovies = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;
const upcomingMovies = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;
const topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;

const fallbackImage = 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg';

//dynamic points

export const movieDetails = id => `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
export const movieCredits = id => `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`;
export const similarMovies = id => `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}`;


//images

export const imageBaseUrl = 'https://image.tmdb.org/t/p/';

export const image500 = path => path ? `${imageBaseUrl}w500${path}` : null;
export const image342 = path => path ? `${imageBaseUrl}w342${path}` : null;
export const image185 = path => path ? `${imageBaseUrl}w185${path}` : null;




const apiCall = async(endpoints,params) =>{

    const options = {
        method: 'GET',
        url: endpoints,
        params: params? params : {}  //if params is not passed, then it will be empty object
    }

    try {
        const response = await axios.request(options);
        return response.data;

    } catch(e){
        throw e;
    }
}


export const fetchTrendingMovies = async() => {
    return apiCall(trendingMovies);
}

export const fetchUpcomingMovies = async() => {
    return apiCall(upcomingMovies);
}

export const fetchTopRatedMovies = async() => {
    return apiCall(topRated);
}

export const fetchMovieDetails = async(id) => {
    return apiCall(movieDetails(id));
}

export const fetchMovieCredits = async(id) => {
    return apiCall(movieCredits(id));
}

export const fetchSimilarMovies = async(id) => {
    return apiCall(similarMovies(id));
}

