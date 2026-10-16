import {
    TrendingDown,
    TrendingUp,
} from '@mui/icons-material'
import {
    Box,
    Card,
    CardContent,
    Stack,
    Typography,
} from '@mui/material'

export default function StatCard({label, value, change}) {
    const isPositive = change >= 0
    const TrendIcon = isPositive ? TrendingUp : TrendingDown

    return (
        <Card
            sx={{
                height: '100%',
                transition: 'transform 180ms ease, box-shadow 180ms ease',
                '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: 4,
                },
            }}
        >
            <CardContent sx={{p: 2.5}}>
                <Typography variant="body2" color="text.secondary">
                    {label}
                </Typography>


                <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                        alignItems: 'center',
                        mt: 1,
                    }}
                >
                    <Box sx={{flexShrink: 0}}>
                        <Typography
                            variant="h4"
                            component="p"
                            sx={{
                                fontWeight: 700,
                                fontSize: {xs: '1.65rem', sm: '1.8rem'},
                                lineHeight: 1.3,
                                fontVariantNumeric: 'tabular-nums',
                            }}
                        >
                            {value}
                        </Typography>
                    </Box>

                    <Stack
                        direction="row"
                        spacing={0.5}
                        sx={{
                            flex: 1,
                            minWidth: 0,
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: isPositive ? 'success.main' : 'error.main',
                        }}
                    >
                        <Typography
                            variant="caption"
                            sx={{
                                fontWeight: 700,
                                whiteSpace: 'nowrap',
                                fontVariantNumeric: 'tabular-nums',
                            }}
                        >
                            {isPositive ? '+' : '-'}
                            {Math.abs(change).toFixed(1)}%
                        </Typography>

                        <TrendIcon sx={{fontSize: 16, flexShrink: 0}}/>
                    </Stack>
                </Stack>

            </CardContent>
        </Card>
    )
}
