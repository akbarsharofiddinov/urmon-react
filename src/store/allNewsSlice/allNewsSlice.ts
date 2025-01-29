import { createSlice } from "@reduxjs/toolkit";

interface IState {
  allNews: INews[];
}

const initialState: IState = {
  allNews: [],
};

export const allNewsSlice = createSlice({
  name: "allNewsSlice",
  initialState,
  reducers: {
    setAllNews: (state, { payload }) => {
      state.allNews = payload;
    },
  },
});

export default allNewsSlice.reducer;
export const { setAllNews } = allNewsSlice.actions;
