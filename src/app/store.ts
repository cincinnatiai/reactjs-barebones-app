import createSagaMiddleware from "@redux-saga/core";
import filmsSlice from "./slices/filmsSlice";
import filmsSaga from "./sagas/filmsSaga";
import { combineSlices, configureStore } from "@reduxjs/toolkit"

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineSlices({filmsSlice})

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(sagaMiddleware)
    }
});

export default store;

sagaMiddleware.run(filmsSaga);

export type AppStore = typeof store
export type AppDispatch = AppStore["dispatch"]
