"use client"

import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";
import { Button, CircularProgress } from "@mui/material";
import { COLORS_TOP } from "@/lib/constants";

export default function SubmitBtn() {
    const { pending } = useFormStatus();

    // Define gradients as strings to avoid emotion processing issues
    const buttonGradient = `linear-gradient(135deg, ${COLORS_TOP[0]}, ${COLORS_TOP[1]})`;
    const buttonGradientHover = `linear-gradient(135deg, ${COLORS_TOP[1]}, ${COLORS_TOP[2]})`;

    return (
        <Button
            type="submit"
            variant="contained"
            disabled={pending}
            endIcon={
                pending ? (
                    <CircularProgress size={20} sx={{ color: 'white' }} />
                ) : (
                    <FaPaperPlane style={{ fontSize: '0.875rem' }} />
                )
            }
            sx={{
                height: '3.5rem',
                width: '10rem',
                position: 'relative',
                overflow: 'hidden',
                background: buttonGradient,
                color: '#000',
                fontWeight: 700,
                fontSize: '1.125rem',
                borderRadius: '9999px',
                boxShadow: `
                    0 4px 15px rgba(19, 255, 170, 0.4),
                    0 0 20px rgba(19, 255, 170, 0.2)
                `,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',

                // Shimmer effect
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                    transition: 'left 0.6s',
                },

                '&:hover': {
                    background: buttonGradientHover,
                    transform: 'translateY(-2px) scale(1.02)',
                    boxShadow: `
                        0 8px 25px rgba(19, 255, 170, 0.5),
                        0 0 40px rgba(19, 255, 170, 0.3)
                    `,
                },

                '&:hover::before': {
                    left: '100%',
                },

                '&:active': {
                    transform: 'translateY(0) scale(0.98)',
                },

                '&.Mui-disabled': {
                    background: buttonGradient,
                    opacity: 0.6,
                    color: '#000',
                },

                '& .MuiButton-endIcon': {
                    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                },

                '&:hover .MuiButton-endIcon': {
                    transform: 'translate(0.25rem, -0.25rem)',
                },
            }}
        >
            Submit
        </Button>
    );
}