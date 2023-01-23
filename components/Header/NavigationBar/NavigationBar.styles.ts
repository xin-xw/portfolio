import { createStyles } from '@mantine/core';

export const HEADER_HEIGHT = 70;

export default createStyles((theme) => ({
    root: {
        position: 'relative',
        zIndex: 1,
        [theme.fn.smallerThan('sm')]: {
            padding: '10px 12px',
            zIndex: 1,
        },
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
        overflow: 'hidden',
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
        radius: 'xs',
        display: 'block',
        lineHeight: 1,
        // padding: '8px 12px',
        textDecoration: 'none',
        // color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,
        '&:hover': {
            radius: 'xs',
        },
        [theme.fn.smallerThan('sm')]: {
            // borderRadius: 0,
            // padding: theme.spacing.sm,
        },
    },
    linkActive: {
        textDecoration: 'underline',
        '&, &:hover': {

            // backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
            // color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        },
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