import { createSlice } from "@reduxjs/toolkit";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

export const links = [
    { index: 0, icon: HomeIcon, to: '', label: 'home' },
    { index: 1, icon: AccountTreeIcon, to: 'myProjects', label: 'my projects' },
    { index: 2, icon: InfoIcon, to: 'experience', label: 'experience' },
    { index: 3, icon: ConnectWithoutContactIcon, to: 'contact', label: 'contact me' },
];

export const globalSlice = createSlice({
    name: "global",
    initialState: {
        currentPage: links[0],
        screenWidth: window.innerWidth
    },
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = links[action.payload];
        },
        setScreenWidth: (state, action) => {
            state.screenWidth = action.payload;
            console.log("screenWidth changed to " + action.screenWidth);
        }
    }
})

export const {
    setCurrentPage,
    setScreenWidth
} = globalSlice.actions;

export default globalSlice.reducer;