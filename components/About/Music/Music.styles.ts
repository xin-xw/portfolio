import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({

    root: {
        // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        align: 'center',
        width: '100%',
        maxWidth: '225px',
        color: theme.colorScheme === 'dark' ? 'white' : theme.colors.dark[9],
        borderColor: theme.colorScheme === 'dark' ? 'white' : theme.colors.dark[9],
        [theme.fn.smallerThan('md')]: {
            width: '325px',
        },
    },
    button: {
        width: '100%',
        color: theme.colorScheme === 'dark' ? 'white' : theme.colors.dark[9],
        borderColor: theme.colorScheme === 'dark' ? 'white' : theme.colors.dark[9],

    },
    drawer: {
        padding: 'xl',

    },
    item: {
        // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        border: '3px solid transparent',
        position: 'relative',
        zIndex: 0,
        transition: 'transform 150ms ease',

        '&[data-active]': {
            transform: 'scale(1.03)',
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
            // boxShadow: theme.shadows.md,
            borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
            // borderRadius: theme.radius.md,
            zIndex: 1,
        },
    },
    buttonColor: {
        width: '100%',
        maxWidth: '500px',
        color: theme.colorScheme === 'dark' ? 'white' : theme.colors.dark[9],
        borderColor: theme.colorScheme === 'dark' ? 'white' : theme.colors.dark[9],

    },
    chevron: {
        '&[data-rotate]': {
            transform: 'rotate(-90deg)',
        },
    },
}));
