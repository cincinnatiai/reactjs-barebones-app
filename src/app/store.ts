import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers/combineReducers";
import photoSaga from "./sagas/photosSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(photoSaga);

export default store;