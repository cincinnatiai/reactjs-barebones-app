import { Film } from "../../api/ghibliApi/ghibliApi";
import { ActionType } from "./actions";

export const getFilmsFetch = () => ({
    type: ActionType.GET_FILMS
})
export const getFilmsSuccess = (films : Film[]) => ({
    type: ActionType.GET_FILMS_SUCCESS, 
    payload: films
})
export const getFilmsFailure = (error: string) => ({
    type: ActionType.GET_FILMS_FAILURE,
    payload: error
})

export const getFilmDetail = () => ({
  type: ActionType.GET_FILM_DETAILS,
});

export const getFilmDetailSuccess = (filmImageUrl: string) => ({
  type: ActionType.GET_FILM_DETAILS_SUCCESS,
  payload: filmImageUrl,
});

export const getFilmDetailFailure = (error: string) => ({
  type: ActionType.GET_FILM_DETAILS_FAILURE,
  payload: error,
});