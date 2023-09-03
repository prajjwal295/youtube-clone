import { createSlice } from "@reduxjs/toolkit";

const HomeSlice = createSlice({
  name: "home",
  initialState: {
    Api : {},
    category : null,
  },
  reducers: {
    homeCacheResults: (state, action) => {
      state.Api = action.payload;
    },
    filterCategory : (state,action)=>{
      state.category = action.payload;
    }
  },
});

export const { homeCacheResults, filterCategory } = HomeSlice.actions;

export default HomeSlice.reducer;
