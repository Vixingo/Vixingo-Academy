import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

function OurCourses() {
    return (
        <>
            <Box sx={{ py: 8, backgroundColor: "#fff" }}>
                <Container maxWidth="lg">
                    <Grid
                        container
                        sx={{
                            backgroundColor: "#000",
                        }}
                    >
                        <Grid item sm={12} md={6}>
                            <Box sx={{ width: "100%", overflow: "hidden" }}>
                                <img
                                    src="img/promo.webp"
                                    alt=""
                                    height="100%"
                                />
                            </Box>
                        </Grid>
                        <Grid item sm={12} md={6} sx={{ px: 8, py: 6 }}>
                            <Typography variant="h3" sx={{ color: "#fff" }}>
                                What Do You Get in $49 Andrew Tate Course Bundle
                                worth $5,000
                            </Typography>
                            <br />
                            <Typography
                                variant="subtitle1"
                                sx={{ color: "#ededed" }}
                            >
                                LEARN FROM ANDREW TATE:
                            </Typography>
                            <br />
                            <Box sx={{ color: "#fff", px: 2 }}>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: "bold",
                                        color: "#8c8c8c",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    Web Design -
                                </Typography>
                                <ul
                                    style={{
                                        marginLeft: "30px",
                                        marginTop: "10px",
                                        textTransform: "capitalize",
                                        marginBottom: "10px",
                                    }}
                                >
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                    <li>Bootstrap</li>
                                </ul>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        color: "#8c8c8c",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    Web Development -
                                </Typography>
                                <ul
                                    style={{
                                        marginLeft: "30px",
                                        textTransform: "capitalize",
                                        marginTop: "10px",
                                        marginBottom: "10px",
                                    }}
                                >
                                    <li>React</li>
                                    <li>Node.js</li>
                                    <li>Express.js</li>
                                    <li>Firebase</li>
                                    <li>Mongo DB</li>
                                </ul>
                            </Box>
                            <br />
                            <Button variant="contained">
                                Enroll Now at $49
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default OurCourses;
