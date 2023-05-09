import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

function ReferHero() {
    return (
        <>
            <Box sx={{ maxHeight: "500px", overflow: "hidden" }}>
                <img src="/img/ref.jpg" alt="" width={"100%"} />
            </Box>
            <Box
                sx={{
                    py: 4,
                    px: 2,
                    maxWidth: "800px",
                    margin: "0 auto",
                    textAlign: "center",
                }}
            >
                <Typography variant="h1">How To Start Earning?</Typography>
                <Typography variant="h5" sx={{ my: 3 }}>
                    Our Refer and Earn program is Simple. First Sign up and
                    create a free account. Then get your refer link and start
                    promoting the course via social media, groups and other
                    engaging platforms. Whenever someone buys the course from
                    your link you make commision!
                </Typography>
                <Button variant="outlined">Start earning</Button>
            </Box>
            <Box sx={{ backgroundColor: "#590E0E", py: 6 }}>
                <Container maxWidth="md">
                    <Typography variant="h1">
                        Best Strategies To Get Sales{" "}
                    </Typography>
                    <Typography variant="h6">
                        <br />
                        Here are some best strategies being used by our top
                        affiliates -
                        <br />
                        <br />
                        <ol style={{ marginLeft: "24px" }}>
                            <li>
                                Create Content on Youtube & Instagram Like - (
                                Edit's, Small Videos, Speeches and Shorts ){" "}
                            </li>
                            <li>Create Reels on Tiktok</li>
                            <li>
                                Have a Website? Create Blog posts on Andrew Tate{" "}
                            </li>
                            <li>
                                Share the course on your whatsapp, facebook and
                                reddit groups{" "}
                            </li>
                            <li>
                                Want to get results faster? Run Google Ads on
                                Keywords - " Andrew Tate Course, Hustler's
                                University ''
                            </li>
                        </ol>
                    </Typography>
                    <br />
                    <Typography variant="h6">
                        To improve the effectiveness of your content, it is
                        recommended to include an introduction and conclusion
                        that promotes Andrew Tate's course. This can encourage
                        people to take action more quickly by providing them
                        with a clear understanding of what they stand to gain
                        from the course.
                    </Typography>
                    <br />
                    <Button variant="contained" size="large">
                        Sign Up
                    </Button>
                </Container>
            </Box>
            {/* how do you get paid */}
            <Box sx={{ py: 8, backgroundColor: "#efefef" }}>
                <Container maxWidth="lg">
                    <Grid
                        container
                        sx={{
                            backgroundColor: "#000",
                            overflow: "hidden",
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
                            <Typography variant="h1" sx={{ color: "#fff" }}>
                                How Do you Get Paid?
                            </Typography>
                            <br />
                            {/* <Typography
                                variant="subtitle1"
                                sx={{ color: "#ededed" }}
                            >
                                LEARN FROM ANDREW TATE:
                            </Typography>
                            <br /> */}
                            <Box sx={{ color: "#fff", px: 1 }}>
                                <Typography variant="h5">
                                    You get paid $15 Commision when someone buys
                                    the bundle course from your link. <br />
                                    <br />
                                    These are the 3 Payment methods through
                                    which payments will be done -
                                    <br />
                                    <br />
                                    1) Paypal
                                    <br />
                                    2) Payoneer
                                    <br />
                                    3) UPI ( For People in India )
                                    <br />
                                    <br />
                                    All sales done in a paticular month let's
                                    say for example in january then the payment
                                    for the month january will be made on 1
                                    Feburary.
                                </Typography>
                            </Box>
                            <br />
                            <Button variant="contained">Sign Up</Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default ReferHero;
