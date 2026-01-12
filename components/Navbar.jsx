"use client"

import Link from "next/link";
import React, {useState} from "react";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { AppBar, Paper, Drawer, Stack, IconButton, Typography } from '@mui/material';

const navlinks = [
    {title: "About", path: ""},
    {title: "Philosophy", path: "#philosophy"},
    {title: "Capabilities", path: "#capabilities"},
    {title: "Certifications", path: "#certifications"},
    {title: "Experience", path: "#experience"},
    {title: "Contact", path: "#contact"},
];

export const Navbar = () => {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }
    const closeNav = () => {
        setNav(false)
    }

    return (
        <>
            {/* Desktop Navigation */}
            <AppBar
                position="fixed"
                sx={{
                    background: 'transparent',
                    boxShadow: 'none',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    pointerEvents: 'none',
                }}
            >
                <Paper
                    variant="glass"
                    sx={{
                        mt: 4,
                        borderRadius: '24px',
                        p: 1,
                        display: { xs: 'none', md: 'flex' },
                        justifyContent: 'center',
                        // maxWidth: '400px',
                        pointerEvents: 'auto',
                    }}
                >
                    <Stack direction="row" spacing={4} sx={{ p: 1 }}>
                        {navlinks.map((link) => (
                            <Link
                                key={link.title}
                                href={link.path}
                                style={{ textDecoration: 'none' }}
                            >
                                <Typography
                                    sx={{
                                        color: 'white',
                                        fontWeight: 'bold',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            color: 'rgba(255, 255, 255, 0.5)',
                                        },
                                    }}
                                >
                                    {link.title}
                                </Typography>
                            </Link>
                        ))}
                    </Stack>
                </Paper>
            </AppBar>

            {/* Mobile Menu Button */}
            <IconButton
                onClick={toggleNav}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    position: 'fixed',
                    top: { xs: 20, sm: 40 },
                    left: { xs: 20, sm: 40 },
                    zIndex: 1300,
                    color: 'rgba(255, 255, 255, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.7)',
                    borderRadius: '4px',
                    p: 1,
                }}
            >
                {nav ? (
                    <AiOutlineClose style={{ width: '24px', height: '24px' }} />
                ) : (
                    <AiOutlineMenu style={{ width: '24px', height: '24px' }} />
                )}
            </IconButton>

            {/* Mobile Drawer */}
            <Drawer
                anchor="left"
                open={nav}
                onClose={closeNav}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        width: '100%',
                        background: 'rgba(0, 0, 0, 0.9)',
                    },
                }}
            >
                <Stack
                    spacing={4}
                    sx={{
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {navlinks.map((link) => (
                        <Link
                            key={link.title}
                            href={link.path}
                            onClick={closeNav}
                            style={{ textDecoration: 'none' }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        color: 'rgba(255, 255, 255, 0.5)',
                                    },
                                }}
                            >
                                {link.title}
                            </Typography>
                        </Link>
                    ))}
                </Stack>
            </Drawer>
        </>
    );
}