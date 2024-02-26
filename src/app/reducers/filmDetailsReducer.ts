import { GetFilmDetails, GetFilmDetailsFailure, GetFilmDetailsSuccess, ActionType } from "../actions/actions";

import { Film } from "../../api/ghibliApi/ghibliApi";
type FilmsActions = (GetFilmDetails | GetFilmDetailsSuccess | GetFilmDetailsFailure ); 

const initialState = {
    filmDetails: {
        image: '',
    },
}

const filmDetailsReducer = (state = initialState, action : FilmsActions) => {
    switch (action.type) {
        case ActionType.GET_FILM_DETAILS:
            return {
                ...state,
            };
        case ActionType.GET_FILM_DETAILS_FAILURE:
            console.log("Something went wrong!", action.payload)
            return;
        case ActionType.GET_FILM_DETAILS_SUCCESS:
            return {
                ...state,
                films: action.payload,
            };
        default:
            return state;
    }
}

export default filmDetailsReducer;