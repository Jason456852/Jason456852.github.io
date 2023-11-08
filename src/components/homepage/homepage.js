import { Grid, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, IconButton, Typography, Divider } from "@mui/material";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { uni_font_family, uni_font_color, uni_font_color_sub_1 } from "../constants";
import { cardInfo } from "./cardInfo";
import { useDispatch, useSelector } from "react-redux";
import { toggleExpanded } from "../../redux/homepageSlice";
import Presenter from "../presenter";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const Homepage = () => {
    const dispatch = useDispatch();
    const expanded = useSelector(state => state.homepage.expanded);
    // const [expanded, setExpanded] = React.useState(cardInfo.map(() => false));

    // const handleExpandClick = (index) => {
    //     setExpanded(expanded.map((boolean, currentIndex) => index === currentIndex ? !boolean : boolean));
    // };

    return (
        <>
            <Divider children="Home" size="sm" sx={{ fontFamily: uni_font_family, color: uni_font_color }} />
            <Grid container sx={{ width: 700, margin:"0 auto" }}>
                {cardInfo.map((cardDetail, index) =>
                    <Grid key={index} item xs={6}>
                        <Card sx={{ maxWidth: 325, margin: "0 auto", marginY: 5 }}>
                            <CardHeader
                                title={<Typography fontSize={24} color={uni_font_color} fontFamily={uni_font_family} fontWeight="bold">
                                    {cardDetail.title}
                                </Typography>}
                                subheader={<Typography fontSize={12} color={uni_font_color_sub_1} fontFamily={uni_font_family}>
                                    {cardDetail.subheader}
                                </Typography>}
                            />
                            <CardMedia component="img" height="230" image={cardDetail.image} />
                            <CardContent>
                                <Typography variant="body2" color={uni_font_color_sub_1} fontFamily={uni_font_family}>
                                    {"> " + cardDetail.brief}
                                </Typography>
                            </CardContent>
                            <Divider children="More..." size="sm" sx={{ fontFamily: uni_font_family, color: uni_font_color_sub_1 }} />
                            <CardActions disableSpacing>
                                <ExpandMore expand={expanded[index]} onClick={() => dispatch(toggleExpanded(index))} aria-expanded={expanded[index]}>
                                    <ExpandMoreIcon fontSize="small" />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
                                <CardContent>
                                    {cardDetail.paragraphs.map((v, i) => <Typography key={i} paragraph variant="body2" color={uni_font_color} fontFamily={uni_font_family}>{"> " + v}</Typography>)}
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </>
    );
};

export default Homepage;