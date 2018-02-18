import { LOAD_FEED} from './actions'
import { LOAD_TOP} from './actions'

const initialState = {
    
    feed: [],
    top: []

}

export const reducer = (state = initialState, action) => {

    switch(action.type){
        case LOAD_FEED:
            return {...state, feed: action.payload};
        case LOAD_TOP:
            return {...state, top: action.payload};

        default:
            return state;
    }


}
