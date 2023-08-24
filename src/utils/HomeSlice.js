import { createSlice } from "@reduxjs/toolkit";

const HomeSlice = createSlice({
  name: "home",
  initialState: {
    Api : {},
  },
  reducers: {
    homeCacheResults: (state, action) => {
      state.Api = action.payload;
    },
  },
});

export const { homeCacheResults } = HomeSlice.actions;

export default HomeSlice.reducer;
