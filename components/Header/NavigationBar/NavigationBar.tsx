import { Header, Anchor, Button, Text, Container, Box, Title, Group, Burger, Paper, Transition } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import Link from 'next/link';
import { useSpotlight } from '@mantine/spotlight';
import { TbMapSearch } from 'react-icons/tb';
import useStyles, { HEADER_HEIGHT } from './NavigationBar.styles';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

interface NavigationBarProps {
    links: { label: string; link: string }[];
}

// @ts-ignore
export default function NavigationBar({ links }: NavigationBarProps) {
    const [opened, { toggle, close }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);
    const [currentLabel, setCurrentLabel] = useState(links[0].label);
    const { classes, cx } = useStyles();
    const spotlight = useSpotlight();

    const items = links.map((link => (
        <a
          key={link.label}
          href={link.link}
          className={cx(classes.link, { [classes.linkActive]: active === link.link })}
          onClick={(event) => {
                event.preventDefault();
                setActive(link.link);
                setCurrentLabel(link.label);
                close();
            }}
        >
            {link.label}
        </a>
    )));

    return (
        <Header height={HEADER_HEIGHT} mb={100} className={classes.root}>
            <Container className={classes.header}>
                <Button component={Link} href="/asdf">
                    <Title order={4}>
                        {'xin / '}{currentLabel}
                    </Title>
                </Button>

                <Group spacing={5} className={classes.links}>
                    {items}
                    <ColorSchemeToggle />
                    <Button
                      ml={1}
                      variant="default"
                      onClick={() => spotlight.openSpotlight()}
                      rightIcon={<TbMapSearch />}
                    >
                        find
                    </Button>

                </Group>

                <Box className={classes.mobileColorTogglePlacement}>
                    <Group>
                        <ColorSchemeToggle />
                        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
                    </Group>
                </Box>

                <Transition transition="pop-top-right" duration={200} mounted={opened}>
                    {(styles) => (
                        <Paper className={classes.dropdown} withBorder style={styles}>
                            {items}
                        </Paper>
                    )}
                </Transition>
            </Container>
        </Header>
    );
}
