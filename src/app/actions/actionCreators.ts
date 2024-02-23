import { ActionType } from "./actions";

export const getPhotosFetch = () => ({
    type: ActionType.GET_PHOTOS
})
export const getPhotosSuccess = (photos) => ({
    type: ActionType.GET_PHOTOS_SUCCESS, 
    payload: photos
})
export const getPhotosFailure = (error) => ({
    type: ActionType.GET_PHOTOS_FAILURE,
    payload: error
})