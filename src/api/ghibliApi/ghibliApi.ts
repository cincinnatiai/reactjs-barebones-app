import axios from "axios";
import Film from "../../model/FilmsResponse"

const GHIBLI_FILMS_ENDPOINT = "https://ghibliapi.vercel.app/films?limit=10";

export const fetchFilmsResponse = async(): Promise<Film[]> => {
    try {
        const response = await axios.get(GHIBLI_FILMS_ENDPOINT);
        return response.data;
    } catch (error) {
        console.error("Error fetching films", error);
    }
    return [];
};
