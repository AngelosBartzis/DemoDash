import {
    Avatar,
    Box,
    Stack,
    Typography,
} from '@mui/material'
import {useTranslation} from 'react-i18next'

const activities = [
    {id: 1, name: 'Alex Morgan', action: 'Changed the style.', time: 'Just now', initials: 'AM'},
    {id: 2, name: 'Jamie Lee', action: 'Released a new version.', time: '59 minutes ago', initials: 'JL'},
    {id: 3, name: 'Taylor Reed', action: 'Submitted a bug.', time: '12 hours ago', initials: 'TR'},
    {id: 4, name: 'Jordan Blake', action: 'Modified data in Page X.', time: 'Today, 11:59 AM', initials: 'JB'},
    {id: 5, name: 'Casey Taylor', action: 'Deleted a page in Project X.', time: 'Feb 2, 2026', initials: 'CT'},
]

export default function ActivitiesPanel() {
    const {t} = useTranslation()

    return (
        <Box>
            <Typography variant="subtitle1" fontWeight={600} sx={{mb: 2}}>
                {t('activities')}
            </Typography>

            <Stack spacing={2}>
                {activities.map((activity) => (
                    <Stack key={activity.id} direction="row" spacing={1} sx={{alignItems: 'flex-start'}}>
                        <Avatar sx={{width: 28, height: 28, fontSize: 11}}>
                            {activity.initials}
                        </Avatar>

                        <Box sx={{minWidth: 0}}>
                            <Typography variant="body2">
                                {activity.action}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                {activity.time}
                            </Typography>
                        </Box>
                    </Stack>
                ))}
            </Stack>
        </Box>
    )
}
