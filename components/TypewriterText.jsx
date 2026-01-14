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

    // Split text into words to prevent mid-word line breaks
    const words = text.split(' ');

    return (
        <Box
            ref={ref}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                maxWidth: '100%',
                width: '100%',
                ...sx,
            }}
        >
            <Typography
                variant={variant}
                component="div"
                sx={{
                    display: 'inline',
                    fontFamily: 'var(--font-fira-code), "Fira Code", monospace',
                    maxWidth: '100%',
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

                {/* Typed text - grouped by words */}
                <motion.span
                    variants={containerVariants}
                    initial="hidden"
                    animate={hasTyped ? "visible" : "hidden"}
                    style={{
                        display: 'inline'
                    }}
                >
                    {words.map((word, wordIndex) => (
                        <span
                            key={`word-${wordIndex}`}
                            style={{
                                display: 'inline-block',
                                overflowWrap: 'break-word'
                            }}
                        >
                            {word.split('').map((char, charIndex) => (
                                <motion.span
                                    key={`${wordIndex}-${charIndex}`}
                                    variants={charVariants}
                                    style={{ display: 'inline-block' }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                            {/* Add space after word (except last word) */}
                            {wordIndex < words.length - 1 && (
                                <motion.span
                                    key={`space-${wordIndex}`}
                                    variants={charVariants}
                                    style={{ display: 'inline-block' }}
                                >
                                    {'\u00A0'}
                                </motion.span>
                            )}
                        </span>
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
