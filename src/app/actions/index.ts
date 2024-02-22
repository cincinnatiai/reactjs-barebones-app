import { Photo } from "../../api/dogsApi/photosApi"

export enum ActionType {
    GET_PHOTOS = "GET_PHOTOS",
    GET_PHOTOS_SUCCESS = "GET_PHOTOS_SUCCESS",
    GET_PHOTOS_FAILURE = "GET_PHOTOS_FAILURE",
}

export interface GetPhotosFetch {
    type: ActionType.GET_PHOTOS
}

export interface GetPhotosSuccess {
    type: ActionType.GET_PHOTOS_SUCCESS
    payload?: Photo[]
}

export interface GetPhotosFailure {
    type: ActionType.GET_PHOTOS_FAILURE
    payload: any
}

