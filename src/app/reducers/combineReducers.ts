import { combineReducers } from "@reduxjs/toolkit";
import filmReducer from "./filmsReducer";
import filmDetailsReducer from "./filmDetailsReducer";
const reducer = combineReducers({
    films: filmReducer,
    filmDetails: filmDetailsReducer
})

export default reducer;

export type FilmsState = ReturnType<typeof reducer>;