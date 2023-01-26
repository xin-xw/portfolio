import { createStyles } from '@mantine/core';

export const HEADER_HEIGHT = 70;

export default createStyles((theme) => ({
    root: {
        position: 'absolute',
        zIndex: 1,
        padding: theme.spacing.sm,
        marginBottom: '100px',
    },
    dropdown: {

        position: 'absolute',
        top: HEADER_HEIGHT,
        right: 0,
        left: 0,
        zIndex: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopWidth: 0,

        border: 'none',

        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
    },
    links: {
        [theme.fn.smallerThan('sm')]: {

            display: 'none',
        },
    },
    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        // radius: 'xs',
        display: 'block',
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: '10px',
        fontWeight: 500,

        [theme.fn.smallerThan('sm')]: {
            padding: 'xl',

            // borderRadius: 0,
            // padding: theme.spacing.sm,
        },
    },
    linkActive: {
        textDecoration: 'underline',
        fontSize: '10px',

    },
    mobileColorTogglePlacement: {

        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },
    buttonColor: {
        color: theme.colorScheme === 'dark' ? 'white' : theme.colors.dark[9],
        borderColor: theme.colorScheme === 'dark' ? 'white' : theme.colors.dark[9],
    },
    navLink: {
        border: 'none',
    },
    logo: {
        border: 'none',
        cursor: 'pointer',
    },
}));
