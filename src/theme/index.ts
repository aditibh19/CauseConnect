// src/theme.ts
import { MantineThemeOverride } from '@mantine/core';

export const customTheme: MantineThemeOverride = {
  colorScheme: 'dark',
  fontFamily: 'Montserrat, sans-serif',
  primaryColor: 'primary',

  colors: {
    primary: [
      '#fff9f5',
      '#ffeae0',
      '#ffd4c2',
      '#ffb999',
      '#ff9f77',
      '#ff875b',
      '#e86e44',
      '#c55833',
      '#a24426',
      '#803318',
    ],
    secondary: [
      '#e0f7fa',
      '#b2ebf2',
      '#80deea',
      '#4dd0e1',
      '#26c6da',
      '#00bcd4',
      '#00acc1',
      '#0097a7',
      '#00838f',
      '#006064',
    ],
    dark: [
      '#C1C2C5',
      '#A6A7AB',
      '#909296',
      '#5c5f66',
      '#373A40',
      '#2C2E33',
      '#1F2023',
      '#1A1B1E',
      '#141517',
      '#101113',
    ],
  },

  headings: {
    fontFamily: 'Montserrat, sans-serif',
    sizes: {
      h1: { fontSize: '2.8rem', fontWeight: 800 },
      h2: { fontSize: '2.2rem', fontWeight: 700 },
      h3: { fontSize: '1.8rem', fontWeight: 700 },
      h4: { fontSize: '1.5rem', fontWeight: 600 },
      h5: { fontSize: '1.3rem', fontWeight: 600 },
      h6: { fontSize: '1.1rem', fontWeight: 500 },
    },
  },

  components: {
    Button: {
      styles: (theme) => ({
        root: {
          fontWeight: 600,
          borderRadius: 999,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          backgroundColor: theme.colors.primary[6],
          '&:hover': {
            backgroundColor: theme.colors.primary[7],
          },
        },
      }),
    },

    Title: {
      styles: () => ({
        root: {
          color: '#F3F2E7',
        },
      }),
    },

    Text: {
      styles: () => ({
        root: {
          color: '#E1E1DC',
          lineHeight: 1.6,
        },
      }),
    },

    Input: {
      styles: () => ({
        input: {
          backgroundColor: '#2C2E33',
          borderColor: '#444',
          color: '#fff',
          '&::placeholder': {
            color: '#888',
          },
        },
      }),
    },

    Paper: {
      styles: () => ({
        root: {
          backgroundColor: '#1F2023',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 2px 16px rgba(0, 0, 0, 0.3)',
        },
      }),
    },

    Card: {
      styles: () => ({
        root: {
          backgroundColor: '#2C2E33',
          color: '#FFFFFF',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          transition: '0.3s ease',
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)',
          },
        },
      }),
    },

    Drawer: {
      styles: () => ({
        root: {
          backgroundColor: '#1A1A1A',
          color: '#FFFFFF',
        },
      }),
    },

    Header: {
      styles: () => ({
        root: {
          backgroundColor: '#1A1A1A',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        },
      }),
    },

    Menu: {
      styles: () => ({
        dropdown: {
          backgroundColor: '#1A1A1A',
          borderColor: 'rgba(255, 255, 255, 0.1)',
          color: '#FFFFFF',
        },
      }),
    },

    Container: {
      styles: () => ({
        root: {
          backgroundColor: 'transparent',
        },
      }),
    },
  },
};
