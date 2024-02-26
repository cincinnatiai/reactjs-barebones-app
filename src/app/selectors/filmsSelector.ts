import { FilmsState } from "../reducers/combineReducers";

const filmsSelector = (state: FilmsState) => state.films;
const filmDetailsSelector = (state: FilmsState) => state.filmDetails;

export const selectFilms = (state: FilmsState) => filmsSelector(state)?.films;
export const selectIsLoading = (state: FilmsState) => filmsSelector(state)?.isLoading;

export const selectFilmDetails = (state: FilmsState) => filmDetailsSelector(state)?.filmDetails.image;
