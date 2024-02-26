import { Film, FilmDetails } from "../../api/ghibliApi/ghibliApi"

export enum ActionType {
    GET_FILMS = "GET_FILMS",
    GET_FILMS_SUCCESS = "GET_FILMS_SUCCESS",
    GET_FILMS_FAILURE = "GET_FILMS_FAILURE",
    GET_FILM_DETAILS = 'GET_FILM_DETAILS',
    GET_FILM_DETAILS_SUCCESS = 'GET_FILM_DETAILS_SUCCESS',
    GET_FILM_DETAILS_FAILURE = 'GET_FILM_DETAILS_FAILURE'
}

export interface GetFilmsFetch {
    type: ActionType.GET_FILMS
}

export interface GetFilmsSuccess {
    type: ActionType.GET_FILMS_SUCCESS
    payload: Film[]
}

export interface GetFilmsFailure {
    type: ActionType.GET_FILMS_FAILURE
    payload: any
}

export interface GetFilmDetails {
    type: ActionType.GET_FILM_DETAILS
}

export interface GetFilmDetailsSuccess {
    type: ActionType.GET_FILM_DETAILS_SUCCESS
    payload: FilmDetails
}

export interface GetFilmDetailsFailure {
    type: ActionType.GET_FILM_DETAILS_FAILURE
    payload: any
}

