import { createSlice } from "@reduxjs/toolkit";
import { cardInfo } from "../components/homepage/cardInfo";

export const homepageSlice = createSlice({
    name: "homepage",
    initialState: {
        expanded: cardInfo.map(() => false),
    },
    reducers: {
        toggleExpanded: (state, action) => {
            state.expanded = state.expanded.map((v, i) => i === action.payload ? !v : v);
        },
    }
})

export const {
    toggleExpanded,
} = homepageSlice.actions;

export default homepageSlice.reducer;