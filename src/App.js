import React, { Suspense, lazy, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/loading.js";
import { Link as RouterLink } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Avatar, Breadcrumbs, Button, ButtonGroup, Collapse, Divider, Grid, Icon, IconButton, Link, Stack, Toolbar, Tooltip, Typography, styled } from "@mui/material";
import DvrIcon from '@mui/icons-material/Dvr';
import { uni_bgcolor, uni_font_color, uni_font_color_sub_1, uni_font_family } from "./components/constants.js";
import icon from "./media/icon.jpg";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';

import { useDispatch, useSelector } from "react-redux";
import { links, setCurrentPage, setScreenWidth } from "./redux/globalSlice";

const Homepage = lazy(() => import("./components/homepage/homepage.js"));
const MyProjects = lazy(() => import("./components/myProjects/myProjects.js"));
const Experience = lazy(() => import("./components/experience/experience.js"));
const Contact = lazy(() => import("./components/contact/contact.js"));

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const styles = {
    heading: {
        flexGrow: 1,
        letterSpacing: '.3rem',
        fontWeight: 300,
        fontFamily: uni_font_family,
        borderTop: '1px solid #3F9B0B',
        borderBottom: '1px solid #3F9B0B',
        color: uni_font_color_sub_1,
        textAlign: "center",
        transform: 'scaleX(0.8)',
        transition: 'color 2s, border 2s, transform 2s, fontWeight 2s',
        position: 'relative',
        '&:hover': {
            color: '#00C738',
            fontWeight: 900,
            borderTop: '5px solid #16F529',
            borderBottom: '5px solid #16F529',
            transform: 'scaleX(0.95)',
        },
    },
};

const App = () => {
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.global.currentPage);
    const screenWidth = useSelector(state => state.global.screenWidth);

    const handleResize = () => dispatch(setScreenWidth(window.innerWidth));

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (screenWidth <= 800) {
        return (
            <ThemeProvider theme={createTheme({ palette: { mode: 'dark' } })}>
                <CssBaseline />
                <AppBar position="fixed">
                    <Toolbar sx={{ bgcolor: uni_bgcolor }}>
                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{
                                color: uni_font_color_sub_1,
                                '&:hover': {
                                    color: uni_font_color,
                                },
                            }}
                            onClick={() => setOpen(!open)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            color={uni_font_color}
                            sx={styles.heading}
                        >
                            JASON YEUNG
                        </Typography>
                        <Avatar size="lg" sx={{ margin: "0 auto", PointerEvent: "none", onclick: "none" }} src={icon} />
                    </Toolbar>
                </AppBar>
                <Offset />
                <Divider
                    children={
                        <Typography sx={{
                            fontFamily: uni_font_family,
                            letterSpacing: '.3rem',
                            color: uni_font_color_sub_1,
                            transition: 'color 1s',
                            '&:hover': {
                                color: uni_font_color,
                            },
                        }} variant="button" fontWeight="bold">
                            {currentPage.label}
                        </Typography>
                    }
                    variant="middle"
                    component={"li"}
                    sx={{
                        fontFamily: uni_font_family,
                        color: uni_font_color_sub_1
                    }} />
                <Drawer
                    open={open}
                    onClose={() => setOpen(!open)}
                >
                    <Box sx={{ width: "100%", height: "100%", backgroundColor: "#000" }} role="presentation" onClick={() => setOpen(!open)}>
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
                <Box padding={2}>
                    <Routes>
                        <Route path="/" element={<Suspense fallback={<Loading />}><Homepage /></Suspense>}></Route>
                        <Route path="/myProjects" element={<Suspense fallback={<Loading />}><MyProjects /></Suspense>}></Route>
                        <Route path="/experience" element={<Suspense fallback={<Loading />}><Experience /></Suspense>}></Route>
                        <Route path="/contact" element={<Suspense fallback={<Loading />}><Contact /></Suspense>}></Route>
                    </Routes>
                </Box>
            </ThemeProvider>
        );
    }
    else {
        return (
            <ThemeProvider theme={createTheme({ palette: { mode: 'dark' } })}>
                <CssBaseline />
                <AppBar position="fixed">
                    <Toolbar sx={{ bgcolor: uni_bgcolor }}>
                        <IconButton
                            size="large"
                            edge="start"
                            sx={{
                                color: uni_font_color_sub_1,
                                '&:hover': {
                                    color: uni_font_color,
                                },
                            }}
                            onClick={() => setOpen(!open)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            color={uni_font_color}
                            sx={styles.heading}
                        >
                            JASON YEUNG
                        </Typography>
                        <IconButton
                            size="large"
                            edge="start"
                            sx={{
                                mr: 2,
                                color: uni_font_color_sub_1,
                                '&:hover': {
                                    color: uni_font_color,
                                },
                            }}
                        >
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
                                <DvrIcon />
                            </Tooltip>
                        </IconButton>
                        <Avatar size="lg" sx={{ margin: "0 auto", PointerEvent: "none", onclick: "none" }} src={icon} />
                    </Toolbar>
                    <Collapse in={open}>
                        <Toolbar sx={{ bgcolor: uni_bgcolor }}>
                            <ButtonGroup size="medium" variant="text" color="success" >{links.map((link, index) => (
                                <Button key={index}>
                                    <Link
                                        color="inherit"
                                        underline="hover"
                                        component={RouterLink}
                                        to={link.to}
                                        onClick={() => setOpen(!open)}
                                        sx={{ textAlign: "center" }}
                                    >
                                        <Icon component={link.icon} sx={{ verticalAlign: "-20%", fontSize: 40, color: uni_font_color_sub_1 }} />
                                        <Typography sx={{ fontFamily: uni_font_family, color: uni_font_color_sub_1 }} variant="button" fontWeight="bold">
                                            {link.label}
                                        </Typography>
                                    </Link>
                                </Button>
                            ))}</ButtonGroup>
                        </Toolbar>
                    </Collapse>
                </AppBar>
                <Offset />
                <Divider
                    children={
                        <Typography sx={{
                            fontFamily: uni_font_family,
                            letterSpacing: '.3rem',
                            color: uni_font_color_sub_1,
                            transition: 'color 1s',
                            '&:hover': {
                                color: uni_font_color,
                            },
                        }} variant="button" fontWeight="bold">
                            {currentPage.label}
                        </Typography>
                    }
                    variant="middle"
                    component={"li"}
                    sx={{
                        fontFamily: uni_font_family,
                        color: uni_font_color_sub_1
                    }} />
                <Box padding={2}>
                    <Routes>
                        <Route path="/" element={<Suspense fallback={<Loading />}><Homepage /></Suspense>}></Route>
                        <Route path="/myProjects" element={<Suspense fallback={<Loading />}><MyProjects /></Suspense>}></Route>
                        <Route path="/experience" element={<Suspense fallback={<Loading />}><Experience /></Suspense>}></Route>
                        <Route path="/contact" element={<Suspense fallback={<Loading />}><Contact /></Suspense>}></Route>
                    </Routes>
                </Box>
            </ThemeProvider >
        );
    }
};

export default App;