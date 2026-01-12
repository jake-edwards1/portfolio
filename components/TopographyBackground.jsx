"use client"

import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

/**
 * Data Topography Background Component
 * Enhanced data visualization with continuous animations
 * Represents: network topology, signal propagation, data flow, terrain mapping
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
      {/* Coordinate Grid System */}
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <defs>
          {/* Grid pattern */}
          <pattern
            id="grid"
            x="0"
            y="0"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="rgba(45, 212, 191, 0.08)"
              strokeWidth="0.5"
            />
          </pattern>

          {/* Enhanced topography pattern with more variation */}
          <pattern
            id="topography"
            x="0"
            y="0"
            width="300"
            height="300"
            patternUnits="userSpaceOnUse"
          >
            {/* Varied contour lines - multiple elevations */}
            <motion.path
              d="M 50 150 Q 100 120, 150 150 T 250 150"
              stroke="rgba(45, 212, 191, 0.25)"
              strokeWidth="1"
              fill="none"
              animate={{
                d: [
                  "M 50 150 Q 100 120, 150 150 T 250 150",
                  "M 50 150 Q 100 130, 150 150 T 250 150",
                  "M 50 150 Q 100 120, 150 150 T 250 150",
                ],
                opacity: [0.25, 0.35, 0.25],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.path
              d="M 30 150 Q 90 100, 150 150 T 270 150"
              stroke="rgba(45, 212, 191, 0.2)"
              strokeWidth="1"
              fill="none"
              animate={{
                d: [
                  "M 30 150 Q 90 100, 150 150 T 270 150",
                  "M 30 150 Q 90 110, 150 150 T 270 150",
                  "M 30 150 Q 90 100, 150 150 T 270 150",
                ],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            {/*<motion.path*/}
            {/*  d="M 60 180 Q 110 160, 150 180 T 240 180"*/}
            {/*  stroke="rgba(45, 212, 191, 0.22)"*/}
            {/*  strokeWidth="1"*/}
            {/*  fill="none"*/}
            {/*  animate={{*/}
            {/*    d: [*/}
            {/*      "M 60 180 Q 110 160, 150 180 T 240 180",*/}
            {/*      "M 60 180 Q 110 165, 150 180 T 240 180",*/}
            {/*      "M 60 180 Q 110 160, 150 180 T 240 180",*/}
            {/*    ],*/}
            {/*    opacity: [0.22, 0.32, 0.22],*/}
            {/*  }}*/}
            {/*  transition={{*/}
            {/*    duration: 9,*/}
            {/*    repeat: Infinity,*/}
            {/*    ease: "easeInOut",*/}
            {/*    delay: 2,*/}
            {/*  }}*/}
            {/*/>*/}
            {/*<motion.path*/}
            {/*  d="M 70 120 Q 110 100, 150 120 T 230 120"*/}
            {/*  stroke="rgba(30, 58, 95, 0.3)"*/}
            {/*  strokeWidth="1"*/}
            {/*  fill="none"*/}
            {/*  animate={{*/}
            {/*    d: [*/}
            {/*      "M 70 120 Q 110 100, 150 120 T 230 120",*/}
            {/*      "M 70 120 Q 110 105, 150 120 T 230 120",*/}
            {/*      "M 70 120 Q 110 100, 150 120 T 230 120",*/}
            {/*    ],*/}
            {/*    opacity: [0.3, 0.4, 0.3],*/}
            {/*  }}*/}
            {/*  transition={{*/}
            {/*    duration: 11,*/}
            {/*    repeat: Infinity,*/}
            {/*    ease: "easeInOut",*/}
            {/*    delay: 0.5,*/}
            {/*  }}*/}
            {/*/>*/}
            {/*<motion.path*/}
            {/*  d="M 40 200 Q 95 185, 150 200 T 260 200"*/}
            {/*  stroke="rgba(30, 58, 95, 0.25)"*/}
            {/*  strokeWidth="0.8"*/}
            {/*  fill="none"*/}
            {/*  animate={{*/}
            {/*    d: [*/}
            {/*      "M 40 200 Q 95 185, 150 200 T 260 200",*/}
            {/*      "M 40 200 Q 95 190, 150 200 T 260 200",*/}
            {/*      "M 40 200 Q 95 185, 150 200 T 260 200",*/}
            {/*    ],*/}
            {/*    opacity: [0.25, 0.35, 0.25],*/}
            {/*  }}*/}
            {/*  transition={{*/}
            {/*    duration: 12,*/}
            {/*    repeat: Infinity,*/}
            {/*    ease: "easeInOut",*/}
            {/*    delay: 1.5,*/}
            {/*  }}*/}
            {/*/>*/}

            {/* Concentric circles for signal/data points */}
            <motion.circle
              cx="150"
              cy="150"
              r="30"
              stroke="rgba(45, 212, 191, 0.18)"
              strokeWidth="1"
              fill="none"
              animate={{
                r: [30, 35, 30],
                opacity: [0.18, 0.28, 0.18],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.circle
              cx="150"
              cy="150"
              r="50"
              stroke="rgba(45, 212, 191, 0.15)"
              strokeWidth="0.8"
              fill="none"
              animate={{
                r: [50, 55, 50],
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
            <motion.circle
              cx="150"
              cy="150"
              r="70"
              stroke="rgba(30, 58, 95, 0.25)"
              strokeWidth="0.8"
              fill="none"
              animate={{
                r: [70, 75, 70],
                opacity: [0.25, 0.35, 0.25],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />

            {/* Data nodes */}
            <motion.circle
              cx="150"
              cy="150"
              r="3"
              fill="rgba(45, 212, 191, 0.4)"
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.circle
              cx="80"
              cy="120"
              r="2"
              fill="rgba(45, 212, 191, 0.3)"
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
            <motion.circle
              cx="220"
              cy="180"
              r="2"
              fill="rgba(30, 58, 95, 0.4)"
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </pattern>
        </defs>

        {/* Apply grid first */}
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Apply topography pattern */}
        <rect width="100%" height="100%" fill="url(#topography)" />

        {/* Lighter gradient overlay to preserve pattern visibility */}
        <defs>
          <radialGradient id="fadeGradient" cx="50%" cy="30%">
            <stop offset="0%" stopColor="rgba(45, 212, 191, 0.02)" />
            <stop offset="40%" stopColor="rgba(5, 10, 20, 0.3)" />
            <stop offset="100%" stopColor="rgba(5, 10, 20, 0.8)" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#fadeGradient)" />
      </svg>

      {/* Animated scanning line effect */}
      <Box
        component={motion.div}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(45, 212, 191, 0.6), transparent)',
        }}
        animate={{
          y: ['0vh', '100vh'],
          opacity: [0, 0.8, 0.8, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 5,
        }}
      />

      {/* Signal propagation circles - now responsive */}
      <Box
        component={motion.div}
        sx={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '300px', md: '500px', lg: '600px' },
          height: { xs: '300px', md: '500px', lg: '600px' },
          borderRadius: '50%',
          border: '1px solid rgba(45, 212, 191, 0.2)',
        }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.4, 0.15, 0.4],
        }}
        transition={{
          duration: 10,
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
          width: { xs: '400px', md: '650px', lg: '800px' },
          height: { xs: '400px', md: '650px', lg: '800px' },
          borderRadius: '50%',
          border: '1px solid rgba(45, 212, 191, 0.15)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Additional pulse from bottom-right corner */}
      <Box
        component={motion.div}
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '20%',
          width: { xs: '200px', md: '350px' },
          height: { xs: '200px', md: '350px' },
          borderRadius: '50%',
          border: '1px solid rgba(30, 58, 95, 0.25)',
        }}
        animate={{
          scale: [1, 1.6, 1],
          opacity: [0.4, 0.1, 0.4],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </Box>
  );
};
