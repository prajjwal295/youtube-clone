import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    sideNav : true,
    searchCard:false,
    searchValue:"",
  },

  reducers: {
    
    setSideNav:(state) =>{
        state.sideNav = !state.sideNav;
    },
    hideSideNav:(state) =>{
        state.sideNav = false ;
    },

    disableSearchCard:(state)=>{
        state.searchCard = false;
    },

    enableSearchCard:(state)=>{
        state.searchCard = true;
    },

    setSearchValue:(state,action)=>{
      state.searchValue = action.payload;

    },
  },
});

export const { setSideNav , disableSearchCard , enableSearchCard , setSearchValue , hideSideNav } = cartSlice.actions;

export default cartSlice.reducer;
