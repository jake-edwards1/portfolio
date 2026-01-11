"use client"

import React from 'react';
import Image from "next/image";
import { Box, Container, Typography, Card, CardContent, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import webAdmin from "@/assets/qwa.png"

const experiences = [
    {
        id: 1,
        type: "Enterprise Systems",
        title: "QuickBill Web Admin - Enterprise Systems Development & Support",
        company: "Henry Schein One",
        year: "2022-2024",
        description: "Lead technical role on an enterprise web application serving 38% of U.S. dental offices. " +
            "Developed internal management and support tools for troubleshooting billing statements and account management. " +
            "Key focus on system reliability, user support workflows, and integration with Active Directory for authorization.",
        impact: [
            "Served ~38% of U.S. dental offices",
            "Internal support & troubleshooting tools",
            "Account management & configuration",
            "Enterprise authentication integration"
        ],
        technologies: ["React", "Next.js", "Material UI", "Java", "Spring Boot", "Active Directory"],
        image: webAdmin,
    },
];

const technicalBackground = [
    {
        id: 1,
        title: "Full-Stack Development Experience",
        description: "Strong foundation in software development enabling deep understanding of application architecture, debugging, and end-to-end systems troubleshooting.",
        technologies: ["React/Next.js", "Java/Spring Boot", "RESTful APIs", "Databases"]
    },
    {
        id: 2,
        title: "Systems Integration Knowledge",
        description: "Experience integrating enterprise systems, authentication services, and complex data workflows—essential for field engineering roles.",
        technologies: ["Active Directory", "API Integration", "Data Migration", "System Configuration"]
    },
];

export const Experience = () => {
    return (
        <Box
            component="section"
            id="experience"
            sx={{
                py: { xs: 8, md: 12 },
                background: 'linear-gradient(180deg, #050A14 0%, #0A1628 50%, #050A14 100%)',
                position: 'relative',
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: '2.5rem', md: '3.5rem' },
                        fontWeight: 600,
                        mb: 2,
                        textAlign: 'center',
                        color: 'text.primary',
                    }}
                >
                    Experience
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        fontSize: { xs: '1rem', md: '1.125rem' },
                        textAlign: 'center',
                        color: 'text.secondary',
                        mb: 7,
                        maxWidth: '800px',
                        mx: 'auto',
                    }}
                >
                    Real-world experience supporting enterprise systems and end users
                </Typography>

                {/* Main Experience */}
                <Box
                    sx={{
                        maxWidth: '1000px',
                        mx: 'auto',
                        mb: 8,
                    }}
                >
                    {experiences.map((exp) => (
                        <Box
                            key={exp.id}
                            component={motion.div}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <Card
                                sx={{
                                    background: 'background.paper',
                                    border: '1px solid',
                                    borderColor: 'steel.dark',
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',

                                    '&:hover': {
                                        borderColor: 'primary.main',
                                        boxShadow: '0 8px 40px rgba(45, 212, 191, 0.15)',
                                        transform: 'translateY(-4px)',
                                    },
                                }}
                            >
                                {/* Image Section */}
                                {exp.image && (
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            width: '100%',
                                            height: { xs: '200px', md: '300px' },
                                            backgroundColor: 'background.elevated',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <Image
                                            src={exp.image}
                                            alt={exp.title}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </Box>
                                )}

                                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                                    {/* Type & Year */}
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            mb: 2,
                                            flexWrap: 'wrap',
                                            gap: 1,
                                        }}
                                    >
                                        <Chip
                                            label={exp.type}
                                            size="small"
                                            sx={{
                                                backgroundColor: 'primary.main',
                                                color: 'primary.contrastText',
                                                fontWeight: 600,
                                            }}
                                        />
                                        <Typography
                                            sx={{
                                                color: 'steel.light',
                                                fontSize: '0.875rem',
                                                fontWeight: 600,
                                            }}
                                        >
                                            {exp.year}
                                        </Typography>
                                    </Box>

                                    {/* Title */}
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontSize: { xs: '1.375rem', md: '1.75rem' },
                                            fontWeight: 600,
                                            color: 'text.primary',
                                            mb: 1,
                                        }}
                                    >
                                        {exp.title}
                                    </Typography>

                                    {/* Company */}
                                    <Typography
                                        sx={{
                                            fontSize: '1.125rem',
                                            color: 'primary.main',
                                            fontWeight: 600,
                                            mb: 2,
                                        }}
                                    >
                                        {exp.company}
                                    </Typography>

                                    {/* Description */}
                                    <Typography
                                        sx={{
                                            fontSize: '1rem',
                                            color: 'text.secondary',
                                            lineHeight: 1.8,
                                            mb: 3,
                                        }}
                                    >
                                        {exp.description}
                                    </Typography>

                                    {/* Impact Highlights */}
                                    {exp.impact && (
                                        <Box sx={{ mb: 3 }}>
                                            <Typography
                                                sx={{
                                                    fontSize: '0.875rem',
                                                    fontWeight: 600,
                                                    color: 'text.primary',
                                                    mb: 1.5,
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.05em',
                                                }}
                                            >
                                                Key Contributions
                                            </Typography>
                                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                                {exp.impact.map((item, i) => (
                                                    <Box
                                                        key={i}
                                                        sx={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: 1.5,
                                                        }}
                                                    >
                                                        <Box
                                                            sx={{
                                                                width: 6,
                                                                height: 6,
                                                                borderRadius: '50%',
                                                                backgroundColor: 'primary.main',
                                                                flexShrink: 0,
                                                            }}
                                                        />
                                                        <Typography
                                                            sx={{
                                                                fontSize: '0.938rem',
                                                                color: 'text.secondary',
                                                            }}
                                                        >
                                                            {item}
                                                        </Typography>
                                                    </Box>
                                                ))}
                                            </Box>
                                        </Box>
                                    )}

                                    {/* Technologies */}
                                    <Box>
                                        <Typography
                                            sx={{
                                                fontSize: '0.875rem',
                                                fontWeight: 600,
                                                color: 'text.primary',
                                                mb: 1.5,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.05em',
                                            }}
                                        >
                                            Technologies
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                gap: 1,
                                            }}
                                        >
                                            {exp.technologies.map((tech, i) => (
                                                <Chip
                                                    key={i}
                                                    label={tech}
                                                    size="small"
                                                    sx={{
                                                        backgroundColor: 'background.elevated',
                                                        color: 'text.secondary',
                                                        border: '1px solid',
                                                        borderColor: 'steel.dark',
                                                        fontSize: '0.813rem',
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                    ))}
                </Box>

                {/* Technical Background Section */}
                <Box sx={{ maxWidth: '1000px', mx: 'auto' }}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: { xs: '1.75rem', md: '2.25rem' },
                            fontWeight: 600,
                            mb: 4,
                            textAlign: 'center',
                            color: 'text.primary',
                        }}
                    >
                        Technical Background
                    </Typography>

                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                            gap: 3,
                        }}
                    >
                        {technicalBackground.map((bg, index) => (
                            <Box
                                key={bg.id}
                                component={motion.div}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card
                                    sx={{
                                        background: 'linear-gradient(135deg, rgba(45, 212, 191, 0.05), rgba(30, 58, 95, 0.05))',
                                        border: '1px solid',
                                        borderColor: 'steel.dark',
                                        borderRadius: 3,
                                        height: '100%',
                                        transition: 'all 0.3s',

                                        '&:hover': {
                                            borderColor: 'primary.main',
                                            transform: 'translateY(-2px)',
                                        },
                                    }}
                                >
                                    <CardContent sx={{ p: 3 }}>
                                        <Typography
                                            variant="h4"
                                            sx={{
                                                fontSize: '1.125rem',
                                                fontWeight: 600,
                                                color: 'text.primary',
                                                mb: 1.5,
                                            }}
                                        >
                                            {bg.title}
                                        </Typography>

                                        <Typography
                                            sx={{
                                                fontSize: '0.938rem',
                                                color: 'text.secondary',
                                                lineHeight: 1.7,
                                                mb: 2,
                                            }}
                                        >
                                            {bg.description}
                                        </Typography>

                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                            {bg.technologies.map((tech, i) => (
                                                <Chip
                                                    key={i}
                                                    label={tech}
                                                    size="small"
                                                    sx={{
                                                        backgroundColor: 'background.paper',
                                                        color: 'steel.light',
                                                        fontSize: '0.75rem',
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};
