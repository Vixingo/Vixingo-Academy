import { Box, Container, Typography } from "@mui/material";
import React from "react";

function Footer() {
    return (
        <>
            {" "}
            <Container sx={{ paddingBottom: "14px", pt: "10px" }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        textAlign: { xs: "center", md: "unset" },
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            mb: 1,
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
                    <Box>
                        <Typography sx={{ fontSize: "14px" }}>
                            Copyright VIXINGO 2023
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </>
    );
}

export default Footer;
