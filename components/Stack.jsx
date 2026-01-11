"use client"

import React from "react"
import {FaReact} from "react-icons/fa";
import {IoLogoNodejs} from "react-icons/io";
import {SiJavascript} from "react-icons/si";
import {TbBrandNextjs} from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";
import { Box, Container, Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { COLORS_TOP } from "@/lib/constants";

const stackItems = [
    { id: 1, name: "React", icon: FaReact, color: '#61DAFB'},
    { id: 2, name: "Node.js", icon: IoLogoNodejs, color: '#339933'},
    { id: 3, name: "JavaScript", icon: SiJavascript, color: '#F7DF1E'},
    { id: 4, name: "Microsoft SQL", icon: DiMsqlServer, color: '#47A248'},
    { id: 5, name: "Next.js", icon: TbBrandNextjs, color: '#cbcbcb'},
]

export const Stack = () => {
    // Define gradients as strings to avoid emotion processing issues
    const borderGradient = `linear-gradient(135deg, ${COLORS_TOP[0]}, ${COLORS_TOP[1]}, ${COLORS_TOP[2]})`;

    return (
        <Box component="section" id="stack" className="glass" sx={{ py: 8 }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: '3rem',
                        color: 'text.primary',
                        fontWeight: 'bold',
                        mb: 2,
                        textAlign: 'center',
                    }}
                >
                    My Stack
                </Typography>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: 'repeat(2, 1fr)',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(3, 1fr)',
                            lg: 'repeat(5, 1fr)',
                        },
                        gap: { xs: 2, md: 3 },
                    }}
                >
                    {stackItems.map((item, index) => (
                        <Box
                            key={item.id}
                            component={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Tilt
                                tiltMaxAngleX={10}
                                tiltMaxAngleY={10}
                                perspective={1000}
                                scale={1.05}
                                transitionSpeed={400}
                                gyroscope={true}
                            >
                                <Card
                                    sx={{
                                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.05))',
                                        backdropFilter: 'blur(20px) saturate(180%)',
                                        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                                        borderRadius: 6,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        boxShadow: `
                                            0 8px 32px rgba(0, 0, 0, 0.4),
                                            inset 0 1px 0 rgba(255, 255, 255, 0.1)
                                        `,

                                        // Gradient border
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            inset: 0,
                                            borderRadius: 6,
                                            padding: '2px',
                                            background: borderGradient,
                                            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                            WebkitMaskComposite: 'xor',
                                            maskComposite: 'exclude',
                                            opacity: 0.3,
                                            transition: 'opacity 0.3s ease',
                                        },

                                        '&:hover': {
                                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08))',
                                            boxShadow: `
                                                0 20px 40px rgba(0, 0, 0, 0.5),
                                                0 0 30px rgba(19, 255, 170, 0.2),
                                                inset 0 1px 0 rgba(255, 255, 255, 0.15)
                                            `,
                                            '&::before': {
                                                opacity: 0.6,
                                            },
                                        },
                                    }}
                                >
                                    <CardContent
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            p: { xs: 3, md: 4 },
                                            '&:last-child': { pb: { xs: 3, md: 4 } },
                                            width: '100%',
                                        }}
                                    >
                                        <Box
                                            component={motion.div}
                                            whileHover={{
                                                rotate: [0, -10, 10, -10, 0],
                                                scale: [1, 1.1, 1.1, 1.1, 1],
                                                y: [0, -10, -10, -10, 0],
                                            }}
                                            transition={{
                                                duration: 0.6,
                                                ease: "easeInOut",
                                            }}
                                            sx={{
                                                mb: 2.5,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                '& svg': {
                                                    width: { xs: '4rem', md: '6rem', lg: '8rem' },
                                                    height: { xs: '4rem', md: '6rem', lg: '8rem' },
                                                    filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3))',
                                                    transition: 'filter 0.3s ease',
                                                },
                                                '&:hover svg': {
                                                    filter: `drop-shadow(0 8px 24px ${item.color}40)`,
                                                },
                                            }}
                                        >
                                            {React.createElement(item.icon, {
                                                style: { color: item.color },
                                            })}
                                        </Box>
                                        <Typography
                                            sx={{
                                                color: 'text.primary',
                                                fontWeight: 600,
                                                textAlign: 'center',
                                                fontSize: { xs: '1rem', md: '1.125rem' },
                                                transition: 'color 0.3s ease',
                                            }}
                                        >
                                            {item.name}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Tilt>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    )
}