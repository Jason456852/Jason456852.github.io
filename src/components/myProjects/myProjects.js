import { Box, Grow, Grid, Typography } from "@mui/material";
import { uni_font_color, uni_font_color_sub_1, uni_font_family } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setCurrentPage } from "../../redux/globalSlice";
import { projectInfo } from "./projectInfo";

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
                <Box sx={{ maxWidth: "100%", padding: 5 }}>
                    {projectInfo.map((project) => <>
                        <Typography gutterBottom sx={{ fontFamily: uni_font_family, color: uni_font_color }}>{project.name}</Typography>
                        <Typography gutterBottom sx={{ fontFamily: uni_font_family, color: uni_font_color_sub_1 }}>{project.description}</Typography>
                        <Typography sx={{ fontFamily: uni_font_family, color: uni_font_color_sub_1 }}>Technologies</Typography>
                        <Typography gutterBottom sx={{ fontFamily: uni_font_family, color: uni_font_color_sub_1 }}>{project.technologies}</Typography>
                        {project.link.isIframe ?
                            <iframe title={project.name} style={{ minHeight: 600, borderWidth: 2, borderColor: uni_font_color, width: '100%', height: '100%', overflow:'hidden' }} src={project.link.src} /> :
                            <Typography sx={{ fontFamily: uni_font_family, color: uni_font_color }}>{project.name}</Typography>}
                    </>)}
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
                <Grid container sx={{ margin: "0 auto" }}>
                    {projectInfo.map((project, index) => <>
                        <Grid item xs={index % 2 === 0 ? 7 : 5}>
                            <Grid container columnSpacing={3}>
                                <Grid item xs={12}>
                                    <Typography gutterBottom sx={{ fontFamily: uni_font_family, color: uni_font_color }}>{projectInfo[index].name}</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography sx={{ fontFamily: uni_font_family, color: uni_font_color_sub_1 }}>{projectInfo[index].description}</Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography sx={{ fontFamily: uni_font_family, color: uni_font_color_sub_1 }}>Languages & Library</Typography>
                                    <Typography sx={{ fontFamily: uni_font_family, color: uni_font_color_sub_1 }}>{projectInfo[index].languages}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={index % 2 === 1 ? 7 : 5} minHeight={600}>
                            {project.link.isIframe ? <iframe style={{ borderWidth: 2, borderColor: uni_font_color, width: '100%', height: '100%' }} src={project.link.src} /> : <Typography sx={{ fontFamily: uni_font_family, color: uni_font_color }}>{projectInfo[index].name}</Typography>}
                        </Grid>
                    </>)}
                </Grid>
            </Grow>
        );
    }
}

export default MyProjects;