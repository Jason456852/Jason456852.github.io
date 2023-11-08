import { Divider } from "@mui/material";
import { uni_font_color, uni_font_family } from "../constants";

const MyProjects = () => {
    return (<>
        <Divider children="My Projects" size="sm" sx={{ fontFamily: uni_font_family, color: uni_font_color }}/>
    </>);
}

export default MyProjects;