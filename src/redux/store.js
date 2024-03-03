import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./globalSlice";
import homepageReducer from "./homepageSlice";
import contactReducer from "./contactSlice";
import myProjectsReducer from "./myProjectsSlice";
import experienceReducer from "./experienceSlice";

export default configureStore({
    reducer: {
        homepage: homepageReducer,
        myProject: myProjectsReducer,
        contact: contactReducer,
        experience: experienceReducer,
        global:globalReducer,
    },
})