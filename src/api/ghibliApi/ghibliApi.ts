import axios from "axios";

const GHIBLI_FILMS_ENDPOINT = "https://ghibliapi.vercel.app/films?limit=10";

export type Film = {
    id: string,
    title: string,
    description: string,
    url: string,
};

export type FilmDetails = {
    image: string
};

export const fetchFilmsResponse = async(): Promise<Film[]> => {
    try {
        const response = await axios.get(GHIBLI_FILMS_ENDPOINT);
        return response.data;
    } catch (error) {
        console.error("Error fetching films", error);
    }
    return [];
};

export const fetchFilmDetailsResponse = async (filmUrl: string): Promise<FilmDetails> => {
    try {
        const response = await axios.get(filmUrl);
        return response.data;
    } catch (error) {
        console.error("Error fetching film details", error);
    }
    return { image : "" };
};