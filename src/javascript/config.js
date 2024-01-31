export const API_KEY='d2d9025e7f101b3c88abb61fdaf46a27';
export const IMAGE_BASE_URL='https://image.tmdb.org/t/p/';
export const TMDB_BASE_URL= 'https://api.themoviedb.org/3';
export const urlOf=function(queryOption,query){
    return `${TMDB_BASE_URL}/${query}/${queryOption}?api_key=${API_KEY}&region=BE&language=en-US&page=1`
}  

// https://api.themoviedb.org/3/trending/person/day?api_key=YOUR_API_KEY'