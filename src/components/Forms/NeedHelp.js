import React, { useEffect, useState } from "react";
import {
    Typography,
    Box,
    Container,
    Grid,
    Button,
    TextField,
    Alert,
    IconButton,
    Collapse,
    Snackbar,
} from "@mui/material";
import axios from "axios";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
function NeedHelp() {
    const [open, setOpen] = React.useState("");
    const [status, setStatus] = React.useState("");
    const [msg, setMsg] = React.useState("");
    const [errors, setErrors] = React.useState(false);
    const [filled, setFilled] = React.useState(false);
    const [mail, setmail] = React.useState(false);
    const [phn, setphn] = React.useState(false);
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "+880",
        message: "",
    });
    useEffect(() => {
        console.log(user.phone.toString().length);
    });
    const send = () => {
        console.log("send now!");
        const x = user;
        if (user.phone.toString().length === 14) {
            setphn(false);
            setErrors(false);
            // console.log(user.phone);
        } else {
            setphn(true);
            setErrors(true);
        }
        if (user.name.toString().length === 0) {
            setFilled(true);
            setErrors(true);
        } else {
            setFilled(false);
            setErrors(false);
        }
        if (user.email.toString().length === 0) {
            setmail(true);
            setErrors(true);
        } else {
            setmail(false);
            setErrors(false);
        }

        if (errors === false) {
            axios
                .post("https://vixingo.com/apis/save_other_leads.php", {
                    api_key: "KjaLHoOASHDjaUOxyqHikKASndwioerUH",
                    user_name: x.name,
                    user_email: x.email,
                    user_phone: x.phone,
                    user_message: x.message,
                })
                .then(function (response) {
                    console.log(response);
                    setOpen(true);
                    if (response.data.status) {
                        setStatus(response.data.status);
                        setMsg(response.data.msg);
                        // if (response.data.status === "Failed") {
                        // setSeverity("error");
                        // } else setSeverity("success");
                    } else {
                        setMsg(response.data.msg);
                        setStatus(response.data.warning);
                        // setSeverity("warning");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    };
    return (
        <>
            <Container
                sx={{
                    paddingTop: "150px",
                    paddingBottom: "80px",
                    color: "#fff",
                }}
            >
                <Box sx={{ padding: "30px", border: "2px solid #1A1924" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Typography
                                    variant="h3"
                                    sx={{ fontSize: "40px", fontWeight: "600" }}
                                >
                                    Need help?
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "16px",
                                        fontWeight: "400",
                                        marginTop: "10px",
                                        lineHeight: "25px",
                                    }}
                                >
                                    Vixingo prevents creates a two-party
                                    verification system that coiners from
                                    sending their funds to the wrong addresses.
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "22px",
                                        fontWeight: "600",
                                        marginTop: "25px",
                                    }}
                                >
                                    Get in touch with Valve team
                                </Typography>
                                <Box>
                                    <Button
                                        sx={{
                                            fontSize: "14px",
                                            textTransform: "inherit",
                                            marginTop: "20px",
                                        }}
                                    >
                                        <i class="fa-brands fa-discord"></i>
                                        Community on Discord
                                    </Button>
                                </Box>
                                <Box>
                                    <Button
                                        sx={{
                                            fontSize: "14px",
                                            textTransform: "inherit",
                                            marginTop: "20px",
                                        }}
                                    >
                                        <i class="fa-brands fa-telegram"></i>
                                        Official Telegram channel
                                    </Button>
                                </Box>
                                <Box>
                                    <Button
                                        sx={{
                                            fontSize: "14px",
                                            textTransform: "inherit",
                                            marginTop: "20px",
                                        }}
                                    >
                                        <i class="fa-brands fa-twitter"></i>
                                        Follow us on Twitter
                                    </Button>
                                </Box>
                                <Box>
                                    {/* <Button
                                        sx={{
                                            fontSize: "14px",
                                            textTransform: "inherit",
                                            marginTop: "20px",
                                        }}
                                    >
                                        <img
                                            style={{ marginRight: "10px" }}
                                            src="./img/youtube.png"
                                            alt=""
                                        />{" "}
                                        Youtube
                                    </Button> */}
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Collapse in={open}>
                                <Alert
                                    severity={status}
                                    action={
                                        <IconButton
                                            aria-label="close"
                                            color="inherit"
                                            size="small"
                                            onClick={() => {
                                                setOpen(false);
                                            }}
                                        >
                                            <CloseRoundedIcon fontSize="inherit" />{" "}
                                        </IconButton>
                                    }
                                    sx={{ mb: 2 }}
                                >
                                    {msg}
                                </Alert>
                            </Collapse>
                            <Box
                                sx={{
                                    backgroundColor: "#1A1924",
                                    padding: "20px 50px 30px 20px",
                                    borderRadius: "16px",
                                }}
                            >
                                <Typography
                                    sx={{ fontSize: "22px", fontWeight: "600" }}
                                >
                                    Write to us
                                </Typography>
                                <Box sx={{ display: "flex" }}>
                                    <TextField
                                        variant="standard"
                                        label="Your Name"
                                        id="standard-basic"
                                        error={filled}
                                        helperText={
                                            filled ? "Check Your Name" : ""
                                        }
                                        sx={{ m: 1 }}
                                        fullWidth
                                        value={user.name}
                                        onChange={(e) => {
                                            setUser({
                                                ...user,
                                                name: e.target.value,
                                            });
                                        }}
                                    />
                                    <TextField
                                        variant="standard"
                                        label="Email"
                                        fullWidth
                                        error={mail}
                                        helperText={
                                            mail
                                                ? "Enter a Valid email adress"
                                                : ""
                                        }
                                        sx={{
                                            m: 1,
                                            borderRadius: "0px",
                                        }}
                                        value={user.email}
                                        onChange={(e) => {
                                            setUser({
                                                ...user,
                                                email: e.target.value,
                                            });
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <TextField
                                        variant="standard"
                                        label="Phone Number"
                                        fullWidth
                                        error={phn}
                                        helperText={
                                            phn ? "Enter a Valid Number" : ""
                                        }
                                        sx={{
                                            m: 1,
                                            borderRadius: "0px",
                                        }}
                                        value={user.phone}
                                        onChange={(e) => {
                                            setUser({
                                                ...user,
                                                phone: e.target.value,
                                            });
                                        }}
                                    />
                                    <TextField
                                        variant="standard"
                                        label="Your message"
                                        fullWidth
                                        sx={{
                                            m: 1,
                                            borderRadius: "0px",
                                        }}
                                        value={user.message}
                                        onChange={(e) => {
                                            setUser({
                                                ...user,
                                                message: e.target.value,
                                            });
                                        }}
                                    />
                                </Box>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        m: 1,
                                        mt: 3,
                                    }}
                                    onClick={send}
                                >
                                    <Typography variant="h5">Send</Typography>
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
}

export default NeedHelp;
