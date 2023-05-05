import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

function ReachTop() {
    return (
        <>
            <Box
                sx={{
                    textAlign: "center",
                    color: "#fff",
                    backgroundColor: "#590E0E",
                    py: 5,
                }}
            >
                <Container>
                    <Typography variant="h1"> REACH THE TOP </Typography>

                    <Typography variant="subtitle1">
                        {" "}
                        FAIRYTAILES DON'T COME TRUE{" "}
                    </Typography>

                    <Typography
                        variant="h5"
                        sx={{ maxWidth: "600px", margin: "0 auto", my: 3 }}
                    >
                        People love to say you can accomplish anything. I’m
                        going to be completely honest with you, that’s bullshit.
                        <br />
                        <br />
                        Very few people have the dedication and work ethic to
                        operate in the top 1% of men.
                        <br />
                        <br />
                        Those that do, often don’t know how to get there.
                        Understand, if you’re dedicated and ready to work hard,
                        it’s not enough, you need to know WHAT to work on, WHAT
                        to dedicate yourself to.
                        <br />
                        <br />
                        I broke the Matrix and I will teach you how. When rich
                        people say how to get rich, 99% don’t listen.That’s why
                        the 1% are the 1%. ‍
                        <br />
                        <br />
                        Learn the WHAT, then you just do the work.
                    </Typography>
                    <Button
                        variant="contained"
                        fullWidth
                        size="medium"
                        sx={{ my: 1 }}
                    >
                        <Typography variant="h3">Enroll Now</Typography>
                    </Button>
                    <Typography variant="subtitle1">
                        TAKE ACTION NOW{" "}
                    </Typography>
                </Container>
            </Box>
        </>
    );
}

export default ReachTop;
