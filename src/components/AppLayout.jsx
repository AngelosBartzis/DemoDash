import {useState} from 'react'
import {Box, useMediaQuery, Drawer} from '@mui/material'
import {Outlet, useNavigate} from 'react-router-dom'
import AppNavbar from './layout/AppNavbar.jsx'
import AppSidebar from './layout/AppSidebar.jsx'
import SettingsMenu from './layout/SettingsMenu.jsx'
import {useTheme} from '@mui/material/styles'
import RightSidebar from './layout/RightSidebar.jsx'

export default function AppLayout({
                                      isLoggedIn,
                                      setIsLoggedIn,
                                  }) {
    const navigate = useNavigate()

    const [drawerOpen, setDrawerOpen] = useState(false)
    const [settingsAnchor, setSettingsAnchor] = useState(null)
    const theme = useTheme()
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))
    const [rightDrawerOpen, setRightDrawerOpen] = useState(false)

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
                    alignItems: 'flex-start',
                    minWidth: 0,
                }}
            >
                <Box
                    component="main"
                    sx={{
                        flex: 1,
                        minWidth: 0,
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
