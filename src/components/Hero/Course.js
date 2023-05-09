import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

function Course() {
    return (
        <>
            <Box className="Course" sx={{ backgroundColor: "#FFFFFF", py: 5 }}>
                <Container>
                    <Grid container sx={{ backgroundColor: "#000" }}>
                        <Grid
                            item
                            sm={12}
                            md={6}
                            sx={{
                                backgroundImage: "url(/img/tet.webp)",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "100%",
                            }}
                        >
                            <Box sx={{ width: "100%" }}>
                                {/* <img src="img/tet.webp" alt="" height="100%" /> */}
                            </Box>
                        </Grid>
                        <Grid item sm={12} md={6} sx={{ p: 3 }}>
                            <Box sx={{ color: "#fff", p: 4 }}>
                                {" "}
                                <Typography variant="h1">
                                    {" "}
                                    Hustler's University{" "}
                                </Typography>
                                <Typography variant="subtitle1" sx={{ py: 1 }}>
                                    8+ Hours
                                </Typography>
                                <Typography variant="h6">
                                    This Andrew Tate Course offers a
                                    comprehensive curriculum that covers a wide
                                    range of topics, including marketing, sales,
                                    finance, and entrepreneurship. With its
                                    focus on practical skills and real-world
                                    experience, Hustler's University has helped
                                    many individuals launch and grow their own
                                    businesses.{" "}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default Course;
