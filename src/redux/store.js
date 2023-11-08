import { configureStore } from "@reduxjs/toolkit";
import homepageReducer from "./homepageSlice";

export default configureStore({
    reducer: {
        homepage: homepageReducer,
    },
})