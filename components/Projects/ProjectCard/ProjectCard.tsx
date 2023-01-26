import { Card, Center, Box, Grid, Flex, Space, Title, Stack, Tooltip, Avatar, Text, Progress, Button, Image, Badge, Group, ActionIcon } from '@mantine/core';
import { IconLink } from '@tabler/icons';
import useStyles from './ProjectCard.style';

interface ProjectCardProps {
    title: string;
    description: string;
    project_icon: string;
    project_link: string;
    avatars: { label: string, url: any }[];
    isSoloProject: boolean;
    tags: { label: string }[]

}

export default function ProjectCard({ title, project_link, project_icon, description, avatars, isSoloProject, tags }: ProjectCardProps) {
    const { classes } = useStyles();

    const features = tags.map((tag) => (
        <Badge
          className={classes.tags}
          key={tag.label}
          size="xs"
          radius="xs"
          variant="light"
            // leftSection={badge.emoji}
        >
            {tag.label}
        </Badge>
    ));

    const teammates = avatars.map((avatar) => (
        <Avatar.Group spacing={0}>
            {/*<Tooltip label={avatar.label} withArrow>*/}
                <Flex direction="column" align="center">
                    <Avatar src={avatar.url} radius="xl" />
                    <Text size="xs">{avatar.label}</Text>
                </Flex>
            {/*</Tooltip>*/}
        </Avatar.Group>

    ));

    return (
        <Card className={classes.root} withBorder>
        <Grid align="flex-end">
            <Card>
            <Box>

                <Flex direction="row" className={classes.projectIconTitle}>
                    <Group spacing="xs">
                        <Avatar src={project_icon} size="md" />
                        <Title order={2} className={classes.cardTitle}>
                            {title}
                        </Title>

                    <ActionIcon component="a" href={project_link} target="_blank" variant="outline" className={classes.actionLink}>
                        <IconLink size={20} />
                    </ActionIcon>
                    </Group>
                </Flex>

            </Box>

            <Grid.Col span={3} style={{ minHeight: 10 }} />
                <Box sx={{ paddingTop: 10, paddingBottom: 10 }}>
                    <Group spacing={6}>
                        {features}
                    </Group>
                </Box>
                <Box className={classes.cardDescription}>
                    {description}
                </Box>
            <Grid.Col span={3} style={{ minHeight: 30 }} />
                <Group className={classes.collaborators}>
                    {teammates}
                    {isSoloProject === true ? <Badge color="red" size="sm" radius="lg" variant="filled">Solo</Badge>
                        : <Badge color="green" size="sm" radius="lg" variant="filled">Collaboration</Badge>}

                </Group>

            </Card>
        </Grid>
        </Card>

        // <Card p={20} className={classes.root} withBorder>
        //
        //  <Group spacing={4} position="right">
        //      {features}
        //  </Group>
        //
        //     <Flex direction="column" mt="md">
        //         <Flex direction="row">
        //             <Avatar src={project_icon} size="sm" />
        //             <Title className={classes.cardTitle}>
        //                 {title}
        //             </Title>
        //             <ActionIcon component="a" href={project_link} target="_blank" variant="default">
        //                 <IconLink size={20} />
        //             </ActionIcon>
        //         </Flex>
        //
        //         <Text size="sm" className={classes.cardDescription} mt={5}>
        //             {description}
        //         </Text>
        //
        //         <Stack sx={{ justifyContent: 'end' }}>
        //
        //                 <Flex>
        //                     {/*<Group position="right" mt="md">*/}
        //                         {teammates}
        //                     {/*</Group>*/}
        //                 </Flex>
        //
        //         </Stack>
        //     </Flex>
        //
        // </Card>
    );
}

// export default function ProjectCard({ title,image, description, avatars, tags }: ProjectCardProps) {
//     const { classes, theme } = useStyles();
//
//     const features = tags.map((tag) => (
//         <Badge
//             key={tag.label}
//             // leftSection={badge.emoji}
//         >
//             {tag.label}
//         </Badge>
//     ));
//
//     return (
//         <Card withBorder radius="md" p="md" className={classes.card}>
//             <Card.Section>
//                 {/*<Image src={image} alt={title} height={180} />*/}
//             </Card.Section>
//
//             <Card.Section className={classes.section} mt="md">
//                 <Group position="apart">
//                     <Text size="lg" weight={500}>
//                         {title}
//                     </Text>
//                     {/*<Badge size="sm">{country}</Badge>*/}
//                 </Group>
//                 <Text size="sm" mt="xs">
//                     {description}
//                 </Text>
//             </Card.Section>
//
//             <Card.Section className={classes.section}>
//                 <Text mt="md" className={classes.label} color="dimmed">
//                     Perfect for you, if you enjoy
//                 </Text>
//                 <Group spacing={7} mt={5}>
//                     {/*{link}*/}
//                     {features}
//                 </Group>
//             </Card.Section>
//
//             <Group mt="xs">
//                 <Button radius="md" style={{ flex: 1 }}>
//                     Show details
//                 </Button>
//                 <ActionIcon variant="default" radius="md" size={36}>
//                     {/*<IconHeart size={18} className={classes.like} stroke={1.5} />*/}
//                 </ActionIcon>
//             </Group>
//         </Card>
//     )
// }
