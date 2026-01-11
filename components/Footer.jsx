"use client"

import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { Container, Typography, IconButton, Box } from '@mui/material';

export const Footer = () => {
    return (
        <Container maxWidth="lg" sx={{ my: 3 }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column-reverse', lg: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 2.5,
                }}
            >
                <Box>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: '1rem', md: '1.125rem' },
                            textAlign: { xs: 'center', lg: 'left' },
                        }}
                    >
                        ©{new Date().getFullYear()}. All rights reserved.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: { xs: 'center', lg: 'flex-end' },
                        gap: 1,
                    }}
                >
                    <IconButton
                        href="https://linkedin.com/in/jake-edwards647"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit LinkedIn profile"
                        sx={{
                            color: 'text.primary',
                            '& svg': {
                                width: { xs: '1.75rem', md: '2rem' },
                                height: { xs: '1.75rem', md: '2rem' },
                            },
                        }}
                    >
                        <FaLinkedin />
                    </IconButton>
                    <IconButton
                        href="https://github.com/jake-edwards1"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit GitHub profile"
                        sx={{
                            color: 'text.primary',
                            '& svg': {
                                width: { xs: '1.75rem', md: '2rem' },
                                height: { xs: '1.75rem', md: '2rem' },
                            },
                        }}
                    >
                        <FaGithubSquare />
                    </IconButton>
                </Box>
            </Box>
        </Container>
    );
};