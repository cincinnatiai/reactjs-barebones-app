import { combineReducers } from "@reduxjs/toolkit";
import photoReducer from "./photosReducer";

const reducer = combineReducers({
    photos: photoReducer
})

export default reducer;

export type PhotoState = ReturnType<typeof reducer>;