import { Title, Center, Box, Divider, Button, Text, List, Paper, Highlight, Grid, HoverCard, Popover, Image, Anchor, useMantineColorScheme } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useStyles from './Welcome.styles';

export function Welcome() {
    const { classes } = useStyles();
    const router = useRouter();

    return (
        <>
            <Box>

                <Grid>

                    <Grid.Col md={6} className={classes.description}>
                        <Box className={classes.section}>
                        <Popover width={230} shadow="md">
                            <Text span>{'Hey, I\'m '}</Text>
                            <Popover.Target>
                                <Text className={classes.textUnderlineBold} span>
                                    Xin
                                </Text>
                            </Popover.Target>
                            <Popover.Dropdown>
                                <Text>
                                    Pronounced like "Shin"
                                </Text>
                            </Popover.Dropdown>
                            {' — '}
                        </Popover>
                        </Box>
                        <Box className={classes.section}>
                            <Text span>
                                {'I like to build great things with great people while having a great time. ' +
                                    'I enjoy learning, expanding my arsenal of toolsets, and using my knowledge and ' +
                                    ' capabilities to help others. '}

                            </Text>

                        </Box>
                        <Box className={classes.section}>
                            {'Outside of work, I enjoy spending time with my friends, traveling, city-exploring, discovering music, dabbling in some video games, ' +
                                'and snowboarding!'}
                        </Box>

                            <Divider size="xs" my="xs" labelPosition="center" label="✽ ✽ ✽" />

                        <Box className={classes.section}>
                            {'At this moment, I\'m a Software Engineer at '}
                            <Text component="a" href="https://www.vmware.com" target="_blank" className={classes.textUnderlineBold}>
                                VMware
                            </Text>
                            {', working with the Pod Team. '}
                            <Text span>
                                {'If you want to chat, reach out to me at: '}
                            </Text>
                            <Text span component="a" href="mailto:xin@xinw.org" target="_blank" className={classes.textUnderlineBold}>
                                xin@xinw.org
                            </Text>
                            <Text span>
                                .
                            </Text>
                        </Box>

                        <Box className={classes.section}>

                            {/*<Text>*/}
                            {/*    Anyway, you should snoop around!*/}
                            {/*</Text>*/}
                            {/*<List>*/}
                            {/*    <Link href="/about" passHref>*/}

                            {/*        <List.Item className={classes.textUnderlineBold}>*/}
                            {/*            More about me*/}
                            {/*        </List.Item>*/}

                            {/*    </Link>*/}
                            {/*    <Link href="/journey" onClick={() => router.push('/about')}>*/}
                            {/*        <List.Item className={classes.textUnderlineBold}>*/}
                            {/*            Experiences and accomplishments*/}
                            {/*        </List.Item>*/}
                            {/*    </Link>*/}
                            {/*    <Link href="/projects">*/}
                            {/*        <List.Item className={classes.textUnderlineBold}>*/}
                            {/*            Featured works and projects*/}
                            {/*        </List.Item>*/}
                            {/*    </Link>*/}
                            {/*    <Link href="/about">*/}
                            {/*        <List.Item className={classes.textUnderlineBold}>*/}
                            {/*            Reach out to me*/}
                            {/*        </List.Item>*/}
                            {/*    </Link>*/}
                            {/*</List>*/}
                            {/*<Text>*/}
                            {/*    <Box className={classes.section}>*/}
                            {/*        <Divider size="xs" my="xs" labelPosition="center" label="✽ ✽ ✽" />*/}
                            {/*    01.22.23: Website still work in progress as of this date*/}
                            {/*    </Box>*/}
                            {/*</Text>*/}
                        </Box>
                    </Grid.Col>
                    <Grid.Col md={6}>
                        <Box>
                            <Center>
                                <Image opacity="80%" className={classes.door} src="/home/door.svg" />
                            </Center>
                        </Box>
                    </Grid.Col>
                </Grid>
            </Box>

        </>
    );
}
