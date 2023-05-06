import { Box, Button, Typography } from "@mui/material";
import React from "react";

function ReferHero() {
    return (
        <>
            <Box>
                <img src="/img/ref.jpg" alt="" width={"100%"} />
            </Box>
            <Box>
                <Typography variant="h2">How To Start Earning?</Typography>
                <Typography>
                    Our Refer and Earn program is Simple. First Sign up and
                    create a free account. Then get your refer link and start
                    promoting the course via social media, groups and other
                    engaging platforms. Whenever someone buys the course from
                    your link you make commision!
                </Typography>
                <Button variant="contained">Start earning</Button>
            </Box>
            <Box>
                <Typography variant="h1">
                    Best Strategies To Get Sales{" "}
                </Typography>
                <Typography>
                    Here are some best strategies being used by our top
                    affiliates -
                    <br />
                    <ol>
                        <li>
                            Create Content on Youtube & Instagram Like - (
                            Edit's, Small Videos, Speeches and Shorts ){" "}
                        </li>
                        <li>Create Reels on Tiktok</li>
                        <li>
                            Have a Website? Create Blog posts on Andrew Tate{" "}
                        </li>
                        <li>
                            Share the course on your whatsapp, facebook and
                            reddit groups{" "}
                        </li>
                        <li>
                            Want to get results faster? Run Google Ads on
                            Keywords - " Andrew Tate Course, Hustler's
                            University ''
                        </li>
                    </ol>
                </Typography>
                <br />
                <Typography>
                    To improve the effectiveness of your content, it is
                    recommended to include an introduction and conclusion that
                    promotes Andrew Tate's course. This can encourage people to
                    take action more quickly by providing them with a clear
                    understanding of what they stand to gain from the course.
                </Typography>
                <Button variant="contained">Sign Up</Button>
            </Box>
        </>
    );
}

export default ReferHero;
