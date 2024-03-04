import React, { Suspense, lazy, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/loading.js";
import { Link as RouterLink } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Avatar, Button, ButtonGroup, Divider, Grid, Icon, Link, Stack, Tooltip, Typography } from "@mui/material";
import DvrIcon from '@mui/icons-material/Dvr';
import { uni_font_color, uni_font_color_sub_1, uni_font_family } from "./components/constants.js";
import icon from "./media/icon.jpg";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import { useDispatch, useSelector } from "react-redux";
import { links, setCurrentPage, setScreenWidth } from "./redux/globalSlice";

const Homepage = lazy(() => import("./components/homepage/homepage.js"));
const MyProjects = lazy(() => import("./components/myProjects/myProjects.js"));
const Experience = lazy(() => import("./components/experience/experience.js"));
const Contact = lazy(() => import("./components/contact/contact.js"));

const App = () => {
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.global.currentPage);
    const screenWidth = useSelector(state => state.global.screenWidth);

    const toggleDrawer = (newOpen) => () => setOpen(newOpen);

    const handleResize = () => dispatch(setScreenWidth(window.innerWidth));

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });

    if (screenWidth <= 800) {
        return (
            <ThemeProvider theme={createTheme({ palette: { mode: 'dark' } })}>
                <CssBaseline />
                <List>
                    <ListItem sx={{ userSelect: 'none' }}>
                        <Typography variant="h3"
                            sx={{
                                margin: "0 auto",
                                marginTop: 3,
                                fontWeight: 600,
                                color: uni_font_color,
                                fontFamily: uni_font_family
                            }} >
                            Pak Ling YEUNG
                        </Typography>
                    </ListItem>
                    <Divider
                        children={
                            <Button onClick={toggleDrawer(true)}>
                                <Icon component={currentPage.icon} sx={{ verticalAlign: "-20%", fontSize: 40, color: uni_font_color_sub_1 }} />
                                <Typography sx={{ fontFamily: uni_font_family, color: uni_font_color_sub_1 }} variant="button" fontWeight="bold">
                                    {currentPage.label}
                                </Typography>
                            </Button>
                        }
                        variant="middle"
                        component={"li"}
                        sx={{ fontFamily: uni_font_family, color: uni_font_color }} />
                    <Drawer
                        open={open}
                        onClose={toggleDrawer(false)}
                    >
                        <Box sx={{ width: "100%", height: "100%", backgroundColor: "#000" }} role="presentation" onClick={toggleDrawer(false)}>
                            <List>
                                {links.map((link, index) => (
                                    <ListItem key={index} disablePadding>
                                        <Button>
                                            <Link
                                                color="inherit"
                                                underline="hover"
                                                component={RouterLink}
                                                to={link.to}
                                                onClick={(e) => dispatch(setCurrentPage(index))}
                                                sx={{ textAlign: "center" }}
                                            >
                                                <Icon component={link.icon} sx={{ verticalAlign: "-20%", fontSize: 40, color: uni_font_color_sub_1 }} />
                                                <Typography sx={{ fontFamily: uni_font_family, color: uni_font_color_sub_1 }} variant="button" fontWeight="bold">
                                                    {link.label}
                                                </Typography>
                                            </Link>
                                        </Button>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Drawer>
                    <ListItem alignItems="center">
                        <Routes>
                            <Route path="/" element={<Suspense fallback={<Loading />}><Homepage /></Suspense>}></Route>
                            <Route path="/myProjects" element={<Suspense fallback={<Loading />}><MyProjects /></Suspense>}></Route>
                            <Route path="/experience" element={<Suspense fallback={<Loading />}><Experience /></Suspense>}></Route>
                            <Route path="/contact" element={<Suspense fallback={<Loading />}><Contact /></Suspense>}></Route>
                        </Routes>
                    </ListItem>
                </List>
            </ThemeProvider >
        );
    }
    else {
        return (
            <ThemeProvider theme={createTheme({ palette: { mode: 'dark' } })}>
                <CssBaseline />
                <Grid
                    container
                    sx={{ width: "95%", margin: "0 auto", alignItems: 'center' }}
                    spacing={2}
                >
                    <Grid item xs={2} sx={{ userSelect: 'none' }}>
                        <Stack>
                            <Avatar size="lg" sx={{ margin: "0 auto", PointerEvent: "none", onclick: "none" }} src={icon} />
                            <Typography variant="button" sx={{ margin: "0 auto", color: uni_font_color, fontFamily: uni_font_family }}>
                                Jason
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={8} sx={{ userSelect: 'none' }}>
                        <Stack>
                            <Typography variant="h3"
                                sx={{
                                    margin: "0 auto",
                                    fontWeight: 600,
                                    color: uni_font_color,
                                    fontFamily: uni_font_family
                                }} >
                                Pak Ling YEUNG
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={2} sx={{ userSelect: 'none' }}>
                        <Stack>
                            <Tooltip
                                componentsProps={{
                                    tooltip: {
                                        sx: {
                                            color: uni_font_color,
                                            backgroundColor: "black",
                                            fontFamily: uni_font_family
                                        }
                                    }
                                }}
                                title={<><b>Framework and Libraries</b><br />{"> "}ReactJS, Material UI, Redux</>}>
                                <DvrIcon sx={{ margin: "0 auto", color: uni_font_color }} />
                            </Tooltip>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        userSelect: 'none'
                    }}>
                        <ButtonGroup size="large" variant="text" color="success" >{links.map((link, index) => (
                            <Button key={index}>
                                <Link
                                    color="inherit"
                                    underline="hover"
                                    component={RouterLink}
                                    to={link.to}
                                    sx={{ textAlign: "center" }}
                                >
                                    <Icon component={link.icon} sx={{ verticalAlign: "-20%", fontSize: 40, color: uni_font_color_sub_1 }} />
                                    <Typography sx={{ fontFamily: uni_font_family, color: uni_font_color_sub_1 }} variant="button" fontWeight="bold">
                                        {link.label}
                                    </Typography>
                                </Link>
                            </Button>
                        ))}</ButtonGroup>
                    </Grid>
                    <Grid item xs={12}>
                        <Routes>
                            <Route path="/" element={<Suspense fallback={<Loading />}><Homepage /></Suspense>}></Route>
                            <Route path="/myProjects" element={<Suspense fallback={<Loading />}><MyProjects /></Suspense>}></Route>
                            <Route path="/experience" element={<Suspense fallback={<Loading />}><Experience /></Suspense>}></Route>
                            <Route path="/contact" element={<Suspense fallback={<Loading />}><Contact /></Suspense>}></Route>
                        </Routes>
                    </Grid>
                </Grid>
            </ThemeProvider>
        );
    }
};

export default App;