import { createSlice } from "@reduxjs/toolkit";

interface IState {
  photoGallery: IPhotos[];
  videoGallery: IVideos[];
}

const initialState: IState = {
  photoGallery: [],
  videoGallery: [],
};

export const gallerySlice = createSlice({
  name: "gallerySlice",
  initialState,
  reducers: {
    setPhotoGallery: (state, { payload }) => {
      state.photoGallery = payload;
    },

    addToPhotoGallery: (state, {payload}) => {
      state.photoGallery = [...state.photoGallery, payload]
    },

    setVideoGallery: (state, { payload }) => {
      state.videoGallery = payload;
    },
  },
});

export default gallerySlice.reducer;
export const { setPhotoGallery, setVideoGallery, addToPhotoGallery } = gallerySlice.actions;
