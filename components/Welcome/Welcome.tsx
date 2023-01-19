import { Title, Text, Anchor } from '@mantine/core';
import useStyles from './Welcome.styles';
import NavigationBarUsage from '../Header/NavigationBar/NavigationBar.story';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
        <NavigationBarUsage />
        <Title className={classes.title} align="center" mt={100}>
            wip +
        <Text inherit variant="gradient" component="span">
            wip
        </Text>
        </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
          wip
        <Anchor href="https://mantine.dev/guides/next/" size="lg">
          wip
        </Anchor>
        wip
      </Text>
    </>
  );
}
