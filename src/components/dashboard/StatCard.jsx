import {
    TrendingDown,
    TrendingUp,
} from '@mui/icons-material'
import {
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
                        alignItems: 'baseline',
                        flexWrap: 'wrap',
                        mt: 1,
                    }}
                >
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

                    <Stack
                        direction="row"
                        spacing={0.25}
                        sx={{
                            alignItems: 'center',
                            color: isPositive ? 'success.main' : 'error.main',
                        }}
                    >
                        <TrendIcon sx={{fontSize: 16}}/>

                        <Typography
                            variant="caption"
                            sx={{
                                fontWeight: 700,
                                whiteSpace: 'nowrap',
                                fontVariantNumeric: 'tabular-nums',
                            }}
                        >
                            {Math.abs(change).toFixed(1)}%
                        </Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}
