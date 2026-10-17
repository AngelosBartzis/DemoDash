import {Box, Paper, Stack, Typography} from '@mui/material'
import {PieChart} from '@mui/x-charts/PieChart'
import {useTheme} from '@mui/material/styles'
import {useTranslation} from 'react-i18next'

const locationData = [
    {id: 0, labelKey: 'unitedStates', value: 38},
    {id: 1, labelKey: 'germany', value: 24},
    {id: 2, labelKey: 'greece', value: 18},
    {id: 3, labelKey: 'unitedKingdom', value: 12},
    {id: 4, labelKey: 'otherLocations', value: 8},
]

export default function TrafficByLocation() {
    const {t} = useTranslation()
    const theme = useTheme()

    const locationColors = [
        theme.palette.primary.main,
        theme.palette.secondary.main,
        theme.palette.success.main,
        theme.palette.info.main,
        theme.palette.text.disabled,
    ]

    return (
        <Paper
            variant="outlined"
            sx={{
                p: {xs: 2, sm: 3},
                minWidth: 0,
                borderRadius: 3,
                height: '100%',
                boxSizing: 'border-box',
            }}
        >
            <Stack spacing={0.5} sx={{mb: 1}}>
                <Typography variant="h6" fontWeight={600}>
                    {t('trafficByLocation')}
                </Typography>
            </Stack>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: {xs: 1, sm: 2},
                    width: '100%',
                    minWidth: 0,
                }}
            >
                <PieChart
                    width={160}
                    height={180}
                    series={[
                        {
                            data: locationData.map((location) => ({
                                id: location.id,
                                label: t(location.labelKey),
                                value: location.value,
                            })),
                            innerRadius: 32,
                            outerRadius: 68,
                            paddingAngle: 3,
                            cornerRadius: 3,
                            highlightScope: {
                                fade: 'global',
                                highlight: 'item',
                            },
                            faded: {
                                innerRadius: 25,
                                additionalRadius: -3,
                                color: theme.palette.action.disabled,
                            },
                        },
                    ]}
                    colors={locationColors}
                    hideLegend
                />

                <Stack spacing={1} sx={{flex: 1, minWidth: 0}}>
                    {locationData.map((location, index) => (
                        <Box
                            key={location.id}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: 1,
                                minWidth: 0,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 0.75,
                                    minWidth: 0,
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 8,
                                        height: 8,
                                        flexShrink: 0,
                                        borderRadius: '50%',
                                        bgcolor: locationColors[index],
                                    }}
                                />
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    noWrap
                                >
                                    {t(location.labelKey)}
                                </Typography>
                            </Box>

                            <Typography
                                variant="body2"
                                fontWeight={600}
                                sx={{flexShrink: 0}}
                            >
                                {location.value}%
                            </Typography>
                        </Box>
                    ))}
                </Stack>
            </Box>
        </Paper>
    )
}