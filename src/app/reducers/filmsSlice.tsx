import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Film } from "../../api/ghibliApi/ghibliApi";

interface FilmsState {
  loading: boolean;
  films: Film[];
  error: string;
}

const initialState: FilmsState = {
  loading: false,
  films: [],
  error: "",
};

export const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    fetchFilmsStart: (state) => {
      state.loading = true;
    },
    fetchFilmsSuccess: (state, action: PayloadAction<Film[]>) => {
      state.loading = false;
      state.films = action.payload;
      state.error = "";
    },
    fetchFilmsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.films = [];
      state.error = action.payload;
    },
  },
});

export const { fetchFilmsStart, fetchFilmsSuccess, fetchFilmsFailure } =
  filmsSlice.actions;

export default filmsSlice.reducer;
