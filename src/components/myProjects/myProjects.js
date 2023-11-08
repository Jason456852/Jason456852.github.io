import { Divider, Typography } from "@mui/material";
import { uni_font_color, uni_font_family } from "../constants";

const MyProjects = () => {
    return (<>
        <Divider children="My Projects" size="sm" sx={{ fontFamily: uni_font_family, color: uni_font_color }} />
        <Typography sx={{ fontFamily: uni_font_family, color: uni_font_color }}>Coming soon...</Typography>
    </>);
}

export default MyProjects;