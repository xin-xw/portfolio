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

    pfp: {
        width: '225px',
        height: '225px',
        [theme.fn.smallerThan('xl')]: {
            marginTop: '-50px',
            paddingBottom: '250px',
            width: '150px',
            height: '150px',
        },
    },
    textUnderlineBold: {
        cursor: 'pointer',
        textDecoration: 'underline',
        fontWeight: 500,
    },
}));
