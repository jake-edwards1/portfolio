"use client"

import Link from "next/link";
import React, {useState, useEffect} from "react";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { AppBar, Paper, Drawer, Stack, IconButton, Typography, Box } from '@mui/material';

const navlinks = [
    {title: "About", path: "", id: "hero"},
    {title: "Experience", path: "#experience", id: "experience"},
    {title: "Capabilities", path: "#capabilities", id: "capabilities"},
    {title: "Certifications", path: "#certifications", id: "certifications"},
    {title: "Contact", path: "#contact", id: "contact"},
];

export const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [activeSection, setActiveSection] = useState("")
    const [mounted, setMounted] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }
    const closeNav = () => {
        setNav(false)
    }

    // Handle navigation click with smooth scrolling
    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        closeNav(); // Close mobile menu if open

        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Update URL hash without triggering navigation
            window.history.pushState(null, '', sectionId === 'hero' ? '/' : `#${sectionId}`);
        } else if (sectionId === 'hero') {
            // Scroll to top for "About" section
            window.scrollTo({ top: 0, behavior: 'smooth' });
            window.history.pushState(null, '', '/');
        }
    };

    // Handle initial hash on page load/refresh
    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            // Small delay to ensure DOM is ready
            setTimeout(() => {
                const section = document.getElementById(hash);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        }
    }, []);

    // Track active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200; // Offset for navbar height + buffer

            // Find which section we're currently in
            for (let i = navlinks.length - 1; i >= 0; i--) {
                const section = document.getElementById(navlinks[i].id);
                if (section) {
                    const sectionTop = section.offsetTop;
                    if (scrollPosition >= sectionTop) {
                        setActiveSection(navlinks[i].id);
                        break;
                    }
                }
            }
        };

        // Set mounted first to ensure consistent rendering
        setMounted(true);

        // Small delay to ensure DOM is fully ready
        const timeoutId = setTimeout(() => {
            handleScroll();
        }, 0);

        // Add scroll listener with throttling
        let ticking = false;
        const scrollListener = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', scrollListener, { passive: true });

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('scroll', scrollListener);
        };
    }, []);

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
                suppressHydrationWarning
            >
                <Paper
                    variant="glass"
                    sx={{
                        mt: 4,
                        borderRadius: '24px',
                        p: 1,
                        display: { xs: 'none', md: 'flex' },
                        justifyContent: 'center',
                        pointerEvents: 'auto',
                        position: 'relative',
                    }}
                >
                    <Stack direction="row" spacing={4} sx={{ p: 1, position: 'relative' }}>
                        {navlinks.map((link, index) => (
                            <Link
                                key={link.title}
                                href={link.path}
                                onClick={(e) => handleNavClick(e, link.id)}
                                style={{ textDecoration: 'none', position: 'relative', cursor: 'pointer' }}
                            >
                                <Typography
                                    suppressHydrationWarning
                                    sx={{
                                        color: mounted && activeSection === link.id ? 'white' : 'rgba(255, 255, 255, 0.7)',
                                        fontWeight: 'bold',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            color: 'white',
                                        },
                                    }}
                                >
                                    {link.title}
                                </Typography>
                                {/* Active indicator underline */}
                                {mounted && activeSection === link.id && (
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: -4,
                                            left: 0,
                                            right: 0,
                                            height: '2px',
                                            background: '#2DD4BF',
                                            borderRadius: '2px',
                                            animation: 'slideIn 0.3s ease',
                                            '@keyframes slideIn': {
                                                from: {
                                                    transform: 'scaleX(0)',
                                                },
                                                to: {
                                                    transform: 'scaleX(1)',
                                                },
                                            },
                                        }}
                                    />
                                )}
                            </Link>
                        ))}
                    </Stack>
                </Paper>
            </AppBar>

            {/* Mobile Menu Button */}
            <IconButton
                onClick={toggleNav}
                suppressHydrationWarning
                sx={{
                    display: { xs: nav ? 'none' : 'flex', md: 'none' },
                    position: 'fixed',
                    top: { xs: 20, sm: 32 },
                    left: { xs: 20, sm: 32 },
                    zIndex: 1300,
                    color: 'white',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '12px',
                    p: 1.5,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        background: 'rgba(255, 255, 255, 0.15)',
                        transform: 'scale(1.05)',
                    },
                }}
            >
                    <AiOutlineMenu style={{ width: '24px', height: '24px' }} />
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
                        background: 'rgba(0, 0, 0, 0.95)',
                        backdropFilter: 'blur(10px)',
                    },
                }}
            >
                {/* Close Button - Top Right */}
                <IconButton
                    onClick={closeNav}
                    sx={{
                        position: 'absolute',
                        top: { xs: 20, sm: 32 },
                        right: { xs: 20, sm: 32 },
                        color: 'white',
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '12px',
                        p: 1.5,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            background: 'rgba(255, 255, 255, 0.15)',
                            transform: 'scale(1.05)',
                        },
                    }}
                >
                    <AiOutlineClose style={{ width: '24px', height: '24px' }} />
                </IconButton>

                {/* Navigation Links - Left & Top Aligned */}
                <Stack
                    spacing={3.5}
                    sx={{
                        pt: { xs: 16, sm: 20 },
                        pl: { xs: 6, sm: 8 },
                        pr: 4,
                    }}
                >
                    {navlinks.map((link) => (
                        <Link
                            key={link.title}
                            href={link.path}
                            onClick={(e) => handleNavClick(e, link.id)}
                            style={{ textDecoration: 'none', cursor: 'pointer' }}
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    transition: 'all 0.3s ease',
                                    fontFamily: 'Fira Code, monospace',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        color: '#2DD4BF',
                                        transform: 'translateX(8px)',
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