"use client"

import React from "react";
import {FiArrowRight, FiChevronsDown} from "react-icons/fi";
import {motion} from "framer-motion";
import { Box, Container, Stack, Typography, Avatar } from '@mui/material';
import portrait from "@/assets/portrait.jpg"
import { TopographyBackground } from "@/components/TopographyBackground";

export const Hero = () => {
    return (
        <Box
            component={motion.section}
            id="hero"
            sx={{
                minHeight: '100vh',
                overflow: 'hidden',
                position: 'relative',
                background: 'linear-gradient(180deg, #050A14 0%, #0A1628 100%)',
            }}
        >
            {/* Data Topography Background */}
            <TopographyBackground />

            <Box
                sx={{
                    position: 'relative',
                    display: 'grid',
                    minHeight: '100vh',
                    placeContent: 'center',
                    color: 'text.primary',
                }}
            >
                <Container
                    maxWidth="lg"
                    sx={{
                        px: { xs: 3, sm: 4, md: 6 },
                    }}
                >
                    <Stack
                        component={motion.div}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        alignItems="center"
                        spacing={3}
                        sx={{
                            zIndex: 10,
                        }}
                    >
                        {/* Professional Headshot */}
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            sx={{ position: 'relative' }}
                        >
                            <Avatar
                                src={portrait.src}
                                alt="Jake Edwards Portrait"
                                sx={{
                                    width: { xs: 160, md: 208, lg: 256 },
                                    height: { xs: 160, md: 208, lg: 256 },
                                    border: '2px solid',
                                    borderColor: 'primary.main',
                                    position: 'relative',
                                    boxShadow: `
                                        0 0 30px rgba(45, 212, 191, 0.2),
                                        0 10px 40px rgba(0, 0, 0, 0.5)
                                    `,
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',

                                    '&:hover': {
                                        transform: 'scale(1.01)',
                                        boxShadow: `
                                            0 0 40px rgba(45, 212, 191, 0.3),
                                            0 15px 50px rgba(0, 0, 0, 0.6)
                                        `,
                                    },

                                    my: 2,
                                }}
                            />
                        </Box>

                        {/* Name in Fira Code */}
                        <Typography
                            component={motion.h1}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            variant="h1"
                            sx={{
                                color: 'text.primary',
                                fontSize: { xs: '2.5rem', md: '4rem' },
                                fontWeight: 700,
                                textAlign: 'center',
                            }}
                        >
                            Jake Edwards
                        </Typography>

                        {/* Service-First Tagline */}
                        <Typography
                            component={motion.h2}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            variant="h3"
                            sx={{
                                color: 'primary.main',
                                fontSize: { xs: '1.25rem', md: '1.75rem' },
                                fontWeight: 600,
                                textAlign: 'center',
                                maxWidth: '800px',
                            }}
                        >
                            Technical Solutions & Engineering
                        </Typography>

                        {/* Description */}
                        <Typography
                            component={motion.p}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            variant="body1"
                            sx={{
                                mb: 2,
                                maxWidth: '700px',
                                fontSize: { xs: '1rem', md: '1.125rem' },
                                textAlign: 'center',
                                px: { xs: 3, md: 2 },
                                color: 'text.secondary',
                                lineHeight: 1.8,
                            }}
                        >
                            Full-stack systems specialist—from hardware and networks to software and UI.
                            Driven by human connection and the desire to see technical skills improve lives.
                        </Typography>

                        {/* Download Resume Button */}
                        <Box
                            component={motion.a}
                            href="/jake-edwards-resume.pdf"
                            download
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5,
                                width: 'fit-content',
                                color: '#0A1628',
                                position: 'relative',
                                borderRadius: '8px',
                                px: 4,
                                py: 1.75,
                                textDecoration: 'none',
                                fontSize: '1rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                background: '#2DD4BF',
                                border: '1px solid #2DD4BF',
                                boxShadow: '0 4px 20px rgba(45, 212, 191, 0.25)',
                                transition: 'all 0.3s ease',

                                '&:hover': {
                                    background: '#5EEAD4',
                                    borderColor: '#5EEAD4',
                                    boxShadow: '0 6px 30px rgba(45, 212, 191, 0.35)',
                                },
                            }}
                        >
                            Download Resume
                            <FiArrowRight />
                        </Box>
                    </Stack>

                    {/* Scroll Indicator */}
                    <Box
                        component="a"
                        href="#philosophy"
                        sx={{
                            position: 'absolute',
                            bottom: 28,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            textDecoration: 'none',
                            color: 'steel.light',
                        }}
                    >
                        <Box
                            component={motion.div}
                            animate={{
                                y: [0, 10, 0],
                            }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                repeat: Infinity,
                                delay: 2,
                            }}
                            sx={{
                                '&:hover svg': {
                                    color: 'primary.main',
                                },
                            }}
                        >
                            <FiChevronsDown
                                style={{
                                    width: '36px',
                                    height: '36px',
                                    transition: 'color 0.3s',
                                }}
                            />
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}
