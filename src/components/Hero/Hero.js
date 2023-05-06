import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import GetStarted from "../Buttons/GetStarted";

function Hero() {
    return (
        <>
            <Box
                sx={{
                    textAlign: "center",
                    background: "#121212",
                    backgroundSize: "auto 100%",
                    color: "#fff",
                    py: 6,
                    px: 2,
                }}
            >
                <Box sx={{ pb: 6 }}>
                    <Typography
                        variant="h1"
                        sx={{ textTransform: "uppercase", color: "#d4af37" }}
                    >
                        The Vixingo Course
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{ maxWidth: "580px", margin: "0 auto", p: 2 }}
                    >
                        Over 50,000+ Students Have Changed Their Life! Enroll in
                        Vixingo Course Today!
                    </Typography>
                </Box>

                <div className="main_video">
                    <iframe
                        src={`https://www.youtube-nocookie.com/embed/9UExkxa3pp0`}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>

                <Box>
                    <Box
                        sx={{
                            maxWidth: "900px",
                            margin: "0 auto",
                        }}
                    >
                        {" "}
                        <Typography
                            variant="h2"
                            sx={{ p: 3, textTransform: "uppercase" }}
                        >
                            One platform Endless Oportunities! IT'S NOW OR
                            NEVER! JOIN VIXINGO COURSE TODAY
                        </Typography>
                        <Typography variant="h6" sx={{ p: 1 }}>
                            Learn Everything in Andrew tate course. From Money,
                            Fitness, Women this course bundle covers everything!
                        </Typography>
                    </Box>
                    <GetStarted />
                </Box>
            </Box>
        </>
    );
}

export default Hero;
