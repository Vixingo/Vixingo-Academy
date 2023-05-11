import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import { Link, redirect, useNavigate } from "react-router-dom";

function AdminLogin() {
    const navigate = useNavigate();
    return (
        <>
            <Container sx={{ py: 20 }} maxWidth={"sm"}>
                <Typography
                    variant="h2"
                    sx={{ textAlign: "center", textTransform: "uppercase" }}
                >
                    Admin Login
                </Typography>
                <Box>
                    <TextField
                        variant="filled"
                        label="Your ID"
                        id="standard-basic"
                        sx={{ m: 1 }}
                        fullWidth
                    />
                </Box>
                <Box>
                    <TextField
                        variant="filled"
                        label="Your Password"
                        fullWidth
                        sx={{
                            m: 1,
                            borderRadius: "0px",
                        }}
                    />
                </Box>

                <Button
                    variant="outlined"
                    sx={{
                        m: 1,
                        mt: 3,
                    }}
                    fullWidth
                    onClick={() => {
                        navigate("/admin");
                    }}
                >
                    <Typography variant="h5">Login</Typography>
                </Button>
            </Container>
        </>
    );
}

export default AdminLogin;
