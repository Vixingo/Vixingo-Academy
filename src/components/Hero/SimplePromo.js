import { Box, Typography } from "@mui/material";
import React from "react";

function SimplePromo() {
    return (
        <>
            <Box
                sx={{
                    py: 3,
                    backgroundColor: "#121212",
                    color: "#fff",
                    textAlign: "center",
                }}
            >
                <Box>
                    <Typography variant="h4" sx={{ py: 2 }}>
                        Andrew Tate Course Curriculum
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{ maxWidth: "600px", margin: "0 auto" }}
                    >
                        Here's What You'll Learn in these 13+ Andrew Tate
                        Courses Made by Andrew Tate, Tristan Tate & other multi
                        millionaire coaches.
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

export default SimplePromo;
