import { createSlice } from "@reduxjs/toolkit";

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    value: [],
  },
  reducers: {
    addAnimeToFavourites: (state, action) => {
      state.value.push(action.payload);
    },
    removeAnimeFromFavourites: (state, action) => {
      state.value = state.value.filter((e) => e.mal_id !== action.payload);
    },
  },
});

export const { addAnimeToFavourites, removeAnimeFromFavourites } =
  favouritesSlice.actions;
