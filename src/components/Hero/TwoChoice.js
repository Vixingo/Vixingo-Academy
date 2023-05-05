import { Box, Button, Typography } from "@mui/material";
import React from "react";

function TwoChoice() {
    return (
        <>
            <Box sx={{ textAlign: "center", py: 5 }}>
                <Typography variant="h1"> You Have Two Choices </Typography>
                <Typography
                    variant="h5"
                    sx={{
                        py: 4,
                        textAlign: "center",
                        maxWidth: "700px",
                        margin: "0 auto",
                    }}
                >
                    You need to choose on how you want to live the rest of your
                    life. Do you want to escape the matrix? Or do you want to
                    continue living in it?
                </Typography>
                <Box maxWidth={"750px"} sx={{ margin: "0 auto" }}>
                    <div className="main_video">
                        <iframe
                            src={`https://www.youtube-nocookie.com/embed/Ud_hP2raTmk`}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                </Box>
                <Box sx={{ color: "#fff", pt: 3 }}>
                    <Typography variant="h1"> Invest Wisely </Typography>
                    <Typography
                        variant="h5"
                        sx={{ maxWidth: "790px", margin: "0 auto", py: 2 }}
                    >
                        You can either invest one time $49 on Andrew Tate
                        courses and learn how to be financially free. Or you can
                        invest $99/Year on Netflix and learn absolutely nothing!
                    </Typography>

                    <br />
                    <Typography variant="h4">The Choice is Yours</Typography>

                    <Box sx={{ py: 2 }}>
                        <Button variant="outlined">Escape the Matrix</Button>
                        <Button variant="contained">Go to Netfilx</Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default TwoChoice;
