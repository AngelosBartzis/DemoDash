import {Box, Divider, Stack} from '@mui/material'
import NotificationsPanel from './NotificationsPanel.jsx'
import ActivitiesPanel from './ActivitiesPanel.jsx'
import ContactsPanel from './ContactsPanel.jsx'

export default function RightSidebar() {
    return (
        <Box
            component="aside"
            sx={{
                width: 280,
                flexShrink: 0,
                p: 2.5,
                bgcolor: 'background.paper',
                borderLeft: 1,
                borderColor: 'divider',
            }}
        >
            <Stack spacing={3}>
                <NotificationsPanel/>
                <Divider/>
                <ActivitiesPanel/>
                <Divider/>
                <ContactsPanel/>
            </Stack>
        </Box>
    )
}
