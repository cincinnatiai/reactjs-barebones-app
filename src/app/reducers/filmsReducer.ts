import { GetFilmsFetch, GetFilmsFailure, GetFilmsSuccess, ActionType } from "../actions/actions";

type FilmsActions = (GetFilmsFetch | GetFilmsSuccess | GetFilmsFailure ); 

const initialState = {
    films: [],
    isLoading: false
}

const filmReducer = (state = initialState, action : FilmsActions) => {
    switch (action.type) {
        case ActionType.GET_FILMS:
            return {
                ...state,
                isLoading: true
            };
        case ActionType.GET_FILMS_FAILURE:
            console.log("Something went wrong!", action.payload)
            return;
        case ActionType.GET_FILMS_SUCCESS:
            return {
                ...state,
                films: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
}

export default filmReducer;