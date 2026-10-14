import {createTheme} from '@mui/material/styles'

const commonSettings = {
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {fontSize: '2.5rem', fontWeight: 700},
        h2: {fontSize: '2rem', fontWeight: 700},
        h3: {fontSize: '1.75rem', fontWeight: 600},
        h4: {fontSize: '1.5rem', fontWeight: 600},
        h5: {fontSize: '1.25rem', fontWeight: 600},
        h6: {fontSize: '1.125rem', fontWeight: 600},
        button: {
            textTransform: 'none',
            fontWeight: 600,
        },
    },

    shape: {
        borderRadius: 10,
    },

    spacing: 8,

    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },

    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    minHeight: '100%',
                    WebkitTextSizeAdjust: '100%',
                },
                body: {
                    minHeight: '100vh',
                    margin: 0,
                },
                '#root': {
                    minHeight: '100vh',
                },
                '*, *::before, *::after': {
                    boxSizing: 'border-box',
                },
            },
        },

        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    minHeight: 40,
                    borderRadius: 8,
                    paddingInline: 16,
                },
            },
        },

        MuiIconButton: {
            defaultProps: {
                size: 'medium',
            },
        },

        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                },
            },
        },

        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                },
            },
        },

        MuiDialog: {
            styleOverrides: {
                paper: {
                    borderRadius: 16,
                    backgroundImage: 'none',
                    margin: 16,
                    width: 'calc(100% - 32px)',
                    maxWidth: '600px',
                },
            },
        },

        MuiTextField: {
            defaultProps: {
                fullWidth: true,
                size: 'medium',
            },
        },

        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                },
            },
        },

        MuiTableCell: {
            styleOverrides: {
                root: {
                    padding: '12px 16px',
                },
                head: {
                    fontWeight: 700,
                },
            },
        },

        MuiTooltip: {
            defaultProps: {
                arrow: true,
            },
        },
    },
}

const palettes = {
    light: {
        mode: 'light',
        primary: {
            main: '#2563EB',
            light: '#60A5FA',
            dark: '#1D4ED8',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#334155',
            light: '#64748B',
            dark: '#1E293B',
            contrastText: '#FFFFFF',
        },
        background: {
            default: '#F5F8FC',
            paper: '#FFFFFF',
        },
        text: {
            primary: '#172B4D',
            secondary: '#52637A',
        },
        divider: '#DCE4EF',
        error: {main: '#DC2626'},
        warning: {main: '#D97706'},
        info: {main: '#0284C7'},
        success: {main: '#15803D'},
    },

    dark: {
        mode: 'dark',
        primary: {
            main: '#60A5FA',
            light: '#93C5FD',
            dark: '#3B82F6',
            contrastText: '#0B1120',
        },
        secondary: {
            main: '#263B59',
            light: '#3B5273',
            dark: '#172A46',
            contrastText: '#FFFFFF',
        },
        background: {
            default: '#0B1120',
            paper: '#111C30',
        },
        text: {
            primary: '#F1F5F9',
            secondary: '#B0BED0',
        },
        divider: '#293950',
        error: {main: '#F87171'},
        warning: {main: '#FBBF24'},
        info: {main: '#38BDF8'},
        success: {main: '#4ADE80'},
    },
}

export const createAppTheme = (mode = 'light') =>
    createTheme({
        ...commonSettings,
        palette: palettes[mode] ? palettes[mode] : palettes.light,
    })
