"use client"

import React, {useState} from "react";
import Image from "next/image";
import {motion, useMotionTemplate, AnimatePresence} from "framer-motion";
import Link from "next/link";
import { Box, Container, Typography, Chip, Divider, Stack } from '@mui/material';
import Tilt from 'react-parallax-tilt';
import webAdmin from "@/assets/qwa.png"
import { useColorAnimation } from "@/hooks/useColorAnimation";
import { COLORS_TOP } from "@/lib/constants";

const projects = [
    {
        id: 1,
        year: "2022-2024",
        title: "QuickBill Web Admin",
        description: "Lead developer on an Enterprise Web Application for Henry Schein One. QuickBill Web Admin " +
            "is used internally to manage, support, and troubleshoot billing statements sent by ~38% of dental " +
            "offices in the United states. Key features include managing and creating accounts for " +
            "dental offices, viewing billing statements and their related events, and integrating with " +
            "Active Directory for user-group-based authorization.",
        image: webAdmin,
        stack: ["React", "Next.js", "Material UI", "Java", "Spring Boot"]
    },
    {
        id: 2,
        year: "2023",
        title: "Class Project - Movies Website",
        description: "Mock website used for browsing movies and TV shows. Each movie has a 'details' page where " +
            "users can view ratings, plot, cast, images, etc.",
        video: "https://www.youtube.com/embed/uIucu5IqOi8?si=f2NjHpP4LXBQ4xcY",
        link: "https://github.com/jake-edwards1/CSE341-Group-Project",
        stack: ["HTML", "SCSS", "JavaScript", "Vite", "Babel"]
    },
    {
        id: 3,
        year: "2023",
        title: "Class Project - Mobile Weather App",
        description: "Kotlin mobile application that takes a city as input and returns the day's weather " +
            "information for that location.",
        video: "https://www.youtube.com/embed/3G8aiCqBAA4?si=VyfNKu7uN7g0sKtk",
        link: "https://github.com/jake-edwards1/Weather_App",
        stack: ["Kotlin", "Espresso"]
    },
]

