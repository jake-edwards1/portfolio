"use client"

import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';

/**
 * TypewriterText Component
 * Creates a command-line typewriter effect when scrolled into view
 *
 * @param {string} text - The text to type out
 * @param {object} sx - MUI sx prop for styling
 * @param {string} variant - MUI Typography variant (default: "h2")
 * @param {number} delay - Delay before typing starts in seconds (default: 0.3)
 * @param {number} speed - Speed of typing in seconds per character (default: 0.05)
 */
export const TypewriterText = ({
    text,
    sx = {},
    variant = "h2",
    delay = 0.3,
    speed = 0.05,
    showPrompt = true
}) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hasTyped, setHasTyped] = useState(false);

    React.useEffect(() => {
        if (isInView && !hasTyped) {
            setHasTyped(true);
        }
    }, [isInView, hasTyped]);

    const promptVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.1,
                delay: delay,
            }
        }
    };

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: speed,
                delayChildren: delay + 0.2,
            }
        }
    };

    const charVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.1,
            }
        }
    };

    const cursorVariants = {
        blink: {
            opacity: [1, 1, 0, 0],
            transition: {
                duration: 1,
                repeat: Infinity,
                repeatDelay: 0,
            }
        }
    };

    return (
        <Box
            ref={ref}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                ...sx,
            }}
        >
            <Typography
                variant={variant}
                component="div"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontFamily: 'var(--font-fira-code), "Fira Code", monospace',
                    ...sx,
                }}
            >
                {/* Command prompt */}
                {showPrompt && (
                    <motion.span
                        variants={promptVariants}
                        initial="hidden"
                        animate={hasTyped ? "visible" : "hidden"}
                        style={{
                            color: '#2DD4BF',
                            marginRight: '0.5rem',
                            fontWeight: 700,
                        }}
                    >
                        &gt;
                    </motion.span>
                )}

                {/* Typed text */}
                <motion.span
                    variants={containerVariants}
                    initial="hidden"
                    animate={hasTyped ? "visible" : "hidden"}
                    style={{ display: 'inline-flex' }}
                >
                    {text.split('').map((char, index) => (
                        <motion.span
                            key={`${char}-${index}`}
                            variants={charVariants}
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </motion.span>
                    ))}
                </motion.span>

                {/* Blinking cursor */}
                <motion.span
                    variants={cursorVariants}
                    animate={hasTyped ? "blink" : "hidden"}
                    style={{
                        color: '#2DD4BF',
                        marginLeft: '0.25rem',
                        fontWeight: 700,
                    }}
                >
                    _
                </motion.span>
            </Typography>
        </Box>
    );
};
