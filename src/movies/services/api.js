import jwt from 'jsonwebtoken';
import axios from 'axios';
const KEY_TOKEN = 'reactjs2011B';

const getDataUpcomingMovies = async (gte, lte, page = 1) => {
    const url =  `https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&release_date.gte=${gte}&release_date.lte=${lte}&with_release_type=3&fbclid=IwAR33v0kMr6tOBAaEJ3pz2tfxHT_d0wNeNv9S7CkMwGz-BO0Jtp2ZGjxijys`;
    const response = await axios.get(url);
    const result = response.status === 200 ? response.data : {};
    return result;
}

const checkUserLogin = (user, pass) => {
    let token = null;
    if(user === 'admin' && pass === '123') {
        // ma hoa thong tin user va gui ve phia client
        token = jwt.sign({
            id: 1,
            username: user,
            email: 'admin@gmail.com',
            phone: '0975091304',
            address: 'Ha Noi'
        }, KEY_TOKEN);
        return token;
    }
    return token;
}

const getDetailMovieById = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&&language=en-US&append_to_response=videos%2Cimages&include_image_language=en%2Cnull&fbclid=IwAR39J_hNyXUb5PhrHofv2gAEN4D5XuIfUjf31gkwdERZjxEN8-LqAMWIpUw`
    const response = await axios.get(url);
    const result = response.status === 200 ? response.data : {};
    return result;
}

export const api = {
    checkUserLogin,
    getDataUpcomingMovies, 
    getDetailMovieById
}