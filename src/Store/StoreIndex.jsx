import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../Store/CartSlice";

const store = configureStore({
    reducer: {
        cart: CartSlice.reducer
    },
});

export default store;