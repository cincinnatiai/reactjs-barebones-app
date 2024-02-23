import axios from "axios";

const PHOTOS_ENDPOINT = "https://api.unsplash.com/photos";

const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

const config = {
    params: {
        page: 1,
        client_id: apiKey
    }
};

export type Photo = {
    id: string,
    urls: {
        regular: string,
        thumb: string
    },
    alt_description: string
};

export const fetchPhotosResponse = async(): Promise<Photo[]> => {
    try {
        const response = await axios.get(PHOTOS_ENDPOINT, config);
        return response.data;
    } catch (error) {
        console.error("Error fetching photos", error);
    }
    return [];
};