import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { AppBar, Box, Toolbar, IconButton, Typography, InputBase, MenuItem, Menu } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TemporaryDrawer from "./Drawer";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#f1f3f4",
    "&:focus": {
        backgroundColor: alpha(theme.palette.common.black, 0.25),
        border: "1px solid red"
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("md")]: {
        marginLeft: theme.spacing(50),
        width: "auto"
    }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#5f6368"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "#5f6368",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),

        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "40ch",
            "&:focus": {
                width: "40ch"
            }
        }
    }
}));

export default function PrimarySearchAppBar(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = "primary-search-account-menu";
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right"
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right"
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>SasiKumar</MenuItem>
            <MenuItem onClick={handleMenuClose}>Kumarsasy@gmail.com</MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ background: "#fff", borderBottom: "1px solid #eee" }} elevation={0}>
                <Toolbar>
                    <IconButton size="large" edge="start" aria-label="open drawer" sx={{ mr: 2 }}>
                        <TemporaryDrawer />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ display: { xs: "none", sm: "block" } }}>
                        <span className="title-color-1">F</span>
                        <span className="title-color-2">u</span>
                        <span className="title-color-3">n</span>
                        <span className="title-color-1">d</span>
                        <span className="title-color-3">o</span>
                        <span className="title-color-2">o</span>
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: "none", md: "flex" } }}>
                        <IconButton size="large" aria-label="cart">
                            <ShoppingCartIcon />
                        </IconButton>
                        <IconButton size="large" aria-label="view">
                            <ViewStreamIcon />
                        </IconButton>
                        <IconButton size="large" edge="end" aria-label="profile" aria-controls={menuId} aria-haspopup="true" onClick={handleProfileMenuOpen}>
                            <AccountCircle />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </Box>
    );
}
