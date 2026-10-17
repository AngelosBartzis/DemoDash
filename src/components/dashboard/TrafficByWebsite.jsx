import {Box, Paper, Stack, Typography} from '@mui/material'
import {useTheme} from '@mui/material/styles'
import {useTranslation} from 'react-i18next'

const trafficSources = [
    {label: 'Google', value: 2000},
    {label: 'YouTube', value: 3200},
    {label: 'Instagram', value: 2200},
    {label: 'Pinterest', value: 4800},
    {label: 'Facebook', value: 1800},
    {label: 'Twitter', value: 2200},
]

export default function TrafficByWebsite() {
    const {t} = useTranslation()
    const theme = useTheme()

    const maxValue = 5000
    const maxLineWidth = 100

    return (
        <Paper
            variant="outlined"
            sx={{
                p: {xs: 2, sm: 3},
                minWidth: 0,
                borderRadius: 3,
                height: '100%',
            }}
        >
            <Stack spacing={0.5} sx={{mb: 4}}>
                <Typography variant="h6" fontWeight={600}>
                    {t('trafficByWebsite')}
                </Typography>
            </Stack>

            <Stack spacing={2.5}>
                {trafficSources.map((source) => (
                    <Box
                        key={source.label}
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: '90px minmax(0, 1fr)',
                            alignItems: 'center',
                            gap: 1,
                            minWidth: 0,
                        }}
                    >
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            noWrap
                        >
                            {source.label}
                        </Typography>

                        <Box
                            sx={{
                                width: '100%',
                                minWidth: 0,
                                height: 12,
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <svg
                                width={`${(source.value / maxValue) * maxLineWidth}%`}
                                height="12"
                                viewBox="0 0 100 12"
                                preserveAspectRatio="none"
                                role="img"
                                aria-label={`${source.label}: ${source.value} ${t('visits')}`}
                            >
                                <line
                                    x1="0"
                                    y1="6"
                                    x2="100"
                                    y2="6"
                                    stroke={theme.palette.text.primary}
                                    strokeWidth="3"
                                    strokeDasharray="20 3"
                                    strokeLinecap="butt"
                                />
                            </svg>
                        </Box>
                    </Box>
                ))}
            </Stack>
        </Paper>
    )
}