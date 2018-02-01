import {PAGE_LOAD, PEOPLE_RESPONSE_RECEIVED,PERSON_SELECTED} from './actions';

const initialState = {
  peopleList: [],
  loadingPeopleStatus: "",
  personSelected: null,
  loadingFilmDataStatus: ""
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case PAGE_LOAD:
      return { ...state, loadingPeopleStatus: "loading" };
    case PEOPLE_RESPONSE_RECEIVED:
        if (action.payload)
            return { ...state, loadingPeopleStatus: "loaded", peopleList: action.payload };
        else
            return { ...state, loadingPeopleStatus: "horribly wrong" };
    case PERSON_SELECTED:
            return { ...state, personSelected: action.payload, loadingFilmDataStatus:"loading"};
    default:
      return state;
  }
}

export default reducer;