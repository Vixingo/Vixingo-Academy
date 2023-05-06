import { Box, Typography } from "@mui/material";
import React from "react";
import GetStarted from "../Buttons/GetStarted";

function Compare() {
    return (
        <>
            <Box
                sx={{
                    py: 8,
                    px: 2,
                    backgroundColor: "red",
                    textAlign: "center",
                    background: "#000",
                    // backgroundRepeat: "no-repeat",
                    // backgroundPositionX: "-200px",
                    color: "#fff",
                }}
            >
                <Typography
                    variant="h5"
                    sx={{ textAlign: "center", fontWeight: "bold" }}
                >
                    A $100K ON COLLEGE OR $49 ON ANDREW TATE COURSES?
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{ textAlign: "center", m: 3 }}
                >
                    {" "}
                    ANDREW TATE UNIVERSITY{" "}
                </Typography>
                <Typography
                    sx={{
                        maxWidth: "600px",
                        margin: "0 auto",
                        textAlign: "center",
                    }}
                >
                    College can cost over $100k, but the current system creates
                    worker ants who toil for their entire lives without reaping
                    the benefits. You work 8 hours a Day for somoene else for 40
                    years and what do you get? Fucking nothing!
                    <br />
                    <br />
                    This reality frustrated me to no end, and I decided to take
                    action by creating a program to teach young people and men
                    how to achieve the highest level of income possible while
                    also developing themselves as powerful individuals who can't
                    be brought down by societal pressures.
                    <br />
                    <br />I want to empower people to take control of their
                    lives and financial futures, rather than being stuck in a
                    system that doesn't prioritize their well-being. Join the
                    Andrew Tate Course today and escape the rat race!
                </Typography>
                <GetStarted />
            </Box>
        </>
    );
}

export default Compare;
