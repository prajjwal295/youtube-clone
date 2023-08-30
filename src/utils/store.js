import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import SearchSlice from "./SearchSlice";
import HomeSlice from "./HomeSlice";
import ChatSlice from "./ChatSlice";

const store = configureStore({
  reducer: {
    cart: CartSlice,
    search:SearchSlice,
    home:HomeSlice,
    chat:ChatSlice,
  },
});

export default store;
