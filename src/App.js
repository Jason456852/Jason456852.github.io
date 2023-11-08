import React, { Fragment, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/loading.js";
import { Link as RouterLink } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Avatar, Button, ButtonGroup, Grid, Icon, Link, Stack, Tooltip, Typography } from "@mui/material";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import DvrIcon from '@mui/icons-material/Dvr';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { uni_font_color, uni_font_color_sub_1, uni_font_family } from "./components/constants.js";
import icon from "./media/icon.jpg";

const Homepage = lazy(() => import("./components/homepage/homepage.js"));
const MyProjects = lazy(() => import("./components/myProjects/myProjects.js"));
const Experience = lazy(() => import("./components/Experience/experience.js"));
const Contact = lazy(() => import("./components/contact/contact.js"));

const links = [
    { icon: HomeIcon, to: '', label: 'home' },
    { icon: AccountTreeIcon, to: 'myProjects', label: 'my projects' },
    { icon: InfoIcon, to: 'experience', label: 'experience' },
    { icon: ConnectWithoutContactIcon, to: 'contact', label: 'contact me' },
];

const App = () => {
    return (
        <ThemeProvider theme={createTheme({ palette: { mode: 'dark' } })}>
            <CssBaseline />
            <Grid sx={{ width: 700, margin: "0 auto", alignItems: 'center' }} container spacing={2}>
                <Grid item xs={2}>
                    <Stack>
                        <Avatar size="lg" sx={{ margin: "0 auto", PointerEvent: "none", onclick: "none" }} src={icon} />
                        <Typography variant="button" sx={{ margin: "0 auto", color: uni_font_color, fontFamily: uni_font_family }}>
                            Jason
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={8}>
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
                <Grid item xs={2}>
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
                <Grid item xs={12}>

                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default App;