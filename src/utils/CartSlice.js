import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    sideNav : true,
  },

  reducers: {
    
    setSideNav:(state) =>{
        state.sideNav = !state.sideNav;
    }
  },
});

export const { setSideNav } = cartSlice.actions;

export default cartSlice.reducer;
