"use client"

import React from 'react';
import { Box, Container, Typography, Card, CardContent, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { FaAward, FaNetworkWired, FaShieldAlt, FaCode } from 'react-icons/fa';
import { MdOutlineVerified } from 'react-icons/md';
import { TypewriterText } from '@/components/TypewriterText';

const certifications = [
    {
        id: 1,
        name: "CompTIA A+",
        provider: "CompTIA",
        icon: FaAward,
        color: '#2DD4BF',
        description: "Foundational IT skills covering hardware, networking, and troubleshooting",
        status: "Certified"
    },
    {
        id: 2,
        name: "TestOut Network Pro",
        provider: "TestOut",
        icon: FaNetworkWired,
        color: '#14B8A6',
        description: "Advanced networking concepts, protocols, and infrastructure",
        status: "Certified"
    },
    {
        id: 3,
        name: "TestOut Security Pro",
        provider: "TestOut",
        icon: FaShieldAlt,
        color: '#1E3A5F',
        description: "Security principles, best practices, and threat mitigation",
        status: "Certified"
    },
    {
        id: 4,
        name: "CWNA",
        provider: "CWNP",
        icon: FaNetworkWired,
        color: '#64748B',
        description: "Certified Wireless Network Administrator - RF fundamentals and WLAN design",
        status: "In Progress"
    },
    {
        id: 5,
        name: "Web Development Certificate",
        provider: "BYUI",
        icon: FaCode,
        color: '#94A3B8',
        description: "Full-stack web development and modern frameworks",
        status: "Certified"
    },
];

export const Certifications = () => {
    return (
        <Box
            component="section"
            id="certifications"
            sx={{
                py: { xs: 8, md: 12 },
                background: 'linear-gradient(180deg, #0A1628 0%, #050A14 100%)',
                position: 'relative',
            }}
        >
            <Container maxWidth="lg">
                <TypewriterText
                    text="Certifications & Credentials"
                    variant="h2"
                    sx={{
                        fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3.5rem' },
                        fontWeight: 600,
                        mb: 2,
                        textAlign: 'center',
                        color: 'text.primary',
                    }}
                />

                <Typography
                    variant="body1"
                    sx={{
                        fontSize: { xs: '1rem', md: '1.125rem' },
                        textAlign: 'center',
                        color: 'text.secondary',
                        mb: 6,
                        maxWidth: '700px',
                        mx: 'auto',
                    }}
                >
                    Continuously learning and staying current with industry-recognized certifications
                </Typography>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            md: 'repeat(2, 1fr)',
                            lg: 'repeat(3, 1fr)',
                        },
                        gap: { xs: 3, md: 4 },
                    }}
                >
                    {certifications.map((cert, index) => (
                        <Box
                            key={cert.id}
                            component={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card
                                sx={{
                                    background: 'background.paper',
                                    border: '1px solid',
                                    borderColor: 'steel.dark',
                                    borderRadius: 3,
                                    height: '100%',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',

                                    '&:hover': {
                                        borderColor: 'primary.main',
                                        boxShadow: `0 8px 30px rgba(45, 212, 191, 0.2)`,
                                        transform: 'translateY(-4px)',
                                    },
                                }}
                            >
                                <CardContent
                                    sx={{
                                        p: { xs: 3, md: 4 },
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: '100%',
                                    }}
                                >
                                    {/* Icon and Status */}
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-start',
                                            mb: 2,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 56,
                                                height: 56,
                                                borderRadius: 2,
                                                background: `linear-gradient(135deg, ${cert.color}20, ${cert.color}10)`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                border: '1px solid',
                                                borderColor: `${cert.color}40`,
                                            }}
                                        >
                                            {React.createElement(cert.icon, {
                                                style: { fontSize: '28px', color: cert.color },
                                            })}
                                        </Box>

                                        <Chip
                                            icon={cert.status === "Certified" ? <MdOutlineVerified /> : null}
                                            label={cert.status}
                                            size="small"
                                            sx={{
                                                backgroundColor: cert.status === "Certified" ? 'primary.main' : 'steel.main',
                                                color: cert.status === "Certified" ? 'primary.contrastText' : 'text.primary',
                                                fontWeight: 600,
                                                fontSize: '0.75rem',
                                            }}
                                        />
                                    </Box>

                                    {/* Certification Name */}
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontSize: '1.25rem',
                                            fontWeight: 600,
                                            color: 'text.primary',
                                            mb: 0.5,
                                        }}
                                    >
                                        {cert.name}
                                    </Typography>

                                    {/* Provider */}
                                    <Typography
                                        sx={{
                                            fontSize: '0.875rem',
                                            color: 'primary.main',
                                            fontWeight: 600,
                                            mb: 2,
                                        }}
                                    >
                                        {cert.provider}
                                    </Typography>

                                    {/* Description */}
                                    <Typography
                                        sx={{
                                            fontSize: '0.875rem',
                                            color: 'text.secondary',
                                            lineHeight: 1.7,
                                            flexGrow: 1,
                                        }}
                                    >
                                        {cert.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};
