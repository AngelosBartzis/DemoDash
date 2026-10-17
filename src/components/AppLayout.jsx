import {useState} from 'react'
import {Box, useMediaQuery} from '@mui/material'
import {useTheme} from '@mui/material/styles'
import {Outlet, useNavigate} from 'react-router-dom'
import AppNavbar from './layout/AppNavbar.jsx'
import AppSidebar from './sidebar/AppSidebar.jsx'
import SettingsMenu from './layout/SettingsMenu.jsx'
import RightSidebar from './layout/RightSidebar.jsx'

export default function AppLayout({
                                      isLoggedIn,
                                      setIsLoggedIn,
                                  }) {
    const navigate = useNavigate()
    const theme = useTheme()
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))

    const [drawerOpen, setDrawerOpen] = useState(false)
    const [settingsAnchor, setSettingsAnchor] = useState(null)

    const closeDrawer = () => {
        setDrawerOpen(false)
    }

    const closeSettings = () => {
        setSettingsAnchor(null)
    }

    const handleLogout = () => {
        setIsLoggedIn(false)
        closeDrawer()
        navigate('/login')
    }

    return (
        <Box
            sx={{
                minHeight: '100vh',
                bgcolor: 'background.default',
            }}
        >
            <AppNavbar
                onMenuClick={() => setDrawerOpen(true)}
                onSettingsClick={(event) =>
                    setSettingsAnchor(event.currentTarget)
                }
            />

            <AppSidebar
                desktop={isDesktop}
                open={drawerOpen}
                onClose={closeDrawer}
                isLoggedIn={isLoggedIn}
                onLogout={handleLogout}
            />

            <SettingsMenu
                anchorEl={settingsAnchor}
                onClose={closeSettings}
            />


            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'stretch',
                    minWidth: 0,
                    ml: {lg: '240px'},
                }}
            >
                <Box
                    component="main"
                    sx={{
                        flex: 1,
                        minWidth: 0,
                        minHeight: 'calc(100vh - 64px)',
                        maxWidth: isDesktop ? 'none' : 1440,
                        mx: 'auto',
                        p: {xs: 2, sm: 3, md: 4},
                    }}
                >
                    <Outlet context={{isLoggedIn, setIsLoggedIn}}/>
                </Box>

                {isDesktop && <RightSidebar/>}
            </Box>

        </Box>
    )
}
