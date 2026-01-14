"use client"

import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { Box, Container, useTheme, useMediaQuery } from '@mui/material';
// Infrastructure & Cloud
import aws_logo from "@/assets/logos/aws.png"
import azureLogo from "@/assets/logos/azure.png"
import linuxLogo from "@/assets/logos/linux.png"

// Containerization & Orchestration
import dockerLogo from "@/assets/logos/docker.png"
import kubernetesLogo from "@/assets/logos/kubernetes.png"

// Programming & Frameworks
import javaLogo from "@/assets/logos/java.webp"
import pythonLogo from "@/assets/logos/python.webp"
import net_logo from "@/assets/logos/net.png"
import cpp_logo from "@/assets/logos/cpp.png"

// Database
import mySqlLogo from "@/assets/logos/mySql.png"

// DevOps & Tools
import powershellLogo from "@/assets/logos/powershell.png"

// Web Technologies
import htmlLogo from "@/assets/logos/html.png"
import cssLogo from "@/assets/logos/css.png"
import tailwindLogo from "@/assets/logos/tailwind.png"
import graphQlLogo from "@/assets/logos/graphql.png"

// Curated list showcasing full-stack systems expertise
const images = [
    // Infrastructure first
    { src: linuxLogo, alt: "Linux" },
    { src: aws_logo, alt: "AWS" },
    { src: azureLogo, alt: "Azure" },
    { src: powershellLogo, alt: "PowerShell" },
    // Containers & Orchestration
    { src: dockerLogo, alt: "Docker" },
    { src: kubernetesLogo, alt: "Kubernetes" },
    // Databases
    { src: mySqlLogo, alt: "MySQL" },
    // Programming
    { src: javaLogo, alt: "Java" },
    { src: pythonLogo, alt: "Python" },
    { src: net_logo, alt: ".NET" },
    { src: cpp_logo, alt: "C++" },
    // Web (showing breadth)
    { src: htmlLogo, alt: "HTML" },
    { src: cssLogo, alt: "CSS" },
    { src: tailwindLogo, alt: "Tailwind CSS" },
    { src: graphQlLogo, alt: "GraphQL" },
]

export const LogoAnimation = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const containerRef = useRef(null);
    const [duration, setDuration] = useState(30); // Default fallback

    const logoHeight = isMobile ? 30 : 40;

    useEffect(() => {
        // Measure the actual rendered width of the content
        if (containerRef.current) {
            const contentWidth = containerRef.current.scrollWidth / 2; // Divide by 2 since we duplicate
            const targetSpeed = isMobile ? 100 : 50; // pixels per second
            const calculatedDuration = contentWidth / targetSpeed;
            setDuration(calculatedDuration);
        }
    }, [isMobile]);

    return (
        <Box
            sx={{
                py: 5,
                background: 'linear-gradient(90deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)',
                borderTop: '1px solid',
                borderBottom: '1px solid',
                borderColor: 'steel.dark',
            }}
        >
            <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
                <Box
                    sx={{
                        overflow: 'hidden',
                        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    }}
                >
                    <Box
                        ref={containerRef}
                        sx={{
                            display: 'flex',
                            gap: { xs: 4, md: 8 },
                            willChange: 'transform',
                            animation: `scroll ${duration}s linear infinite`,
                            '@keyframes scroll': {
                                '0%': {
                                    transform: 'translate3d(0, 0, 0)',
                                },
                                '100%': {
                                    transform: 'translate3d(-50%, 0, 0)',
                                },
                            },
                        }}
                    >
                        {/* Render logos twice for seamless loop */}
                        {[...images, ...images].map((image, index) => (
                            <Box
                                key={index}
                                sx={{
                                    filter: 'grayscale(10%) brightness(0.7)',
                                    transition: 'filter 0.3s ease',
                                    flexShrink: 0,
                                    '&:hover': {
                                        filter: 'grayscale(0%) brightness(1)',
                                    },
                                }}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    height={logoHeight}
                                    style={{ display: 'block', width: 'auto', height: logoHeight }}
                                />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}