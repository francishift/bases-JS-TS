import { GIFResponse } from "./interfaces/gif.response";

const apiKey ='9v1d4216UmAYj82llarMeRFDQ85CPBDy'; // apikey de gighy

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
    .then( resp => resp.json())
    .then( (body: GIFResponse) => {
        console.log(body.data.images.downsized_medium.url)
    })
    .catch(err => console.info( err ));
