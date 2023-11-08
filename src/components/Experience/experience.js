import * as React from 'react';
import { Divider, Typography, Tabs, Tab, Box, Button, ButtonGroup } from '@mui/material';
import { uni_font_color, uni_font_color_sub_1, uni_font_family } from '../constants';
import { tabInfo } from './tabInfo';

const Experience = () => {
    const [value, setValue] = React.useState(0);

    return (
        <>
            <Divider children="Experience" size="sm" sx={{ fontFamily: uni_font_family, color: uni_font_color }} />
            <Box sx={{ flexGrow: 1, display: 'flex' }}>
                <Tabs
                    orientation="vertical"
                    value={value}
                    onChange={(e, v) => setValue(v)}
                    textColor={uni_font_color}
                    indicatorColor='#000000'
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                    {tabInfo.map((tab, i) => <Tab key={i} id={i} label={tab.label} icon={tab.icon} iconPosition="start" sx={{ fontFamily: uni_font_family, color: value === i ? uni_font_color : uni_font_color_sub_1, textDecoration: value === i ? "underline" : "none" }} />)}
                </Tabs>
                {tabInfo.map((tab, i) => (
                    value === i && <Box key={i} sx={{ p: 3, maxWidth: 600 }}>
                        <Typography color={uni_font_color_sub_1} fontFamily={uni_font_family} gutterBottom sx={{ fontSize: 14 }} >
                            {tab.label}
                        </Typography>
                        <Typography variant="h5" color={uni_font_color} fontFamily={uni_font_family}>
                            {tab.header}
                        </Typography>
                        <Typography color={uni_font_color_sub_1} fontFamily={uni_font_family} sx={{ mb: 1.5 }}>
                            {tab.period}<br />{tab.organization}<br />{tab.city}
                        </Typography>
                        <ButtonGroup variant="outlined" fontFamily={uni_font_family}>
                            {(tab.links).map((link, j) =>
                                <Button
                                    key={j}
                                    href={link.url}
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
                        {(tab.paragraphs).map((paragraph, j) =>
                            <Typography
                                key={j}
                                variant="body2"
                                fontFamily={uni_font_family}
                                color={uni_font_color}
                                sx={{
                                    marginY: 2
                                }}>
                                {"> "}{paragraph}
                            </Typography>)}
                    </Box>
                ))}
            </Box>
        </>
    );
};

export default Experience;