import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/loading.js";
import { Link as RouterLink } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Avatar, Button, ButtonGroup, Grid, Icon, Link, Stack, Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { uni_font_color, uni_font_family } from "./components/constants.js";

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
            <Grid sx={{ minWidth: 900, width: "95%", margin: "0 auto", alignItems: 'center' }} container spacing={2}>
                <Grid item xs={2}>
                    <Stack>
                        <Avatar sx={{ margin: "0 auto" }}>
                            <PersonIcon />
                        </Avatar>
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
                                display: "inline",
                                textAlign: "left",
                                backgroundImage: "conic-gradient(from 0rad at 50% 0, green, darkgreen, lightgreen, greenyellow)",
                                color: "transparent",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                fontFamily: uni_font_family
                            }} >
                            Pak Ling YEUNG
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={2}>
                    
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
                                <Icon component={link.icon} sx={{ verticalAlign: "-20%", fontSize: 40 }} />
                                <Typography sx={{ fontFamily: uni_font_family }} variant="button" fontWeight="bold">
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
};

export default App;