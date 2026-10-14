import {
    Assignment,
    CheckCircle,
    FolderOpen,
    Groups,
} from '@mui/icons-material'
import {
    Box,
    Card,
    CardContent,
    Paper,
    Stack,
    Typography,
} from '@mui/material'
import {useTranslation} from 'react-i18next'

export default function DashboardPage() {
    const {t} = useTranslation()

    const stats = [
        {
            label: t('totalProjects'),
            value: '12',
            icon: FolderOpen,
        },
        {
            label: t('activeTasks'),
            value: '8',
            icon: Assignment,
        },
        {
            label: t('teamMembers'),
            value: '6',
            icon: Groups,
        },
        {
            label: t('completed'),
            value: '24',
            icon: CheckCircle,
        },
    ]

    return (
        <Stack spacing={3}>
            <Box>
                <Typography
                    variant="h4"
                    component="h1"
                    sx={{
                        fontSize: {xs: '1.65rem', sm: '2.125rem'},
                        fontWeight: 700,
                    }}
                >
                    {t('welcome')}
                </Typography>

                <Typography color="text.secondary" sx={{mt: 1}}>
                    {t('dashboardDescription')}
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        sm: 'repeat(2, minmax(0, 1fr))',
                        lg: 'repeat(4, minmax(0, 1fr))',
                    },
                    gap: 2,
                }}
            >
                {stats.map(({label, value, icon: Icon}) => (
                    <Card key={label} sx={{height: '100%'}}>
                        <CardContent sx={{p: 2.5}}>
                            <Stack
                                direction="row"
                                spacing={2}
                                sx={{
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Box sx={{minWidth: 0}}>
                                    <Typography variant="body2" color="text.secondary">
                                        {label}
                                    </Typography>

                                    <Typography variant="h4" fontWeight={700} sx={{mt: 1}}>
                                        {value}
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        display: 'grid',
                                        placeItems: 'center',
                                        flexShrink: 0,
                                        width: 48,
                                        height: 48,
                                        borderRadius: 2,
                                        bgcolor: 'action.selected',
                                        color: 'primary.main',
                                    }}
                                >
                                    <Icon/>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>
                ))}
            </Box>

            <Paper
                variant="outlined"
                sx={{
                    p: {xs: 2.5, sm: 3},
                    minHeight: 180,
                    borderRadius: 3,
                }}
            >
                <Typography variant="h6" fontWeight={600}>
                    {t('recentActivity')}
                </Typography>

                <Typography color="text.secondary" sx={{mt: 2}}>
                    {t('activityPlaceholder')}
                </Typography>
            </Paper>
        </Stack>
    )
}
