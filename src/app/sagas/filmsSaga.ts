import { takeEvery, call, put } from "redux-saga/effects";
import { fetchFilmsStart, fetchFilmsSuccess, fetchFilmsFailure } from "../slices/filmsSlice";
import { fetchFilmsResponse } from "../../api/ghibliApi/ghibliApi";
import { SagaIterator } from "redux-saga";

function* workGetFilms(): SagaIterator {
    try {
        const films = yield call(fetchFilmsResponse);
        yield put(fetchFilmsSuccess(films));
    } catch (error) {
        yield put(fetchFilmsFailure((error as Error).message));
    }
}

function* filmsSaga() {
    yield takeEvery(fetchFilmsStart.type, workGetFilms);
}

export default filmsSaga;