import { createStyles } from '@mantine/core';

export const HEADER_HEIGHT = 70;

export default createStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        borderColor: theme.colorScheme === 'dark' ? 'white' : 'black',
        border: 'lg',

    },
    tags: {
        color: theme.colorScheme === 'dark' ? 'white' : 'gray',
    },
    cardTitle: {

        marginRight: '10px',
        marginLeft: '10px',
    },
    cardDescription: {
        marginTop: '10px',
        padding: '5px',
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
    logo: { cursor: 'pointer' },
    collaborators: {
      marginTop: '10px',
    paddingLeft: '5px',
    },
    projectIconTitle: {
        marginTop: '15px',
        padding: '5px',
    },
    actionLink: {
        borderColor: theme.colorScheme === 'dark' ? 'white' : 'black',
        color: theme.colorScheme === 'dark' ? 'white' : 'black',
    },

}));
