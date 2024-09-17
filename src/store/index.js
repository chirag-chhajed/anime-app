import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { favouritesSlice } from "./api/hello";
import { api } from "./api/index";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "favourites",
  storage,
};
const persistedFavouritesReducer = persistReducer(
  persistConfig,
  favouritesSlice.reducer
);
const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    favourites: persistedFavouritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Ignore persist-related actions
      },
    }).concat(api.middleware),
  devTools: true,
});

const persistor = persistStore(store);

export { store, persistor };
