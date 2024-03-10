import { Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Link, Box, Grid, Grow, Typography } from "@mui/material";
import { uni_font_color, uni_font_color_sub_1, uni_font_family } from "../constants";
import { tableInfo } from "./tableInfo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setCurrentPage } from "../../redux/globalSlice";

const Contact = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.global.currentPage);
    const screenWidth = useSelector(state => state.global.screenWidth);

    useEffect(() => {
        dispatch(setCurrentPage(3));
    })

    if (screenWidth <= 800) {
        return (
            <Grow
                in={currentPage.index === 3}
                style={{ transformOrigin: '0 0 0' }}
                {...(currentPage.index === 3 ? { timeout: 300 } : {})}
            >
                <Grid container sx={{ width: "100%" }}>
                    {tableInfo.map((row, index) => (
                        <Grow
                            in={true}
                            style={{
                                transformOrigin: '0 0 0',
                                transitionDelay: index * 100
                            }}
                            {...{ timeout: 1000 }}
                        >
                            <Grid item xs={12} key={index} sx={{ fontFamily: uni_font_family, color: uni_font_color }}>
                                {"> "}
                                <Link sx={{ fontFamily: uni_font_family, color: uni_font_color, wordWrap: 'break-word', textDecorationColor: uni_font_color }}
                                    key="Email" component="a" target="_blank" href={row.hrefString}>
                                    {row.target}
                                </Link>
                            </Grid>
                        </Grow>
                    ))}
                    <Grow
                        in={true}
                        style={{
                            transformOrigin: '0 0 0',
                            transitionDelay: tableInfo.length * 100
                        }}
                        {...{ timeout: 1000 }}
                    >
                        <Grid item xs={12}>
                            <Typography
                                color={uni_font_color_sub_1}
                                fontFamily={uni_font_family}
                                gutterBottom
                                sx={{
                                    fontSize: 12,
                                    marginY: 2
                                }}>
                                # Email is preferred.
                            </Typography>
                        </Grid>
                    </Grow>
                </Grid>
            </Grow>
        );
    } else {
        return (
            <Grow
                in={currentPage.index === 3}
                style={{ transformOrigin: '0 0 0' }}
                {...(currentPage.index === 3 ? { timeout: 300 } : {})}
            >
                <Box>
                    <TableContainer component={Paper} sx={{ maxWidth: "95%", margin: "0 auto", marginTop: 5, backgroundColor: "black", border: "1px solid green" }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell width={150} sx={{ fontFamily: uni_font_family, color: uni_font_color, fontWeight: "bold" }}>Method</TableCell>
                                    <TableCell sx={{ fontFamily: uni_font_family, color: uni_font_color, fontWeight: "bold" }}>Detail</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tableInfo.map((row, index) => (
                                    <Grow
                                        in={true}
                                        style={{
                                            transformOrigin: '0 0 0',
                                            transitionDelay: index * 100
                                        }}
                                        {...{ timeout: 1000 }}
                                    >
                                        <TableRow key={index}>
                                            <TableCell component="th" scope="row" sx={{ fontFamily: uni_font_family, color: uni_font_color }}>
                                                {"> " + row.target}
                                            </TableCell>
                                            <TableCell sx={{ fontFamily: uni_font_family, color: uni_font_color }}>
                                                {"> "}
                                                <Link sx={{ fontFamily: uni_font_family, color: uni_font_color }} key="Email" component="a" target="_blank" href={row.hrefString}>
                                                    {row.label}
                                                </Link>
                                            </TableCell>
                                        </TableRow>
                                    </Grow>
                                ))}
                            </TableBody>
                            <Grow
                                in={true}
                                style={{
                                    transformOrigin: '0 0 0',
                                    transitionDelay: tableInfo.length * 100
                                }}
                                {...{ timeout: 1000 }}
                            >
                                <caption style={{ fontFamily: uni_font_family, color: uni_font_color_sub_1 }}># Email is preferred.</caption>
                            </Grow>
                        </Table>
                    </TableContainer>
                </Box>
            </Grow>
        );
    }
}

export default Contact;