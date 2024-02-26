import { takeEvery, call, put } from "redux-saga/effects";
import {ActionType} from "../actions/actions";
import { Film, fetchFilmsResponse } from "../../api/ghibliApi/ghibliApi";
import { getFilmsFailure, getFilmsSuccess } from "../actions/actionCreators";

function* workGetFilms() {
    try {
        const films: Film[] = yield call(fetchFilmsResponse);
        yield put(getFilmsSuccess(films))
    } catch (error) {
        yield put(getFilmsFailure(error))
    }
}

function* filmsSaga() {
    yield takeEvery(ActionType.GET_FILMS, workGetFilms)
}

export default filmsSaga;