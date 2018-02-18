import { DATA_STATUS_HANDLER } from './actions'



const initialState = {
    players: [],
    player1: false,
    player2: false,
    loadingData: true,
    addError: false,
    addSuccess: false
}

export const reducer = (state = initialState, action) => {

    switch(action.type){

        case DATA_STATUS_HANDLER:
            return { ...state, [action.payload.type]: action.payload.result, displayAlert: action.payload.result};

        default:
            return state;
    }


}
