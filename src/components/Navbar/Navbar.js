import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "Contact",
        url: "/contact",
    },
    {
        title: "Refer and Earn $20",
        url: "/affiliate-program",
    },
];

function DrawerAppBar(props) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Box sx={{ my: 1 }}>
                {" "}
                <img
                    style={{ height: "27px" }}
                    src="/img/logo.png"
                    alt="logo"
                />{" "}
                <Typography sx={{ color: "#fff" }}>ACADEMY</Typography>
            </Box>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.title} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CssBaseline />
            <AppBar
                component="nav"
                sx={{
                    background: "rgba(0,0,0,0.65)",
                    backdropFilter: "blur(8px)",
                }}
            >
                <Container>
                    {" "}
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleOpenNavMenu}
                            sx={{ mr: 2, display: { md: "none" } }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {navItems.map((data) => {
                                return (
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Link to={data.url}>
                                            <Typography>
                                                {data.title}
                                            </Typography>
                                        </Link>
                                    </MenuItem>
                                );
                            })}

                            {/* {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))} */}
                        </Menu>
                        {/* <Typography
              sx={{
                flexGrow: 1,
                display: { xs: "inline" },
                fontWeight: "bold",
                fontSize: "19px",
                cursor: "pointer",
              }}
            >
              VALV X
            </Typography> */}
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "flex" },
                                fontWeight: "bold",
                                fontSize: "19px",
                                cursor: "pointer",
                                alignItems: "center",
                            }}
                        >
                            <Link to="/">
                                <img
                                    style={{ height: "27px" }}
                                    src="/img/logo.png"
                                    alt="logo"
                                />
                            </Link>
                        </Box>
                        <Box sx={{ display: { xs: "none", md: "block" } }}>
                            {navItems.map((item) => (
                                <Link to={item.url}>
                                    <Button sx={{ color: "#fff" }}>
                                        <Typography>{item.title}</Typography>
                                    </Button>
                                </Link>
                            ))}
                        </Box>
                        <Link to="/sign-up">
                            <Button
                                variant="outlined"
                                sx={{
                                    // border: "1px solid #fff",
                                    width: "134px",
                                    height: "40px",
                                    fontSize: "14px",
                                    ml: 2,
                                    fontWeight: "400",
                                }}
                            >
                                Join us
                            </Button>
                        </Link>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", md: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main">
                <Toolbar />
            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;
