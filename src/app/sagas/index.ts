import { takeEvery, call, put } from "redux-saga/effects";
import {ActionType} from "../actions/index";
import { Photo, fetchPhotosResponse } from "../../api/dogsApi/photosApi";
import { getPhotosFailure, getPhotosSuccess } from "../actions/actionCreators";

function* workGetPhotos() {
    try {
        const photos: Photo[] = yield call(fetchPhotosResponse);
        yield put(getPhotosSuccess(photos))
    } catch (error) {
        yield put(getPhotosFailure(error))
    }
}

function* photoSaga() {
    yield takeEvery(ActionType.GET_PHOTOS, workGetPhotos)
}

export default photoSaga;