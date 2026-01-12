"use client"

import { motion } from "framer-motion";
import { sendEmail } from "@/serverActions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { Container, Box, Typography, TextField, Paper } from '@mui/material';
import { COLORS_TOP } from "@/lib/constants";
import { TypewriterText } from '@/components/TypewriterText';


export const Contact = () => {
    // Define gradients and colors as strings to avoid emotion processing issues
    const borderGradient = `linear-gradient(135deg, ${COLORS_TOP[0]}, ${COLORS_TOP[1]}, ${COLORS_TOP[2]})`;
    const focusBorderColor = COLORS_TOP[0];
    const focusGlow = `0 4px 20px rgba(0, 0, 0, 0.3), 0 0 20px rgba(45, 212, 191, 0.3)`;

    return (
        <Container
            component="section"
            id="contact"
            maxWidth="lg"
            sx={{ py: 16, overflow: 'hidden' }}
        >
            <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <TypewriterText
                        text="Contact Me"
                        variant="h2"
                        sx={{
                            fontSize: { xs: '2.5rem', md: '3rem', lg: '4.5rem' },
                            fontWeight: 'bold',
                            color: 'text.primary',
                            p: 0.5,
                        }}
                    />
                    <Paper
                        component={motion.div}
                        variant="glass"
                        initial={{opacity: 0, y: -20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.4}}
                        sx={{
                            px: { xs: 4, md: 8 },
                            pb: { xs: 4, md: 8 },
                            borderRadius: 6,
                            position: 'relative',
                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
                            backdropFilter: 'blur(20px) saturate(180%)',
                            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                            boxShadow: `
                                0 20px 50px rgba(0, 0, 0, 0.5),
                                0 0 40px rgba(19, 255, 170, 0.1),
                                inset 0 1px 0 rgba(255, 255, 255, 0.1)
                            `,
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',

                            // Animated gradient border
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
                                opacity: 0.5,
                            },

                            '&:hover': {
                                boxShadow: `
                                    0 25px 60px rgba(0, 0, 0, 0.6),
                                    0 0 60px rgba(19, 255, 170, 0.2),
                                    inset 0 1px 0 rgba(255, 255, 255, 0.15)
                                `,
                            },
                        }}
                    >
                        <Box
                            component="form"
                            action={async (formData) => {
                                const {error} = await sendEmail(formData);

                                if (error) {
                                    toast.error(error);
                                    return;
                                }

                                toast.success("Email sent successfully!");
                            }}
                            sx={{
                                mt: 5,
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <TextField
                                name="senderEmail"
                                type="email"
                                required
                                inputProps={{ maxLength: 500 }}
                                placeholder="Your email"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        bgcolor: 'rgba(255, 255, 255, 0.9)',
                                        borderRadius: 3,
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                                        '&:hover': {
                                            bgcolor: 'rgba(255, 255, 255, 0.95)',
                                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                                        },
                                        '&.Mui-focused': {
                                            bgcolor: 'white',
                                            boxShadow: focusGlow,
                                        },
                                        '& fieldset': {
                                            borderColor: 'rgba(19, 255, 170, 0.2)',
                                            borderWidth: '2px',
                                            transition: 'all 0.3s ease',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'rgba(19, 255, 170, 0.4)',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: `${focusBorderColor} !important`,
                                            borderWidth: '2px',
                                        },
                                    },
                                    '& .MuiOutlinedInput-input': {
                                        color: 'black',
                                        fontSize: '1rem',
                                        '&::placeholder': {
                                            color: 'rgba(0, 0, 0, 0.5)',
                                            opacity: 1,
                                        },
                                    },
                                }}
                            />
                            <TextField
                                name="message"
                                placeholder="Your message"
                                required
                                multiline
                                rows={6}
                                inputProps={{ maxLength: 5000 }}
                                sx={{
                                    my: 1.5,
                                    '& .MuiOutlinedInput-root': {
                                        minHeight: { xs: '8rem', md: '13rem' },
                                        bgcolor: 'rgba(255, 255, 255, 0.9)',
                                        borderRadius: 3,
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                                        '&:hover': {
                                            bgcolor: 'rgba(255, 255, 255, 0.95)',
                                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                                        },
                                        '&.Mui-focused': {
                                            bgcolor: 'white',
                                            boxShadow: focusGlow,
                                        },
                                        '& fieldset': {
                                            borderColor: 'rgba(19, 255, 170, 0.2)',
                                            borderWidth: '2px',
                                            transition: 'all 0.3s ease',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'rgba(19, 255, 170, 0.4)',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: `${focusBorderColor} !important`,
                                            borderWidth: '2px',
                                        },
                                    },
                                    '& .MuiOutlinedInput-input': {
                                        color: 'black',
                                        fontSize: '1rem',
                                        '&::placeholder': {
                                            color: 'rgba(0, 0, 0, 0.5)',
                                            opacity: 1,
                                        },
                                    },
                                }}
                            />
                            <SubmitBtn/>
                        </Box>
                    </Paper>
                </Box>
            </Box>
        </Container>
    )
}