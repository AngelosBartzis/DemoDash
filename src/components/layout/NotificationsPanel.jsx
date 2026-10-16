import {
    BugReport,
    PersonAdd,
    Sensors,
} from '@mui/icons-material'
import {
    Avatar,
    Box,
    Stack,
    Typography,
} from '@mui/material'
import {useTranslation} from 'react-i18next'

const notifications = [
    {
        id: 1,
        message: 'You fixed a bug.',
        time: 'Just now',
        icon: BugReport,
    },
    {
        id: 2,
        message: 'New user registered.',
        time: '59 minutes ago',
        icon: PersonAdd,
    },
    {
        id: 3,
        message: 'You fixed a bug.',
        time: '12 hours ago',
        icon: BugReport,
    },
    {
        id: 4,
        message: 'Andi Lane subscribed to you.',
        time: 'Today, 11:59 AM',
        icon: Sensors,
    },
]

export default function NotificationsPanel() {
    const {t} = useTranslation()

    return (
        <Box>
            <Typography variant="subtitle1" fontWeight={600} sx={{mb: 2}}>
                {t('notifications')}
            </Typography>

            <Stack spacing={2}>
                {notifications.map(({id, message, time, icon: Icon}) => (
                    <Stack key={id} direction="row" spacing={1} sx={{alignItems: 'flex-start'}}>
                        <Avatar
                            variant="rounded"
                            sx={{
                                width: 28,
                                height: 28,
                                bgcolor: 'action.selected',
                                color: 'text.primary',
                            }}
                        >
                            <Icon sx={{fontSize: 17}}/>
                        </Avatar>

                        <Box sx={{minWidth: 0}}>
                            <Typography variant="body2">{message}</Typography>
                            <Typography variant="caption" color="text.secondary">
                                {time}
                            </Typography>
                        </Box>
                    </Stack>
                ))}
            </Stack>
        </Box>
    )
}
