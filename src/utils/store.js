import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import SearchSlice from "./SearchSlice";
import HomeSlice from "./HomeSlice";

const store = configureStore({
  reducer: {
    cart: CartSlice,
    search:SearchSlice,
    home:HomeSlice,
  },
});

export default store;
