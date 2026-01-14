"use client"

import React from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { MdExpandMore } from 'react-icons/md';
import { FaServer, FaNetworkWired, FaShieldAlt, FaCode, FaTools, FaDatabase } from 'react-icons/fa';
import { TypewriterText } from '@/components/TypewriterText';

const capabilities = [
    {
        id: 1,
        category: "Infrastructure & Hardware",
        icon: FaServer,
        color: '#2DD4BF',
        description: "End-to-end hardware expertise from workstations to enterprise servers",
        skills: [
            "CompTIA A+",
            "Workstation/Server Hardware",
            "System Assembly & Maintenance"
        ]
    },
    {
        id: 2,
        category: "Networking",
        icon: FaNetworkWired,
        color: '#14B8A6',
        description: "Network design, implementation, and troubleshooting across wired and wireless environments",
        skills: [
            "TCP/IP Protocol",
            "Network Troubleshooting",
            "RF Fundamentals"
        ]
    },
    {
        id: 3,
        category: "Security",
        icon: FaShieldAlt,
        color: '#1E3A5F',
        description: "Security-first approach to systems design and threat mitigation",
        skills: [
            "Network Security",
            "Firewalls & IDS/IPS",
            "Security Best Practices",
            "Access Control",
        ]
    },
    {
        id: 4,
        category: "Software Development",
        icon: FaCode,
        color: '#64748B',
        description: "Full-stack understanding enabling end-to-end systems troubleshooting",
        skills: [
            "React & Next.js",
            "Node.js & JavaScript",
            "Java & Spring Boot",
            "HTML/CSS/SCSS",
            "RESTful APIs",
            "Version Control (Git)"
        ]
    },
    {
        id: 5,
        category: "Databases & Data",
        icon: FaDatabase,
        color: '#94A3B8',
        description: "Database administration and data management",
        skills: [
            "Microsoft SQL Server",
            "MySQL",
            "Database Design",
            "Query Optimization",
        ]
    },
    {
        id: 6,
        category: "Tools & Methodologies",
        icon: FaTools,
        color: '#475569',
        description: "Modern tools and systematic approaches to technical problem-solving",
        skills: [
            "Troubleshooting Methodologies",
            "Monitoring Tools",
            "Technical Documentation",
            "Ticketing Systems",
            "Remote Support Tools",
            "Agile Methodology",
        ]
    },
];

export const TechnicalCapabilities = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box
            component="section"
            id="capabilities"
            sx={{
                py: { xs: 8, md: 12 },
                background: 'linear-gradient(180deg, #0F172A 0%, #050A14 100%)',
                position: 'relative',
            }}
        >
            <Container maxWidth="lg">
                <TypewriterText
                    text="Capabilities"
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
                        maxWidth: '800px',
                        mx: 'auto',
                    }}
                >
                    Full-stack systems expertise across the entire technology ecosystem—from hardware to software
                </Typography>

                <Box
                    sx={{
                        maxWidth: '900px',
                        mx: 'auto',
                    }}
                >
                    {capabilities.map((capability, index) => (
                        <Box
                            key={capability.id}
                            component={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            sx={{ mb: 2 }}
                        >
                            <Accordion
                                expanded={expanded === `panel${capability.id}`}
                                onChange={handleChange(`panel${capability.id}`)}
                                sx={{
                                    background: 'background.paper',
                                    border: '1px solid',
                                    borderColor: expanded === `panel${capability.id}` ? 'primary.main' : 'steel.dark',
                                    borderRadius: '12px !important',
                                    overflow: 'hidden',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    boxShadow: expanded === `panel${capability.id}`
                                        ? '0 8px 30px rgba(45, 212, 191, 0.15)'
                                        : '0 2px 10px rgba(0, 0, 0, 0.3)',

                                    '&:before': {
                                        display: 'none',
                                    },

                                    '&:hover': {
                                        borderColor: 'primary.main',
                                    },
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<MdExpandMore style={{ fontSize: '28px', color: '#2DD4BF' }} />}
                                    sx={{
                                        px: { xs: 2, md: 3 },
                                        py: 1.5,
                                        '& .MuiAccordionSummary-content': {
                                            my: 1.5,
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 2,
                                            width: '100%',
                                        }}
                                    >
                                        {/* Icon */}
                                        <Box
                                            sx={{
                                                width: 48,
                                                height: 48,
                                                borderRadius: 2,
                                                background: `linear-gradient(135deg, ${capability.color}20, ${capability.color}10)`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                border: '1px solid',
                                                borderColor: `${capability.color}40`,
                                                flexShrink: 0,
                                            }}
                                        >
                                            {React.createElement(capability.icon, {
                                                style: { fontSize: '24px', color: capability.color },
                                            })}
                                        </Box>

                                        {/* Title and Description */}
                                        <Box sx={{ flex: 1, minWidth: 0 }}>
                                            <Typography
                                                variant="h3"
                                                sx={{
                                                    fontSize: { xs: '1.125rem', md: '1.375rem' },
                                                    fontWeight: 600,
                                                    color: 'text.primary',
                                                    mb: 0.5,
                                                }}
                                            >
                                                {capability.category}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: { xs: '0.875rem', md: '0.938rem' },
                                                    color: 'text.secondary',
                                                    display: { xs: 'none', sm: 'block' },
                                                }}
                                            >
                                                {capability.description}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </AccordionSummary>

                                <AccordionDetails
                                    sx={{
                                        px: { xs: 2, md: 3 },
                                        py: 3,
                                        borderTop: '1px solid',
                                        borderColor: 'steel.dark',
                                        background: 'linear-gradient(180deg, rgba(45, 212, 191, 0.02), transparent)',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: 1.5,
                                        }}
                                    >
                                        {capability.skills.map((skill, skillIndex) => (
                                            <Chip
                                                key={skillIndex}
                                                label={skill}
                                                sx={{
                                                    backgroundColor: 'background.elevated',
                                                    color: 'text.primary',
                                                    border: '1px solid',
                                                    borderColor: 'steel.dark',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 500,
                                                    py: 2.5,
                                                    transition: 'all 0.2s',

                                                    '&:hover': {
                                                        borderColor: 'primary.main',
                                                        backgroundColor: 'rgba(45, 212, 191, 0.1)',
                                                    },
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};
