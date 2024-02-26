import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Film } from "../../api/ghibliApi/ghibliApi";

interface FilmDetailsState {
  loading: boolean;
  film: Film | null;
  error: string;
}

const initialState: FilmDetailsState = {
  loading: false,
  film: null,
  error: "",
};

export const filmDetailsSlice = createSlice({
  name: "filmDetails",
  initialState,
  reducers: {
    fetchFilmDetailsStart: (state) => {
      state.loading = true;
    },
    fetchFilmDetailsSuccess: (state, action: PayloadAction<Film>) => {
      state.loading = false;
      state.film = action.payload;
      state.error = "";
    },
    fetchFilmDetailsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.film = null;
      state.error = action.payload;
    },
  },
});

export const {
  fetchFilmDetailsStart,
  fetchFilmDetailsSuccess,
  fetchFilmDetailsFailure,
} = filmDetailsSlice.actions;

export default filmDetailsSlice.reducer;
