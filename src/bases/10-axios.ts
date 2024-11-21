import axios from 'axios';
import { GIFResponse } from './interfaces/gif.response';

const apiKey ='9v1d4216UmAYj82llarMeRFDQ85CPBDy'; // apikey de gighy

export const giphyApi =  axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key : apiKey,

    }

});



// giphyApi.get<GIFResponse>('/random')
//    .then (resp => console.log(resp.data.data.images.downsized_large.url))
//    .catch( err => console.log(err));
   
