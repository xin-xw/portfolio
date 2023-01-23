import {
    Title,
    Box,
    Text,
    List,
    Paper,
    Timeline,
    Center,
    Highlight,
    Grid,
    HoverCard,
    Popover,
    Image,
    Anchor,
    MediaQuery,
    useMantineColorScheme,
    TimelineItem,
} from '@mantine/core';
import Link from 'next/link';
import { useColorScheme, useMediaQuery } from '@mantine/hooks';
import { IconCalendarEvent, IconFileDescription } from '@tabler/icons';
import useStyles from './Journey.styles';
import TextLink from '../TextModifiers/TextLink';
import PopoverText from '../TextModifiers/PopoverText';

export function Journey() {
    const { classes } = useStyles();
    const matches = useMediaQuery('(min-width: 1200px)');
    const colorScheme = useColorScheme();

    return (
        <>
            <Box>
                <Grid>
                    <Grid.Col lg={4}>
                        {matches ?
                                <>
                                <Box>
                                    <Box className={classes.pfp}>
                                        <Image src="/journey/pfp-night-mode.svg" />
                                    </Box>
                                    {/*<Box className={classes.pfp}>*/}
                                    {/*    <Image src="/journey/pfp-night-mode.svg" />*/}
                                    {/*</Box>*/}
                                    {/*<Box className={classes.pfp}>*/}
                                    {/*    <Image src="/journey/pfp-night-mode.svg" />*/}
                                    {/*</Box>*/}
                                </Box>
                                </>
                         :
                            <>

                                <Box className={classes.pfp}>
                                    <Image src="/journey/pfp-night-mode.svg" />
                                </Box>
                            </>
                        }
                    </Grid.Col>
                    <Grid.Col lg={8} className={classes.timeline}>

                        <Timeline radius="xs" color="gray" active={1} bulletSize={24} lineWidth={2}>
                            <Timeline.Item
                              bullet={<IconFileDescription size={18} />}
                              title="VMware"
                            >
                                <Text size="md">Software Engineer</Text>
                                <Text span>
                                    {'Throughout my time here, my objective is to develop, manage, and further enable lifecycle management services on ' +
                                        'software-defined data centers for VMC on AWS and other partner clouds.'}
                                </Text>
                            </Timeline.Item>

                            <Timeline.Item
                              bullet={<IconFileDescription size={18} />}
                              title="zyBooks"
                            >
                                <Text size="md">Content Developer</Text>
                                <Text span>
                                    {'Reviewed, evaluated, and ensured quality of learning materials including questions, solutions, ' +
                                        'modules, activities, and other integrated tools with an end-to-end perspective.'}
                                </Text>
                            </Timeline.Item>

                            <Timeline.Item
                              bullet={<IconCalendarEvent size={18} />}
                              title="HackBU 2022"
                            >
                                <Text size="md">Best Valentine's Day Hack & Best Design</Text>
                                <Text>
                                    {'Won two awards out of 160+ participants at \n' +
                                    ' for creating Spotability \n' +
                                    ' - an app that attempts to discover and match couples based on each other\'s music taste, ' +
                                        'using technologies including React.js, Python, Django, MongoDB.'}
                                </Text>
                            </Timeline.Item>

                            <Timeline.Item
                              bullet={<IconCalendarEvent size={18} />}
                              title="JP Morgan Chase & Co.'s Code for Good"
                            >
                                <Text size="md">Contestant</Text>
                                <Text>
                                    {'Event where me and 3 other colleagues created a full-stack application ' +
                                        'utilizing: Flask, React.js, and SQLite to iterate, develop, and provide an ' +
                                        'interface for non-profit organization, GLSEN. ' +
                                        'Our goal was to source bullying and harassment policies across education agencies nationwide.'}
                                </Text>
                            </Timeline.Item>

                            <Timeline.Item bullet={<IconFileDescription size={18} />} title="Vistendo">
                                <Text size="md">Software Engineer Intern
                                </Text>
                                <Text>
                                    {'Throughout my time here, I received exposure, guidance, and mentorship ' +
                                        'on full-stack development. This internship allowed me to prosper an expertise in React.js, ' +
                                        'provided me with first-hand experience in utilizing various AWS solutions, and also led me to ' +
                                        'grasp intricate knowledge of SFTP & SCP protocols. ' +
                                        'Combining all of this new information in conjunction to the ' +
                                        'innovative tech stack allowed me to aid Vistendo further along their PWA development progress.'}
                                </Text>
                            </Timeline.Item>

                            <Timeline.Item bullet={<IconFileDescription size={18} />} title={"NASA L'Space MCA"}>
                                <Text size="md">Computer Scientist & Subteam Co-Lead</Text>
                                {'This experience taught me the importance of management, teamwork, and leadership. ' +
                                    'Here, I researched and designed a payload system with a team while leading a sub-group of students. ' +
                                    'Our mission goal was to explore the Venusian atmosphere and scientifically ideate a system ' +
                                    'that would survive such environment while abiding by a $250 million budget constraint.'}
                            </Timeline.Item>
                        </Timeline>
                        {/*<Title>*/}
                        {/*   Journey*/}
                        {/*</Title>*/}
                        {/*<Box>*/}
                        {/*    <List>*/}
                        {/*        <List.Item>*/}
                        {/*            <Text span>*/}
                        {/*                {'Software Engineer at '}*/}
                        {/*            </Text>*/}
                        {/*            <TextLink*/}
                        {/*              link="https://www.vmware.com/"*/}
                        {/*              name="VMware"*/}
                        {/*              span*/}
                        {/*            />*/}
                        {/*            <Text span> under the </Text>*/}
                        {/*            <PopoverText*/}
                        {/*              target="Pod Team"*/}
                        {/*              dropdown="VMware Cloud (VMC), part of Cloud Infrastructure Business Group (CIBG)"*/}
                        {/*              span*/}
                        {/*            />*/}
                        {/*            <Text span>*/}
                        {/*                {'; throughout my time here, my objective is to develop, manage, and further enable lifecycle management services on ' +*/}
                        {/*                'software-defined data centers for VMC on AWS and other partner clouds.'}*/}
                        {/*            </Text>*/}
                        {/*        </List.Item>*/}
                        {/*        <List.Item>*/}
                        {/*            <Text span>*/}
                        {/*                {'Content Developer at '}*/}
                        {/*            </Text>*/}
                        {/*            <TextLink*/}
                        {/*              link="https://www.zybooks.com/about-us"*/}
                        {/*              name="zyBooks"*/}
                        {/*            />*/}
                        {/*            <Text span>*/}
                        {/*                {'Reviewed, evaluated, and ensured quality of learning materials including questions, solutions, ' +*/}
                        {/*                'modules, activities, and other integrated tools with an end-to-end perspective.'}*/}
                        {/*            </Text>*/}
                        {/*        </List.Item>*/}
                        {/*    </List>*/}
                        {/*</Box>*/}
                    </Grid.Col>
                </Grid>
            </Box>

        </>
    );
}
