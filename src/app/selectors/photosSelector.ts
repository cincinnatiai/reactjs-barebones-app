import { PhotoState } from "../reducers/combineReducers";

const photosSelector = (state: PhotoState) => state.photos;

export const selectPhotos = (state: PhotoState) => photosSelector(state)?.photos;
export const selectIsLoading = (state: PhotoState) => photosSelector(state)?.isLoading;