import {
    Divider,
    Drawer,
} from '@mui/material'
import SidebarHeader from './SidebarHeader.jsx'
import SidebarNavigation from './SidebarNavigation.jsx'
import SidebarFooter from './SidebarFooter.jsx'

export default function AppSidebar({
                                       open,
                                       onClose,
                                       isLoggedIn,
                                       onLogout,
                                       desktop = false,
                                   }) {
    return (
        <Drawer
            variant={desktop ? 'permanent' : 'temporary'}
            anchor="left"
            open={desktop || open}
            onClose={onClose}
            sx={{
                width: desktop ? 240 : undefined,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: desktop ? 240 : 'min(280px, 85vw)',
                    boxSizing: 'border-box',
                    bgcolor: 'background.paper',
                    borderRight: 1,
                    borderColor: 'divider',
                    display: 'flex',
                    flexDirection: 'column',
                },
            }}
        >
            <SidebarHeader isLoggedIn={isLoggedIn}/>

            <SidebarNavigation
                desktop={desktop}
                onClose={onClose}
            />

            <Divider/>

            <SidebarFooter
                isLoggedIn={isLoggedIn}
                onLogout={onLogout}
                onClose={onClose}
                desktop={desktop}
            />
        </Drawer>
    )
}