import { Box, Divider, Grid, Typography } from "@mui/material";
import { uni_font_color, uni_font_family } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setCurrentPage } from "../../redux/globalSlice";

const MyProjects = () => {
    const dispatch = useDispatch();
    const screenWidth = useSelector(state => state.global.screenWidth);

    useEffect(() => {
        dispatch(setCurrentPage(1));
    }, [])

    if (screenWidth <= 800) {
        return (
            <Grid container sx={{ width: "95%" }}>
                <Grid item xs={12}>
                    <Typography sx={{ fontFamily: uni_font_family, color: uni_font_color }}>Coming soon...</Typography>
                </Grid>
            </Grid>
        );
    } else {
        return (
            <>
                <Divider children="My Projects" size="sm" sx={{ fontFamily: uni_font_family, color: uni_font_color }} />
                <Typography sx={{ fontFamily: uni_font_family, color: uni_font_color }}>Coming soon...</Typography>
            </>
        );
    }
}

export default MyProjects;