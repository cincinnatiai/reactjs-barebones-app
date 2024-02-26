import { takeEvery, call, put } from "redux-saga/effects";
import {ActionType} from "../actions/actions";
import { FilmDetails, fetchFilmDetailsResponse } from "../../api/ghibliApi/ghibliApi";
import { getFilmsFailure, getFilmsSuccess } from "../actions/actionCreators";

function* workGetFilmDetails() {
    try {
        const filmDetails: FilmDetails = yield call(fetchFilmDetailsResponse());
        yield put(getFilmsSuccess(filmDetails))
    } catch (error) {
        yield put(getFilmsFailure(error))
    }
}

function* filmsSaga() {
    yield takeEvery(ActionType.GET_FILM_DETAILS, workGetFilmDetails)
}

export default filmsSaga;