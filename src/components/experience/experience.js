import * as React from 'react';
import { Divider, Typography, Tabs, Tab, Box, Button, ButtonGroup, Grid, Grow } from '@mui/material';
import { uni_font_color, uni_font_color_sub_1, uni_font_family } from '../constants';
import { tabInfo } from './tabInfo';
import Presenter from '../presenter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setCurrentPage } from '../../redux/globalSlice';

const Experience = () => {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState(0);
    const currentPage = useSelector(state => state.global.currentPage);
    const screenWidth = useSelector(state => state.global.screenWidth);

    useEffect(() => {
        dispatch(setCurrentPage(2));
    })

    if (screenWidth <= 800) {
        return (
            <Grow
                in={currentPage.index === 2}
                style={{ transformOrigin: '0 0 0' }}
                {...(currentPage.index === 2 ? { timeout: 300 } : {})}
            >
                <Grid container sx={{ maxWidth: "95%" }}>
                    <Grid item xs={12} sx={{ maxWidth: (screenWidth * 85 / 100) }}>
                        <Tabs
                            value={value}
                            onChange={(e, v) => setValue(v)}
                            textColor={uni_font_color}
                            indicatorColor='#000'
                            variant="scrollable"
                            scrollButtons={false}
                        >
                            {tabInfo.map((tab, i) =>
                                <Tab
                                    key={i}
                                    id={i}
                                    label={tab.label}
                                    icon={tab.icon}
                                    iconPosition="top"
                                    sx={{
                                        fontFamily: uni_font_family,
                                        color: value === i ? uni_font_color : uni_font_color_sub_1,
                                        textDecoration: value === i ? "underline" : "none"
                                    }} />)}
                        </Tabs>
                    </Grid>
                    {tabInfo.map((tab, i) => (
                        value === i &&
                        <Grow
                            in={value === i}
                            style={{ transformOrigin: '0 0 0' }}
                            {...(value === i ? { timeout: 300 } : {})}
                        >
                            <Grid item xs={12} key={i}>
                            <Grow
                                    in={value === i}
                                    style={{
                                        transformOrigin: '0 0 0'
                                    }}
                                    {...(value === i ? { timeout: 1500 } : {})}
                                >
                                    <Box>
                                        <Typography color={uni_font_color_sub_1} fontFamily={uni_font_family} gutterBottom sx={{ fontSize: 14 }} >
                                            {tab.phrase}
                                        </Typography>
                                        <Typography variant="h5" color={uni_font_color} fontFamily={uni_font_family}>
                                            {tab.header}
                                        </Typography>
                                    </Box>
                                </Grow>
                                <Grow
                                    in={value === i}
                                    style={{
                                        transformOrigin: '0 0 0',
                                        transitionDelay: value === i ? 75 : 0
                                    }}
                                    {...(value === i ? { timeout: 1500 } : {})}
                                >
                                    <Typography color={uni_font_color_sub_1} fontFamily={uni_font_family} sx={{ mb: 1.5 }}>
                                        {tab.period}<br />{tab.organization}<br />{tab.city}
                                    </Typography>
                                </Grow>
                                <Grow
                                    in={value === i}
                                    style={{
                                        transformOrigin: '0 0 0',
                                        transitionDelay: value === i ? 150 : 0
                                    }}
                                    {...(value === i ? { timeout: 1500 } : {})}
                                >
                                    <Box>
                                        <ButtonGroup variant="outlined" fontFamily={uni_font_family}>
                                            {(tab.links).map((link, j) =>
                                                <Button
                                                    key={j}
                                                    href={link.url}
                                                    target="_blank"
                                                    sx={{
                                                        fontFamily: uni_font_family,
                                                        color: uni_font_color_sub_1,
                                                        borderColor: uni_font_color_sub_1,
                                                        '&:hover': {
                                                            color: uni_font_color,
                                                            borderColor: uni_font_color,
                                                        }
                                                    }}>
                                                    {link.label}
                                                </Button>)}
                                        </ButtonGroup>
                                        {tab.files.map((file, j) => <Presenter key={j} files={file.fileInfo} buttonName={file.label} />)}
                                    </Box>
                                </Grow>
                                <Grow
                                    in={value === i}
                                    style={{
                                        transformOrigin: '0 0 0',
                                        transitionDelay: value === i ? 225 : 0
                                    }}
                                    {...(value === i ? { timeout: 1500 } : {})}
                                >
                                    <Typography
                                        color={uni_font_color_sub_1}
                                        fontFamily={uni_font_family}
                                        gutterBottom
                                        sx={{
                                            fontSize: 12,
                                            marginY: 2
                                        }}>
                                        {(tab.tags).map((tag, j) => <span key={j}>#{tag.replace(/ /g, "")} </span>)}
                                    </Typography>
                                </Grow>
                                {(tab.paragraphs).map((paragraph, j) =>
                                    <Grow
                                        key={j}
                                        in={value === i}
                                        style={{
                                            transformOrigin: '0 0 0',
                                            transitionDelay: value === i ? (j + 4) * 75  : 0
                                        }}
                                        {...(value === i ? { timeout: 1500 } : {})}
                                    >
                                        <Typography
                                            key={j}
                                            variant="body2"
                                            fontFamily={uni_font_family}
                                            color={uni_font_color}
                                            sx={{
                                                marginY: 2
                                            }}>
                                            {"> " + paragraph}
                                        </Typography>
                                    </Grow>)}
                            </Grid>
                        </Grow>
                    ))}
                </Grid>
            </Grow>
        );
    } else {
        return (
            <Grow
                in={currentPage.index === 2}
                style={{ transformOrigin: '0 0 0' }}
                {...(currentPage.index === 2 ? { timeout: 300 } : {})}
            >
                <Box>
                    <Divider children="Experience" size="sm" sx={{ fontFamily: uni_font_family, color: uni_font_color }} />
                    <Box sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex', width: "min-content" }}>
                            <Tabs
                                orientation="vertical"
                                value={value}
                                onChange={(e, v) => setValue(v)}
                                textColor={uni_font_color}
                                indicatorColor='#000000'
                                sx={{ borderRight: 1, borderColor: 'divider' }}
                            >
                                {tabInfo.map((tab, i) => <Tab key={i} id={i} label={tab.label} icon={tab.icon} iconPosition="top" sx={{ fontFamily: uni_font_family, color: value === i ? uni_font_color : uni_font_color_sub_1, textDecoration: value === i ? "underline" : "none" }} />)}
                            </Tabs>
                        </Box>
                        {tabInfo.map((tab, i) => (
                            value === i &&
                            <Box sx={{ paddingLeft: 2, flex: 1, overflowY: 'auto' }}>
                                <Grow
                                    in={value === i}
                                    style={{
                                        transformOrigin: '0 0 0'
                                    }}
                                    {...(value === i ? { timeout: 1500 } : {})}
                                >
                                    <Box>
                                        <Typography color={uni_font_color_sub_1} fontFamily={uni_font_family} gutterBottom sx={{ fontSize: 14 }} >
                                            {tab.phrase}
                                        </Typography>
                                        <Typography variant="h5" color={uni_font_color} fontFamily={uni_font_family}>
                                            {tab.header}
                                        </Typography>
                                    </Box>
                                </Grow>
                                <Grow
                                    in={value === i}
                                    style={{
                                        transformOrigin: '0 0 0',
                                        transitionDelay: value === i ? 75 : 0
                                    }}
                                    {...(value === i ? { timeout: 1500 } : {})}
                                >
                                    <Typography color={uni_font_color_sub_1} fontFamily={uni_font_family} sx={{ mb: 1.5 }}>
                                        {tab.period}<br />{tab.organization}<br />{tab.city}
                                    </Typography>
                                </Grow>
                                <Grow
                                    in={value === i}
                                    style={{
                                        transformOrigin: '0 0 0',
                                        transitionDelay: value === i ? 150 : 0
                                    }}
                                    {...(value === i ? { timeout: 1500 } : {})}
                                >
                                    <Box>
                                        <ButtonGroup variant="outlined" fontFamily={uni_font_family}>
                                            {(tab.links).map((link, j) =>
                                                <Button
                                                    key={j}
                                                    href={link.url}
                                                    target="_blank"
                                                    sx={{
                                                        fontFamily: uni_font_family,
                                                        color: uni_font_color_sub_1,
                                                        borderColor: uni_font_color_sub_1,
                                                        '&:hover': {
                                                            color: uni_font_color,
                                                            borderColor: uni_font_color,
                                                        }
                                                    }}>
                                                    {link.label}
                                                </Button>)}
                                        </ButtonGroup>
                                        {tab.files.map((file, j) => <Presenter key={j} files={file.fileInfo} buttonName={file.label} />)}
                                    </Box>
                                </Grow>
                                <Grow
                                    in={value === i}
                                    style={{
                                        transformOrigin: '0 0 0',
                                        transitionDelay: value === i ? 225 : 0
                                    }}
                                    {...(value === i ? { timeout: 1500 } : {})}
                                >
                                    <Typography
                                        color={uni_font_color_sub_1}
                                        fontFamily={uni_font_family}
                                        gutterBottom
                                        sx={{
                                            fontSize: 12,
                                            marginY: 2
                                        }}>
                                        {(tab.tags).map((tag, j) => <span key={j}>#{tag.replace(/ /g, "")} </span>)}
                                    </Typography>
                                </Grow>
                                {(tab.paragraphs).map((paragraph, j) =>
                                    <Grow
                                        key={j}
                                        in={value === i}
                                        style={{
                                            transformOrigin: '0 0 0',
                                            transitionDelay: value === i ? (j + 4) * 75  : 0
                                        }}
                                        {...(value === i ? { timeout: 1500 } : {})}
                                    >
                                        <Typography
                                            key={j}
                                            variant="body2"
                                            fontFamily={uni_font_family}
                                            color={uni_font_color}
                                            sx={{
                                                marginY: 2
                                            }}>
                                            {"> " + paragraph}
                                        </Typography>
                                    </Grow>)}
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Grow>
        );
    }
};

export default Experience;