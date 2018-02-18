


const INCREMENT = "jsdflk";
const DECREMENT = "lsdkjf";
const SUBMIT_INPUT = "LAKSDF";
const CHANGE_COLOR = "lskdjfg";

const initialState = {
    color: 'red',
    counter: 0,
    text: 'Hover Me'
}

function reducer(state=initialState, action) {
    switch(action.type) {
        case INCREMENT:
            return {...state, counter: state.counter + 1};
        case DECREMENT:
            return {...state, counter: state.counter - 1};
        case SUBMIT_INPUT:
            return {...state, text: action.payload};
        case CHANGE_COLOR:
            return {...state, color: action.payload};
    }
}


