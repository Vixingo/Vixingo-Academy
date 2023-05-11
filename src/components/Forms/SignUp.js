import React, { useState } from "react";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Link,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useSnackbar } from "notistack";
function SignUp() {
    const { enqueueSnackbar } = useSnackbar();
    const [coupon, setCoupon] = useState(false);
    const [showcp, setShowcp] = useState(false);
    const [code, setCode] = useState("");

    const applyCoupon = () => {
        if (code == "vix20") {
            enqueueSnackbar(code + " Code Applied", { variant: "success" });
            setShowcp(true);
        } else {
            enqueueSnackbar(code + " Code invaild", { variant: "error" });
        }
    };

    return (
        <>
            <Container sx={{ py: 10 }} maxWidth={"sm"}>
                <Typography variant="h1" sx={{ textAlign: "center" }}>
                    Enroll Now
                </Typography>

                <Typography variant="h5" sx={{ mt: 1 }}>
                    Student Information
                </Typography>
                <Box sx={{ display: "flex" }}>
                    <TextField
                        variant="standard"
                        label="First Name"
                        id="standard-basic"
                        sx={{ m: 1 }}
                        fullWidth
                    />
                    <TextField
                        variant="standard"
                        label="Last Name"
                        fullWidth
                        sx={{
                            m: 1,
                            borderRadius: "0px",
                        }}
                    />
                </Box>
                <Box sx={{ display: "flex" }}>
                    <TextField
                        variant="standard"
                        label="Email Adress"
                        fullWidth
                        sx={{
                            m: 1,
                            borderRadius: "0px",
                        }}
                    />
                </Box>
                <Box sx={{ display: "flex" }}>
                    <TextField
                        variant="standard"
                        label="Phone Number"
                        fullWidth
                        sx={{
                            m: 1,
                            borderRadius: "0px",
                        }}
                    />
                </Box>
                <Typography variant="h5" sx={{ my: 2 }}>
                    Your order
                </Typography>
                <Card
                    sx={{
                        maxWidth: "sm",
                        m: 1,
                    }}
                >
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="/img/logo.png"
                        sx={{
                            p: 1,
                            // backgroundImage: "url(/img/logo.png) ",
                            backdropFilter: "blur(80px)",
                            filter: "contrast(210%) invert(19%)",
                        }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            The Ultimate Vixingo Course
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <Box mb={1}>
                                <Stack flexDirection={"row"}>
                                    <CheckIcon
                                        sx={{ color: "#12D50D", mr: 1 }}
                                    />{" "}
                                    One Time Payment With Lifetime Access
                                </Stack>
                                <Stack flexDirection={"row"}>
                                    <CheckIcon
                                        sx={{ color: "#12D50D", mr: 1 }}
                                    />{" "}
                                    30+ Hours Video Content
                                </Stack>
                                <Stack flexDirection={"row"}>
                                    <CheckIcon
                                        sx={{ color: "#12D50D", mr: 1 }}
                                    />{" "}
                                    Download 13+ Courses
                                </Stack>
                            </Box>

                            {showcp ? (
                                <>
                                    <hr />

                                    <Stack flexDirection={"row"} sx={{ my: 1 }}>
                                        <CheckIcon
                                            sx={{ color: "#12D50D", mr: 1 }}
                                        />{" "}
                                        Coupon Code Applied : {code}
                                    </Stack>
                                </>
                            ) : (
                                ""
                            )}
                            <hr />
                        </Typography>
                    </CardContent>

                    <Box
                        sx={{
                            mx: 3,
                            mb: 2,
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography variant="h6">Total</Typography>

                        <Typography variant="h5" sx={{ position: "relative" }}>
                            {showcp ? (
                                <>
                                    {" "}
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            position: "absolute",
                                            left: "-45px",
                                            top: "10px",
                                            textDecoration: "line-through",
                                            textDecorationColor: "red",
                                            textDecorationStyle: "solid",
                                        }}
                                    >
                                        $9000
                                    </Typography>
                                    $8000
                                </>
                            ) : (
                                "$9000"
                            )}
                        </Typography>
                    </Box>
                </Card>
                {/* coupon */}
                <Box sx={{ mx: 1 }}>
                    {coupon ? (
                        <Box sx={{ display: "flex" }}>
                            <TextField
                                variant="filled"
                                label="Coupon Code"
                                fullWidth
                                sx={{
                                    borderRadius: "0",
                                    flex: "1",
                                }}
                                value={code}
                                onChange={(e) => {
                                    setCode(e.target.value);
                                }}
                            />
                            <Button variant="outlined" onClick={applyCoupon}>
                                Apply Coupon
                            </Button>
                        </Box>
                    ) : (
                        <Link
                            onClick={() => {
                                setCoupon(true);
                            }}
                        >
                            Have a Coupon?
                        </Link>
                    )}
                </Box>

                <Button
                    variant="contained"
                    fullWidth
                    sx={{
                        mt: 3,
                    }}
                >
                    <Typography variant="h5">Buy Now</Typography>
                </Button>
            </Container>
        </>
    );
}

export default SignUp;
