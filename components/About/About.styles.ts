import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
    titleWrapper: {
        align: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 700,

        [theme.fn.smallerThan('md')]: {
            fontSize: 40,
        },
    },
    description: {
        [theme.fn.smallerThan('md')]: {
        padding: 10,

        } },

    tableWrapper: {
        width: '500px',

    },
    table: {
        filter: theme.colorScheme === 'dark' ? 'invert(90%)' : 'none',
    },

    textUnderlineBold: {
        cursor: 'pointer',
        textDecoration: 'underline',
        fontWeight: 500,
    },

    musicSection: {

        width: '225px',
    },
}));
