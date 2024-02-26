import { takeEvery, call, put } from "redux-saga/effects";
import { fetchFilmDetailsStart, fetchFilmDetailsSuccess, fetchFilmDetailsFailure } from "../slices/filmDetailsSlice";
import { fetchFilmDetailsResponse } from "../../api/ghibliApi/ghibliApi";

function* workGetFilmDetails(action) {
    try {
        const filmDetails = yield call(fetchFilmDetailsResponse, action.payload);
        yield put(fetchFilmDetailsSuccess(filmDetails));
    } catch (error) {
        yield put(fetchFilmDetailsFailure(error.message));
    }
}

function* filmDetailsSaga() {
    yield takeEvery(fetchFilmDetailsStart.type, workGetFilmDetails);
}

export default filmDetailsSaga;