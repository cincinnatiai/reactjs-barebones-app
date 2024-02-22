import { GetPhotosFetch, GetPhotosFailure, GetPhotosSuccess, ActionType } from "../actions";

type PhotosActions = (GetPhotosFetch | GetPhotosSuccess | GetPhotosFailure); 

const initialState = {
    photos: [],
    isLoading: false
}

const photoReducer = (state = initialState, action : PhotosActions) => {
    switch (action.type) {
        case ActionType.GET_PHOTOS:
            return {
                ...state,
                isLoading: true
            };
        case ActionType.GET_PHOTOS_FAILURE:
            console.log("Something went wrong!", action.payload)
            return;
        case ActionType.GET_PHOTOS_SUCCESS:
            return {
                ...state,
                photos: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
}

export default photoReducer;