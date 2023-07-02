import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import SearchSlice from "./SearchSlice";

const store = configureStore({
  reducer: {
    cart: CartSlice,
    search:SearchSlice,
  },
});

export default store;
