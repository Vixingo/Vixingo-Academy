import { Box, Button, Typography } from "@mui/material";
import React from "react";

function GetStarted() {
    return (
        <>
            <Button
                variant="contained"
                sx={{
                    m: 3,
                    p: 2,
                    // width: "134px",
                    // height: "40px",

                    ml: 2,
                }}
            >
                <Typography
                    sx={{
                        fontSize: "18px",
                    }}
                >
                    {" "}
                    GET STARTED TODAY FOR JUST $49
                </Typography>{" "}
            </Button>
        </>
    );
}

export default GetStarted;
