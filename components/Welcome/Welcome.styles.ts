import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  title: {
    fontSize: 40,
    fontWeight: 700,
    [theme.fn.smallerThan('md')]: {
      marginTop: '50px',
      fontSize: 40,
    },
  },
  description: {
    padding: '20px',
    margin: 'auto',
    verticalAlign: 'center',
    [theme.fn.smallerThan('md')]: {
      marginTop: '-50px',
      marginBottom: '50px',
    },
  },
  door: {
    [theme.fn.smallerThan('md')]: {
      marginTop: '-85px',
      marginBottom: '0px',
    },
    filter: theme.colorScheme === 'dark' ? 'invert(90%)' : 'none',
    maxWidth: '450px',
    maxHeight: '450px',

  },
  textUnderlineBold: {
    cursor: 'pointer',
    textDecoration: 'underline',
    fontWeight: 500,
  },
  section: {
    marginTop: '5px',
    marginBottom: '5px',
  },
}));
