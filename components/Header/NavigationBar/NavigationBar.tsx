import { Header, Anchor, Menu, Button, Text, Container, Box, Title, Group, Burger, Paper, Transition } from '@mantine/core';
import { useDisclosure, useClickOutside } from '@mantine/hooks';
import { useState } from 'react';
import Link from 'next/link';
import { useSpotlight } from '@mantine/spotlight';
import { useRouter } from 'next/router';
import { IconSearch } from '@tabler/icons';
import useStyles, { HEADER_HEIGHT } from './NavigationBar.styles';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

interface NavigationBarProps {
    links: { label: string; href: string }[];
}

// @ts-ignore
export default function NavigationBar({ links }: NavigationBarProps) {
    const router = useRouter();
    const [dropdownOpened, setDropdownOpened] = useState(false);
    const [opened, { toggle }] = useDisclosure(false);
    const clickOutsideRef = useClickOutside(() => setDropdownOpened(false));
    // const [opened, { toggle, close }] = useDisclosure(false);
    const { classes, cx } = useStyles();
    const spotlight = useSpotlight();

    const items = links.map((link => (
        <Link href={link.href} passHref>
            <Button className={link.href === router.asPath ? classes.linkActive : classes.link} variant="subtle" color="dark" size="xs">
                <Title order={6}>{link.label}</Title>
            </Button>
        </Link>
    )));

    return (
        <Header sx={{ borderBottomWidth: 1 }} height={HEADER_HEIGHT} className={classes.root}>
            <Container className={classes.header}>
                <Paper component="a" className={classes.logo} href="/">

                            <Title order={5} span>
                                xin{router.asPath === '/' ? '/home' : router.asPath}
                            </Title>

                </Paper>

                <Group spacing={5} className={classes.links}>
                    {items}
                    <Button className={classes.buttonColor} rightIcon={<IconSearch size="20px" />} variant="outline" onClick={() => spotlight.openSpotlight()}>
                        <Title order={6}>find</Title>
                    </Button>
                    <ColorSchemeToggle />
                </Group>

                <Box className={classes.mobileColorTogglePlacement}>
                    <Group>
                        <ColorSchemeToggle />
                        <Burger
                          ref={clickOutsideRef}
                          opened={dropdownOpened}
                          onClick={() => setDropdownOpened((tar) => !tar)}
                          className={classes.burger}
                          size="sm"
                        />
                    </Group>

                    <Transition transition="pop" duration={200} mounted={dropdownOpened} timingFunction="ease">
                        {(styles) => (
                            <Paper
                              className={classes.dropdown}
                              style={{ ...styles, position: 'absolute', top: 80, left: 10, right: 0, height: 130, padding: 'xl' }}

                            >
                                {items}
                            </Paper>
                        )}
                    </Transition>
                </Box>
                {/*<Menu*/}
                {/*  width={260}*/}
                {/*  position="bottom-end"*/}
                {/*  transition="pop-top-right"*/}
                {/*  onClose={() => setDropdownOpened(false)}*/}
                {/*  onOpen={() => setDropdownOpened(true)*/}
                {/*}*/}
                {/*>*/}
                {/*    <Menu.Dropdown>*/}
                {/*        <Paper className={classes.dropdown} withBorder>*/}

                {/*    <Menu.Item>*/}
                {/*        {items}*/}
                {/*    </Menu.Item>*/}
                {/*        </Paper>*/}
                {/*    </Menu.Dropdown>*/}
                {/*</Menu>*/}

            </Container>
        </Header>
    );
}
