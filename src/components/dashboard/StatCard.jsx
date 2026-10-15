import {
    Box,
    Card,
    CardContent,
    Stack,
    Typography,
} from '@mui/material'

export default function StatCard({label, value, icon: Icon}) {
    return (
        <Card sx={{height: '100%'}}>
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
    )
}
