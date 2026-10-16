import {
    Avatar,
    Box,
    Stack,
    Typography,
} from '@mui/material'
import {useTranslation} from 'react-i18next'

const contacts = [
    {id: 1, name: 'Natali Craig', initials: 'NC'},
    {id: 2, name: 'Drew Cano', initials: 'DC'},
    {id: 3, name: 'Andi Lane', initials: 'AL'},
    {id: 4, name: 'Koray Okumus', initials: 'KO'},
    {id: 5, name: 'Kate Morrison', initials: 'KM'},
    {id: 6, name: 'Melody Macy', initials: 'MM'},
]

export default function ContactsPanel() {
    const {t} = useTranslation()

    return (
        <Box>
            <Typography variant="subtitle1" fontWeight={600} sx={{mb: 2}}>
                {t('contacts')}
            </Typography>

            <Stack spacing={1.5}>
                {contacts.map((contact) => (
                    <Stack
                        key={contact.id}
                        direction="row"
                        spacing={1}
                        sx={{alignItems: 'center'}}
                    >
                        <Avatar sx={{width: 28, height: 28, fontSize: 11}}>
                            {contact.initials}
                        </Avatar>

                        <Typography variant="body2">{contact.name}</Typography>
                    </Stack>
                ))}
            </Stack>
        </Box>
    )
}
