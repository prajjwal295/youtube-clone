import { createSlice } from "@reduxjs/toolkit";

const HomeSlice = createSlice({
  name: "home",
  initialState: {
    Api : {},
    category : null,
    isDark : true,
  },
  reducers: {
    homeCacheResults: (state, action) => {
      state.Api = action.payload;
    },
    filterCategory : (state,action)=>{
      state.category = action.payload;
    },
    setTheme : (state,action) =>{
      state.isDark  = action.payload;
    }
  },
});

export const { homeCacheResults, filterCategory ,setTheme} = HomeSlice.actions;

export default HomeSlice.reducer;
