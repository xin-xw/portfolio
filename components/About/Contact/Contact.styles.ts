import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
    root: {
      marginBottom: "15px"
    },
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
    tableWrapper: {
        width: '450px',

    },
    timeline: {
        verticalAlign: 'center',
    },
    pfp: {
        width: 'auto',
        height: 'auto',
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
    buttonColor: {
        width:"266px",
        color: theme.colorScheme === 'dark' ? 'white' : theme.colors.dark[9],
        borderColor: theme.colorScheme === 'dark' ? 'white' : theme.colors.dark[9],
        [theme.fn.smallerThan('md')]: {
            width: "325px",
        }
    },
    section: {
        margin: '10px',
    },
}));
