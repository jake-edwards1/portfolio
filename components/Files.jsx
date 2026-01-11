"use client"

import React from 'react'
import {motion, useMotionTemplate} from 'framer-motion'
import { HiDownload } from 'react-icons/hi'
import { Box, Stack, Link } from '@mui/material'
import { useColorAnimation } from "@/hooks/useColorAnimation";

export default function Files() {
    const color = useColorAnimation();

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`

    return (
        <Box
            component={motion.section}
            id="about"
            style={{backgroundImage}}
            sx={{
                display: 'grid',
                minHeight: '100vh',
                minWidth: '100%',
                placeContent: 'center',
                overflow: 'hidden',
                color: 'text.primary',
            }}
        >
            <Stack
                component={motion.div}
                spacing={2.5}
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.1}}
                sx={{
                    fontSize: '1.125rem',
                    fontWeight: 500,
                }}
            >
                <Link
                    href='/jake-edwards-resume1.pdf'
                    download
                    underline="none"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                        borderRadius: '9999px',
                        px: 2,
                        py: 1.5,
                        color: 'text.primary',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            transform: 'scale(1.05)',
                        },
                        '&:active': {
                            transform: 'scale(1)',
                        },
                        '&:focus': {
                            transform: 'scale(1.05)',
                        },
                        '& svg': {
                            opacity: 0.6,
                            transition: 'transform 0.3s ease',
                        },
                        '&:hover svg': {
                            transform: 'translateY(0.25rem)',
                        },
                    }}
                >
                    Support
                    <HiDownload />
                </Link>
                <Link
                    href='/jake-edwards-resume2.pdf'
                    download
                    underline="none"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                        borderRadius: '9999px',
                        px: 2,
                        py: 1.5,
                        color: 'text.primary',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            transform: 'scale(1.05)',
                        },
                        '&:active': {
                            transform: 'scale(1)',
                        },
                        '&:focus': {
                            transform: 'scale(1.05)',
                        },
                        '& svg': {
                            opacity: 0.6,
                            transition: 'transform 0.3s ease',
                        },
                        '&:hover svg': {
                            transform: 'translateY(0.25rem)',
                        },
                    }}
                >
                    Software Engineering
                    <HiDownload />
                </Link>
            </Stack>
        </Box>
    )
}
