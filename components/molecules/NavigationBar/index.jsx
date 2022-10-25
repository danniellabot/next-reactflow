// create navigation bar component using material ui components

import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Avatar, Tooltip } from "@mui/material";
import Menu from '../../atoms/Menu';
import MenuItem from '../../atoms/MenuItem';
import Button from '../../atoms/Button';

const pages = ["Review", "Design", "Explore", "Approve", "Deploy", "Analytics"];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const NavigationBar = () => {
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
    
    return (
        <AppBar
        position="fixed"
        sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: "#f5f5f5",
        }}
        >
        <Toolbar disableGutters>
            <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
            }}
            >
            Material UI
            </Typography>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={handleOpenNavMenu}
            >
            <Menu />
            </IconButton>
            <Menu
            id="nav-menu"
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            MenuListProps={{
                "aria-labelledby": "nav-menu",
            }}
            >
            {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                {page}
                </MenuItem>
            ))}
            </Menu>
            <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
                display: { xs: "none", md: "flex" },
                flexGrow: 1,
            }}
            />
            <Tooltip title="Account settings">
            <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="open drawer"
                onClick={handleOpenUserMenu}
            >
                <Avatar sx={{ bgcolor: "#f50057" }}>M</Avatar>
            </IconButton>
            </Tooltip>
            <Menu
            id="user-menu"
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
            MenuListProps={{
                "aria-labelledby": "user-menu",
            }}
            >
            {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                {setting}
                </MenuItem>
            ))}
            </Menu>
        </Toolbar>
        </AppBar>
    );
}

export default NavigationBar;
