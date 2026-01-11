"use client"

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export const Philosophy = () => {
    const principles = [
        {
            id: 1,
            text: "Technology serves people, not the other way around",
        },
        {
            id: 2,
            text: "Full-stack understanding: hardware → networks → software → human experience",
        },
        {
            id: 3,
            text: "Driven by impact, guided by empathy, grounded in technical excellence",
        },
    ];

    return (
        <Box
            component="section"
            id="philosophy"
            sx={{
                py: { xs: 10, md: 14 },
                background: 'linear-gradient(180deg, #050A14 0%, #0F172A 50%, #050A14 100%)',
                position: 'relative',
            }}
        >
            <Container maxWidth="md">
                <Box
                    sx={{
                        textAlign: 'center',
                    }}
                >
                    {/* Section Title */}
                    <Typography
                        variant="h2"
                        component={motion.h2}
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        sx={{
                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                            fontWeight: 600,
                            mb: 3,
                            color: 'text.primary',
                        }}
                    >
                        Service-First Engineering
                    </Typography>

                    {/* Subtitle */}
                    <Typography
                        variant="h3"
                        component={motion.p}
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        sx={{
                            fontSize: { xs: '1.125rem', md: '1.375rem' },
                            fontWeight: 400,
                            color: 'primary.main',
                            mb: 6,
                            fontFamily: 'var(--font-inter), Inter, sans-serif',
                        }}
                    >
                        Why I do this
                    </Typography>

                    {/* Principles */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 4,
                        }}
                    >
                        {principles.map((principle, index) => (
                            <Box
                                key={principle.id}
                                component={motion.div}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                sx={{
                                    position: 'relative',
                                    paddingLeft: { xs: 3, md: 4 },
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        left: 0,
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        width: { xs: '4px', md: '6px' },
                                        height: { xs: '60%', md: '70%' },
                                        background: 'linear-gradient(180deg, #2DD4BF, #14B8A6)',
                                        borderRadius: '4px',
                                    },
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: { xs: '1.125rem', md: '1.375rem' },
                                        lineHeight: 1.8,
                                        color: 'text.secondary',
                                        textAlign: 'left',
                                        fontWeight: 400,
                                    }}
                                >
                                    {principle.text}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    {/* Closing Statement */}
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        sx={{
                            mt: 8,
                            pt: 6,
                            borderTop: '1px solid',
                            borderColor: 'steel.dark',
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: { xs: '1rem', md: '1.125rem' },
                                lineHeight: 1.9,
                                color: 'text.primary',
                                fontWeight: 500,
                                fontStyle: 'italic',
                            }}
                        >
                            "While I loved the logic of software engineering, I missed the impact.
                            Human connection is what drives me, not just code."
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};
