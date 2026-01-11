"use client"

import Image from "next/image";
import {motion} from "framer-motion";
import React from "react";
import { Box, Container } from '@mui/material';
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
    // Duplicate images for seamless loop
    const duplicatedImages = [...images, ...images];

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
                        maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                    }}
                >
                    <Box
                        component={motion.div}
                        sx={{
                            display: 'flex',
                            gap: 8,
                            pr: 8,
                        }}
                        animate={{ translateX: '-50%' }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop",
                        }}
                    >
                        {duplicatedImages.map((image, index) => (
                            <Box
                                key={index}
                                sx={{
                                    filter: 'grayscale(100%) brightness(0.7)',
                                    transition: 'filter 0.3s ease',
                                    '&:hover': {
                                        filter: 'grayscale(0%) brightness(1)',
                                    },
                                }}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    height={40}
                                    style={{ opacity: 0.6 }}
                                />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}