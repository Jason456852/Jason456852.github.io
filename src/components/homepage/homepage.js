import { Grid, Card, CardHeader, CardMedia, CardContent, Collapse, Typography, Grow, Box } from "@mui/material";
import * as React from 'react';
import { uni_font_family, uni_font_color, uni_font_color_sub_1 } from "../constants";
import { cardInfo } from "./cardInfo";
import { useDispatch, useSelector } from "react-redux";
import { toggleExpanded } from "../../redux/homepageSlice";
import { useEffect } from "react";
import { setCurrentPage } from "../../redux/globalSlice";

const Homepage = () => {
    const dispatch = useDispatch();
    const expanded = useSelector(state => state.homepage.expanded);
    const currentPage = useSelector(state => state.global.currentPage);
    const screenWidth = useSelector(state => state.global.screenWidth);

    useEffect(() => {
        dispatch(setCurrentPage(0));
    });

    if (screenWidth <= 800) {
        return (
            <Grow
                in={currentPage.index === 0}
                style={{ transformOrigin: '0 0 0' }}
                {...(currentPage.index === 0 ? { timeout: 300 } : {})}
            >
                <Grid container sx={{ maxWidth: "100%" }} >
                    {cardInfo.map((cardDetail, index) =>
                        <Grid key={index} item xs={12}>
                            <Card sx={{ margin: "0 auto", marginY: 2 }}>
                                <CardHeader
                                    title={<Typography fontSize={24} color={uni_font_color} fontFamily={uni_font_family} fontWeight="bold">
                                        {cardDetail.title}
                                    </Typography>}
                                    subheader={<Typography fontSize={12} color={uni_font_color_sub_1} fontFamily={uni_font_family}>
                                        {cardDetail.subheader}
                                    </Typography>}
                                />
                                <Collapse collapsedSize={220} in={expanded[index]}>
                                    <CardMedia component="img" image={cardDetail.image} />
                                </Collapse>
                                {!expanded[index] && <CardContent>
                                    <Typography variant="body2" onClick={() => dispatch(toggleExpanded(index))} fontFamily={uni_font_family} sx={{
                                        color: uni_font_color_sub_1,
                                        transition: "color 0.3s",
                                        "&:hover": {
                                            color: uni_font_color
                                        }
                                    }}>
                                        {"> " + cardDetail.brief + "..."}
                                    </Typography>
                                </CardContent>}
                                <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        {cardDetail.paragraphs.map((v, i) =>
                                            <Grow
                                                in={expanded[index]}
                                                style={{
                                                    transformOrigin: '0 0 0',
                                                    transitionDelay: expanded[index] ? i * 100 : 0
                                                }}
                                                {...(expanded[index] ? { timeout: 1000 } : {})}
                                            >
                                                <Typography
                                                    key={i}
                                                    onClick={() => dispatch(toggleExpanded(index))}
                                                    paragraph
                                                    variant="body2"
                                                    fontFamily={uni_font_family}
                                                    sx={{
                                                        color: uni_font_color_sub_1,
                                                        "&:hover": {
                                                            color: uni_font_color
                                                        }
                                                    }}
                                                >
                                                    {"> " + v}
                                                </Typography>
                                            </Grow>)}
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </Grid>
                    )}
                </Grid>
            </Grow>
        );
    }
    else {
        return (
            <Grow
                in={currentPage.index === 0}
                style={{ transformOrigin: '0 0 0' }}
                {...(currentPage.index === 0 ? { timeout: 300 } : {})}
            >
                <Box>
                    <Grid container sx={{ margin: "0 auto" }}>
                        {cardInfo.map((cardDetail, index) =>
                            <Grid key={index} item xs={(12 / Math.round(screenWidth * 80 / 35000))}>
                                <Card sx={{ maxWidth: 325, margin: "0 auto", marginY: 5 }}>
                                    <CardHeader
                                        title={<Typography fontSize={24} color={uni_font_color} fontFamily={uni_font_family} fontWeight="bold">
                                            {cardDetail.title}
                                        </Typography>}
                                        subheader={<Typography fontSize={12} color={uni_font_color_sub_1} fontFamily={uni_font_family}>
                                            {cardDetail.subheader}
                                        </Typography>}
                                    />
                                    <CardMedia component="img" image={cardDetail.image} />
                                    {!expanded[index] && <CardContent>
                                        <Typography variant="body2" onClick={() => dispatch(toggleExpanded(index))} fontFamily={uni_font_family} sx={{
                                            color: uni_font_color_sub_1,
                                            transition: "color 0.3s",
                                            "&:hover": {
                                                color: uni_font_color
                                            }
                                        }}>
                                            {"> " + cardDetail.brief + "..."}
                                        </Typography>
                                    </CardContent>}
                                    <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
                                        <CardContent>
                                            {cardDetail.paragraphs.map((v, i) =>
                                                <Grow
                                                    in={expanded[index]}
                                                    style={{
                                                        transformOrigin: '0 0 0',
                                                        transitionDelay: expanded[index] ? i * 100 : 0
                                                    }}
                                                    {...(expanded[index] ? { timeout: 1000 } : {})}
                                                >
                                                    <Typography
                                                    key={i}
                                                    onClick={() => dispatch(toggleExpanded(index))}
                                                    paragraph
                                                    variant="body2"
                                                    fontFamily={uni_font_family}
                                                    sx={{
                                                        color: uni_font_color_sub_1,
                                                        "&:hover": {
                                                            color: uni_font_color
                                                        }
                                                    }}
                                                >
                                                    {"> " + v}
                                                </Typography>
                                                </Grow>)}
                                        </CardContent>
                                    </Collapse>
                                </Card>
                            </Grid>
                        )}
                    </Grid>
                </Box>
            </Grow>
        );
    }
};

export default Homepage;