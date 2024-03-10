import { Box, Grow, Typography } from "@mui/material";
import { uni_font_color, uni_font_family } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setCurrentPage } from "../../redux/globalSlice";

const MyProjects = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.global.currentPage);
    const screenWidth = useSelector(state => state.global.screenWidth);

    useEffect(() => {
        dispatch(setCurrentPage(1));
    })

    if (screenWidth <= 800) {
        return (
            <Grow
                in={currentPage.index === 1}
                style={{ transformOrigin: '0 0 0' }}
                {...(currentPage.index === 1 ? { timeout: 300 } : {})}
            >
                <Box>
                    <Typography sx={{ fontFamily: uni_font_family, color: uni_font_color }}>Coming soon...</Typography>
                </Box>
            </Grow>
        );
    } else {
        return (
            <Grow
                in={currentPage.index === 1}
                style={{ transformOrigin: '0 0 0' }}
                {...(currentPage.index === 1 ? { timeout: 300 } : {})}
            >
                <Box>
                    <Typography sx={{ fontFamily: uni_font_family, color: uni_font_color }}>Coming soon...</Typography>
                </Box>
            </Grow>
        );
    }
}

export default MyProjects;