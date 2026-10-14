import {
    useCallback,
    useMemo,
    useState,
} from 'react'
import {CssBaseline, ThemeProvider} from '@mui/material'
import {createAppTheme} from './index.js'
import {ColorModeContext} from './ColorModeContext.js'

function getInitialMode() {
    try {
        return localStorage.getItem('color-mode') === 'dark'
            ? 'dark'
            : 'light'
    } catch {
        return 'light'
    }
}

export function ThemeModeProvider({children}) {
    const [mode, setMode] = useState(getInitialMode)

    const toggleColorMode = useCallback(() => {
        setMode((currentMode) => {
            const nextMode = currentMode === 'light' ? 'dark' : 'light'

            try {
                localStorage.setItem('color-mode', nextMode)
            } catch {
                // The theme still works if browser storage is unavailable.
            }

            return nextMode
        })
    }, [])

    const theme = useMemo(() => createAppTheme(mode), [mode])

    const contextValue = useMemo(
        () => ({
            mode,
            toggleColorMode,
            setMode,
        }),
        [mode, toggleColorMode],
    )

    return (
        <ColorModeContext.Provider value={contextValue}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}
