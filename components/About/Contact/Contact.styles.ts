import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
    root: {

    maxWidth: '225px',
    },

    textUnderlineBold: {
        cursor: 'pointer',
        textDecoration: 'underline',
        fontWeight: 500,
    },
    buttonColor: {
        width: '100%',
        color: theme.colorScheme === 'dark' ? 'white' : theme.colors.dark[9],
        borderColor: theme.colorScheme === 'dark' ? 'white' : theme.colors.dark[9],

    },
    section: {
        display: 'flex',

    },
}));
