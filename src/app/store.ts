import createSagaMiddleware from "@redux-saga/core";
import filmsSlice from "./slices/filmsSlice";
import filmDetailsSlice from "./slices/filmDetailsSlice";
import filmsSaga from "./sagas/filmsSaga";
import { combineSlices, configureStore } from "@reduxjs/toolkit"
import filmDetailsSaga from "./sagas/filmDetailsSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineSlices({filmsSlice, filmDetailsSlice})

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(sagaMiddleware)
    }
});

export default store;

sagaMiddleware.run(filmsSaga);
sagaMiddleware.run(filmDetailsSaga);

export type AppStore = typeof store
export type AppDispatch = AppStore["dispatch"]
