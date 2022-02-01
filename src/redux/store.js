import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User/userSlice";
import productReducer from "./Product/productSlice";

export const store = configureStore({
    reducer:{
        user:userReducer,
        product:productReducer,
    }
})