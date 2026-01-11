'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2DD4BF', // Teal - trust + tech
      light: '#5EEAD4',
      dark: '#14B8A6',
      contrastText: '#050A14',
    },
    secondary: {
      main: '#1E3A5F', // Deep Navy
      light: '#2E4A6F',
      dark: '#0E2A4F',
    },
    background: {
      default: '#050A14', // Very Dark
      paper: '#0F172A',
      elevated: '#1E293B',
    },
    text: {
      primary: '#E2E8F0', // Off-white
      secondary: '#CBD5E1', // Muted gray
      disabled: '#64748B',
    },
    steel: {
      main: '#64748B',
      light: '#94A3B8',
      dark: '#475569',
      100: '#F1F5F9',
      200: '#E2E8F0',
    },
    navy: {
      main: '#0A1628',
      light: '#1E3A5F',
      dark: '#050A14',
    },
    teal: {
      main: '#2DD4BF',
      light: '#5EEAD4',
      dark: '#14B8A6',
      50: '#F0FDFA',
      100: '#CCFBF1',
    },
    // Gradient tokens - deep trust palette
    gradients: {
      primary: 'linear-gradient(135deg, #2DD4BF, #1E3A5F)',
      secondary: 'linear-gradient(135deg, #14B8A6, #0A1628)',
      subtle: 'linear-gradient(135deg, rgba(45, 212, 191, 0.1), rgba(30, 58, 95, 0.1))',
      glass: 'linear-gradient(135deg, rgba(45, 212, 191, 0.05), rgba(30, 58, 95, 0.05))',
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },

  // Border radius tokens
  shape: {
    borderRadius: 8,
    borderRadiusSm: 12,
    borderRadiusMd: 24,
    borderRadiusLg: 32,
  },

  // Transition tokens
  transitions: {
    duration: {
      fastest: 150,
      fast: 200,
      normal: 300,
      slow: 400,
      slowest: 500,
    },
    easing: {
      smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    },
  },

  typography: {
    fontFamily: 'var(--font-inter), Inter, system-ui, -apple-system, sans-serif',
    h1: {
      fontFamily: `var(--font-fira-code), 'Fira Code', monospace`,
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      '@media (min-width:768px)': {
        fontSize: '4.5rem',
      },
    },
    h2: {
      fontFamily: `var(--font-fira-code), 'Fira Code', monospace`,
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      '@media (min-width:768px)': {
        fontSize: '3.75rem',
      },
    },
    h3: {
      fontFamily: `var(--font-fira-code), 'Fira Code', monospace`,
      fontSize: '1.875rem',
      fontWeight: 600,
      lineHeight: 1.4,
      '@media (min-width:768px)': {
        fontSize: '2.25rem',
      },
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.75,
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      fontWeight: 400,
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: '#ededed',
          background: '#0a0a0a',
          scrollBehavior: 'smooth',
        },
        '@media (prefers-reduced-motion: reduce)': {
          '*, *::before, *::after': {
            animationDuration: '0.01ms !important',
            animationIterationCount: '1 !important',
            transitionDuration: '0.01ms !important',
            scrollBehavior: 'auto !important',
          },
        },
      },
    },
    MuiPaper: {
      variants: [
        {
          props: { variant: 'glass' },
          style: {
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
          },
        },
        {
          props: { variant: 'glassEnhanced' },
          style: {
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.05))',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: `
              0 8px 32px rgba(0, 0, 0, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.1)
            `,
          },
        },
      ],
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '9999px',
          textTransform: 'none',
          fontWeight: 600,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '9999px',
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
