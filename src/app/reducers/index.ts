import { combineReducers } from "@reduxjs/toolkit";
import photoReducer from "./photoReducer";

const reducer = combineReducers({
    photos: photoReducer
})

export default reducer;

export type PhotoState = ReturnType<typeof reducer>;