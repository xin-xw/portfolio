import { Header, Anchor, Button, Text, Container, Box, Title, Group, Burger, Paper, Transition } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import Link from 'next/link';
import { useSpotlight } from '@mantine/spotlight';
import { useRouter } from 'next/router';
import useStyles, { HEADER_HEIGHT } from './NavigationBar.styles';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

interface NavigationBarProps {
    links: { label: string; href: string }[];
}

// @ts-ignore
export default function NavigationBar({ links }: NavigationBarProps) {
    const router = useRouter();
    const [opened, { toggle, close }] = useDisclosure(false);
    const { classes, cx } = useStyles();
    const spotlight = useSpotlight();

    const items = links.map((link => (

        <Link href={link.href} passHref>
            <Button className={link.href === router.asPath ? classes.linkActive : classes.link} variant="subtle" color="dark" size="sm">
                {link.label}

            </Button>

        </Link>

    )));

    return (
        <Header sx={{ borderBottomWidth: 0 }} height={HEADER_HEIGHT} mb={100} className={classes.root}>
            <Container className={classes.header}>
                <Paper component="a" className={classes.logo} href="/">
                    <Title order={5} span>
                        xin{router.asPath === '/' ? '/home' : router.asPath}
                    </Title>
                </Paper>

                <Group spacing={5} className={classes.links}>
                    {items}
                    <Button className={classes.buttonColor} variant="outline" onClick={() => spotlight.openSpotlight()}>
                        find
                    </Button>
                    <ColorSchemeToggle />
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
