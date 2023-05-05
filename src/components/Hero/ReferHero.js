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
        </>
    );
}

export default ReferHero;
