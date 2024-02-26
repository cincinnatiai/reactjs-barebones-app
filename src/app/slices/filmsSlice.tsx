import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Film } from "../../api/ghibliApi/ghibliApi";

interface FilmsState {
  isLoading: boolean;
  films: Film[];
  error: string;
}

const initialState: FilmsState = {
  isLoading: false,
  films: [],
  error: "",
};

export const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    fetchFilmsStart: (state) => {
      state.isLoading = true;
    },
    fetchFilmsSuccess: (state, action: PayloadAction<Film[]>) => {
      state.isLoading = false;
      state.films = action.payload;
      state.error = "";
    },
    fetchFilmsFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.films = [];
      state.error = action.payload;
    },
  },
  selectors: {
    selectFilms: (films) => films.films,
    selectLoading: (films) => films.isLoading,
  },
});

export const { fetchFilmsStart, fetchFilmsSuccess, fetchFilmsFailure } =
  filmsSlice.actions;

export const { selectFilms, selectLoading } = filmsSlice.selectors;

export default filmsSlice.reducer;
