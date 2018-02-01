import {PAGE_LOAD, PEOPLE_RESPONSE_RECEIVED} from './state/actions';
import axios from 'axios';

export function peopleLoading() {
    return {
        type: PAGE_LOAD
      
    };
}


export function getPeopleFromURL(url){
    return (dispatch) => {
        dispatch(peopleLoading());

        const promise = axios.get(url);
    
        promise.then( data => {
        console.log( data.data)
        dispatch({type: PEOPLE_RESPONSE_RECEIVED, payload: data.data})

        }, () => {}
        )
        
        promise.catch( data => {
        dispatch({type: PEOPLE_RESPONSE_RECEIVED, payload: data.data})
   
    }
        )

    }
}