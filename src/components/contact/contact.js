import { Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Link, Box, Grid, Grow } from "@mui/material";
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
                <Grid container sx={{ width: "95%" }}>
                    {tableInfo.map((row, index) => (
                        <Grid item xs={12} key={index} sx={{ fontFamily: uni_font_family, color: uni_font_color }}>
                            {"> "}
                            <Link sx={{ fontFamily: uni_font_family, color: uni_font_color, wordWrap: 'break-word', textDecorationColor: uni_font_color }}
                                key="Email" component="a" target="_blank" href={row.hrefString}>
                                {row.target}
                            </Link>
                        </Grid>
                    ))}
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
                    <Divider children="Contact" size="sm" sx={{ fontFamily: uni_font_family, color: uni_font_color }} />
                    <TableContainer component={Paper} sx={{ maxWidth: "95%", margin: "0 auto", marginTop: 5, backgroundColor: "black", border: "1px solid green" }}>
                        <Table>
                            <caption style={{ fontFamily: uni_font_family, color: uni_font_color_sub_1 }}>Email is preferred.</caption>
                            <TableHead>
                                <TableRow>
                                    <TableCell width={150} sx={{ fontFamily: uni_font_family, color: uni_font_color, fontWeight: "bold" }}>Method</TableCell>
                                    <TableCell sx={{ fontFamily: uni_font_family, color: uni_font_color, fontWeight: "bold" }}>Detail</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tableInfo.map((row, index) => (
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
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Grow>
        );
    }
}

export default Contact;