import React from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

function SignUp() {
    return (
        <>
            <Container sx={{ py: 20 }} maxWidth={"sm"}>
                <Typography variant="h1" sx={{ textAlign: "center" }}>
                    Contact Us And Let's Get in Touch
                </Typography>
                <Box sx={{ display: "flex" }}>
                    <TextField
                        variant="standard"
                        label="Your Name"
                        id="standard-basic"
                        sx={{ m: 1 }}
                        fullWidth
                    />
                    <TextField
                        variant="standard"
                        label="Email"
                        fullWidth
                        sx={{
                            m: 1,
                            borderRadius: "0px",
                        }}
                    />
                </Box>
                <Box>
                    <TextField
                        variant="standard"
                        label="Your message"
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
                >
                    <Typography variant="h5">Send</Typography>
                </Button>
            </Container>
        </>
    );
}

export default SignUp;
