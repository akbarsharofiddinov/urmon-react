import { configureStore } from "@reduxjs/toolkit";
import allNewsSlice from "./allNewsSlice/allNewsSlice";
import gallerySlice from "./gallerySlice/gallerySlice";

export const store = configureStore({
  reducer: {
    allNews: allNewsSlice,
    gallery: gallerySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
