import { urlOf} from './config.js'
import { getJSON } from './helper.js'
//save all the data here
export let state={
   movie:{
    top_rated:[],
    popular: []
   },
   tv:{
    top_rated:[],
    popular: []
   },

}


//load popular and trending movies or  series for TMDB API
export const loadResultsOf=async function(queryOption,query){
    try{
        const data=await getJSON(urlOf(queryOption,query));
        const {results}=data;
        //store the data in the required attribute in the state 
        state[`${query}`][`${queryOption}`]=[...results];//array of objects.
    }
    catch(error){
        throw error
    }
}


