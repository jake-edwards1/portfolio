"use client"

import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

/**
 * Data Topography Background Component
 * Creates a subtle topographical map effect with fine contour lines
 * Represents: wireless signal propagation, terrain/geography, data visualization
 * Sophisticated, technical, and open-ended
 */
export const TopographyBackground = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {/* SVG Topography Pattern */}
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <defs>
          {/* Topography pattern definition */}
          <pattern
            id="topography"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            {/* Multiple concentric contour lines */}
            <motion.path
              d="M 50 100 Q 75 80, 100 100 T 150 100"
              stroke="rgba(45, 212, 191, 0.15)"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M 30 100 Q 65 70, 100 100 T 170 100"
              stroke="rgba(45, 212, 191, 0.1)"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
            <motion.path
              d="M 40 130 Q 70 110, 100 130 T 160 130"
              stroke="rgba(45, 212, 191, 0.12)"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />
            <motion.path
              d="M 60 70 Q 80 60, 100 70 T 140 70"
              stroke="rgba(30, 58, 95, 0.2)"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.8, ease: "easeInOut" }}
            />
            {/* Additional fine lines for depth */}
            <motion.circle
              cx="100"
              cy="100"
              r="20"
              stroke="rgba(45, 212, 191, 0.08)"
              strokeWidth="0.5"
              fill="none"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
            <motion.circle
              cx="100"
              cy="100"
              r="40"
              stroke="rgba(45, 212, 191, 0.06)"
              strokeWidth="0.5"
              fill="none"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2.5, ease: "easeOut" }}
            />
            <motion.circle
              cx="100"
              cy="100"
              r="60"
              stroke="rgba(30, 58, 95, 0.15)"
              strokeWidth="0.5"
              fill="none"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 3, ease: "easeOut" }}
            />
          </pattern>
        </defs>

        {/* Apply the pattern to fill the entire SVG */}
        <rect width="100%" height="100%" fill="url(#topography)" />

        {/* Gradient overlay for depth */}
        <defs>
          <radialGradient id="fadeGradient" cx="50%" cy="30%">
            <stop offset="0%" stopColor="rgba(45, 212, 191, 0.03)" />
            <stop offset="50%" stopColor="rgba(5, 10, 20, 0.5)" />
            <stop offset="100%" stopColor="rgba(5, 10, 20, 0.9)" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#fadeGradient)" />
      </svg>

      {/* Subtle animated signal propagation effect */}
      <Box
        component={motion.div}
        sx={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          border: '1px solid rgba(45, 212, 191, 0.1)',
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <Box
        component={motion.div}
        sx={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          border: '1px solid rgba(45, 212, 191, 0.08)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.05, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </Box>
  );
};
