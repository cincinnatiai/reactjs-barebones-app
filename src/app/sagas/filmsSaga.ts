import { takeEvery, call, put } from "redux-saga/effects";
import { fetchFilmsStart, fetchFilmsSuccess, fetchFilmsFailure } from "../slices/filmsSlice";
import { fetchFilmsResponse } from "../../api/ghibliApi/ghibliApi";

function* workGetFilms() {
    try {
        const films = yield call(fetchFilmsResponse);
        yield put(fetchFilmsSuccess(films));
    } catch (error) {
        yield put(fetchFilmsFailure(error.message));
    }
}

function* filmsSaga() {
    yield takeEvery(fetchFilmsStart.type, workGetFilms);
}

export default filmsSaga;