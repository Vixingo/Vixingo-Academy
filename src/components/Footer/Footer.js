import { Box, Container, Typography } from "@mui/material";
import React from "react";

function Footer() {
    return (
        <>
            {" "}
            <Container sx={{ paddingBottom: "20px" }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        textAlign: { xs: "center", md: "unset" },
                    }}
                >
                    <Box>
                        <Typography sx={{ fontSize: "14px", mb: 2 }}>
                            Copyright VIXINGO 2023
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",

                            justifyContent: { xs: "center", md: "unset" },
                        }}
                    >
                        <Typography sx={{ fontSize: "14px" }}>
                            Privacy policy
                        </Typography>
                        <Typography
                            sx={{ fontSize: "14px", padding: "0 40px" }}
                        >
                            Legal
                        </Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                            Site map
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </>
    );
}

export default Footer;