export const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0]);
    const color = useColorAnimation();
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`

    // Define gradients as strings to avoid emotion processing issues
    const selectionGradient = `linear-gradient(180deg, ${COLORS_TOP[0]}, ${COLORS_TOP[1]})`;
    const borderGradient = `linear-gradient(135deg, ${COLORS_TOP[0]}, ${COLORS_TOP[1]}, ${COLORS_TOP[2]})`;
    const selectionGlow = `0 0 10px ${COLORS_TOP[0]}`;

    return (
        <Box
            component={motion.section}
            id="portfolio"
            style={{backgroundImage}}
            sx={{ py: 16 }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
                        gap: { xs: 4, md: 6 },
                    }}
                >
                    <Box>
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: { xs: '2.5rem', md: '3rem', lg: '3.75rem' },
                                fontWeight: 'bold',
                                mb: 5,
                            }}
                        >
                            Selected <Box component="span" sx={{ color: 'lime.light' }}>Projects</Box>
                        </Typography>
                        {projects.map((project) => (
                            <Box
                                key={project.id}
                                onClick={() => setSelectedProject(project)}
                                sx={{
                                    mb: 4,
                                    position: 'relative',
                                    pl: { xs: 2, md: 3 },
                                }}
                            >
                                {/* Animated selection indicator */}
                                <AnimatePresence>
                                    {selectedProject.id === project.id && (
                                        <Box
                                            component={motion.div}
                                            initial={{ scaleY: 0, opacity: 0 }}
                                            animate={{ scaleY: 1, opacity: 1 }}
                                            exit={{ scaleY: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            sx={{
                                                position: 'absolute',
                                                left: 0,
                                                top: 0,
                                                bottom: 0,
                                                width: '4px',
                                                background: selectionGradient,
                                                borderRadius: '0 4px 4px 0',
                                                boxShadow: selectionGlow,
                                            }}
                                        />
                                    )}
                                </AnimatePresence>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: 'text.secondary',
                                        fontSize: { xs: '1rem', md: '1.125rem' },
                                        mb: 1,
                                        transition: 'all 0.3s ease',
                                        ...(selectedProject.id === project.id && {
                                            color: 'lime.light',
                                        }),
                                    }}
                                >
                                    {project.year}
                                </Typography>
                                <Box
                                    component={motion.div}
                                    whileHover={{ x: 4 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontSize: { xs: '1.5rem', md: '1.875rem' },
                                            fontWeight: 600,
                                            cursor: 'pointer',
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            color: selectedProject.id === project.id ? 'lime.light' : 'text.primary',
                                            '&:hover': {
                                                color: 'lime.main',
                                                textShadow: selectedProject.id === project.id
                                                    ? `0 0 20px rgba(163, 230, 53, 0.5)`
                                                    : 'none',
                                            },
                                        }}
                                    >
                                        {project.title}
                                    </Typography>
                                </Box>
                                {selectedProject.id === project.id && (
                                    <>
                                        <Divider sx={{ my: 2, borderColor: 'grey.200' }} />
                                        <Typography
                                            sx={{
                                                color: 'text.secondary',
                                                transition: 'all 0.5s ease',
                                            }}
                                        >
                                            {project.description}
                                        </Typography>
                                        {project.link && (
                                            <Typography sx={{ mt: 2 }}>
                                                <Link
                                                    href={project.link}
                                                    target="_blank"
                                                    style={{ color: 'inherit', textDecoration: 'none' }}
                                                >
                                                    Github:{' '}
                                                    <Box
                                                        component="span"
                                                        sx={{
                                                            color: '#60a5fa',
                                                            '&:hover': { textDecoration: 'underline' },
                                                        }}
                                                    >
                                                        {project.link}
                                                    </Box>
                                                </Link>
                                            </Typography>
                                        )}
                                        {project.stack && (
                                            <Stack
                                                component={motion.div}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.4, delay: 0.2 }}
                                                direction="row"
                                                spacing={1.5}
                                                sx={{ mt: 1, flexWrap: 'wrap', gap: 1.5 }}
                                            >
                                                {project.stack.map((tech, index) => (
                                                    <Chip
                                                        component={motion.div}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                                                        whileHover={{ scale: 1.05, y: -2 }}
                                                        key={tech}
                                                        label={tech}
                                                        size="small"
                                                        sx={{
                                                            background: 'linear-gradient(135deg, rgba(19, 255, 170, 0.15), rgba(30, 103, 198, 0.15))',
                                                            backdropFilter: 'blur(10px)',
                                                            color: 'text.primary',
                                                            fontWeight: 600,
                                                            border: '1px solid rgba(19, 255, 170, 0.3)',
                                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                            '&:hover': {
                                                                background: 'linear-gradient(135deg, rgba(19, 255, 170, 0.25), rgba(30, 103, 198, 0.25))',
                                                                borderColor: 'rgba(19, 255, 170, 0.5)',
                                                                boxShadow: '0 0 15px rgba(19, 255, 170, 0.3)',
                                                            },
                                                        }}
                                                    />
                                                ))}
                                            </Stack>
                                        )}
                                    </>
                                )}
                            </Box>
                        ))}
                    </Box>
                    <Box>
                        <AnimatePresence mode="wait">
                            <Box
                                component={motion.div}
                                key={selectedProject.id}
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                {selectedProject.image && (
                                    <Tilt
                                        tiltMaxAngleX={5}
                                        tiltMaxAngleY={5}
                                        perspective={1000}
                                        scale={1.02}
                                        transitionSpeed={400}
                                        gyroscope={true}
                                    >
                                        <Box
                                            sx={{
                                                position: 'relative',
                                                borderRadius: '24px',
                                                overflow: 'hidden',
                                                boxShadow: `
                                                    0 20px 25px -5px rgba(0, 0, 0, 0.3),
                                                    0 10px 10px -5px rgba(0, 0, 0, 0.2),
                                                    0 0 40px rgba(19, 255, 170, 0.15)
                                                `,
                                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                                '&:hover': {
                                                    boxShadow: `
                                                        0 25px 50px -12px rgba(0, 0, 0, 0.4),
                                                        0 0 60px rgba(19, 255, 170, 0.3),
                                                        0 0 100px rgba(30, 103, 198, 0.2)
                                                    `,
                                                },
                                                // Gradient border effect
                                                '&::before': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    inset: 0,
                                                    borderRadius: '24px',
                                                    padding: '2px',
                                                    background: borderGradient,
                                                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                                    WebkitMaskComposite: 'xor',
                                                    maskComposite: 'exclude',
                                                    opacity: 0.4,
                                                    transition: 'opacity 0.3s ease',
                                                    zIndex: 1,
                                                },
                                                '&:hover::before': {
                                                    opacity: 0.7,
                                                },
                                            }}
                                        >
                                            <Image
                                                src={selectedProject.image.src}
                                                alt={selectedProject.title}
                                                width={800}
                                                height={450}
                                                style={{
                                                    borderRadius: '24px',
                                                    width: '100%',
                                                    height: 'auto',
                                                    display: 'block',
                                                }}
                                            />
                                        </Box>
                                    </Tilt>
                                )}
                                {selectedProject.video && (
                                    <Tilt
                                        tiltMaxAngleX={5}
                                        tiltMaxAngleY={5}
                                        perspective={1000}
                                        scale={1.02}
                                        transitionSpeed={400}
                                        gyroscope={true}
                                    >
                                        <Box
                                            sx={{
                                                position: 'relative',
                                                width: '100%',
                                                paddingTop: '56.25%', // 16:9 aspect ratio
                                                borderRadius: '24px',
                                                overflow: 'hidden',
                                                boxShadow: `
                                                    0 20px 25px -5px rgba(0, 0, 0, 0.3),
                                                    0 10px 10px -5px rgba(0, 0, 0, 0.2),
                                                    0 0 40px rgba(19, 255, 170, 0.15)
                                                `,
                                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                                '&:hover': {
                                                    boxShadow: `
                                                        0 25px 50px -12px rgba(0, 0, 0, 0.4),
                                                        0 0 60px rgba(19, 255, 170, 0.3),
                                                        0 0 100px rgba(30, 103, 198, 0.2)
                                                    `,
                                                },
                                                // Gradient border effect
                                                '&::after': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    inset: 0,
                                                    borderRadius: '24px',
                                                    padding: '2px',
                                                    background: borderGradient,
                                                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                                    WebkitMaskComposite: 'xor',
                                                    maskComposite: 'exclude',
                                                    opacity: 0.4,
                                                    transition: 'opacity 0.3s ease',
                                                    zIndex: 1,
                                                    pointerEvents: 'none',
                                                },
                                                '&:hover::after': {
                                                    opacity: 0.7,
                                                },
                                            }}
                                        >
                                            <Box
                                                component="iframe"
                                                src={selectedProject.video}
                                                title={`${selectedProject.title} video demonstration`}
                                                allowFullScreen
                                                loading="lazy"
                                                sx={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    width: '100%',
                                                    height: '100%',
                                                    border: 'none',
                                                }}
                                            />
                                        </Box>
                                    </Tilt>
                                )}
                            </Box>
                        </AnimatePresence>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}