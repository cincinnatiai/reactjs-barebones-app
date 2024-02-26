import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilmDetails } from "../../api/ghibliApi/ghibliApi";

interface FilmDetailsState {
  loading: boolean;
  filmDetails: FilmDetails | null;
  error: string;
}

const initialState: FilmDetailsState = {
  loading: false,
  filmDetails: null,
  error: "",
};

export const filmDetailsSlice = createSlice({
  name: "filmDetails",
  initialState,
  reducers: {
    fetchFilmDetailsStart: (state) => {
      state.loading = true;
    },
    fetchFilmDetailsSuccess: (state, action: PayloadAction<FilmDetails>) => {
      state.loading = false;
      state.filmDetails = action.payload;
      state.error = "";
    },
    fetchFilmDetailsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.filmDetails = null;
      state.error = action.payload;
    },
  },
  selectors: {
    selectImage: (filmDetails) => filmDetails.filmDetails,
  },
});

export const {
  fetchFilmDetailsStart,
  fetchFilmDetailsSuccess,
  fetchFilmDetailsFailure,
} = filmDetailsSlice.actions;

export const { selectImage } = filmDetailsSlice.selectors;

export default filmDetailsSlice.reducer;
