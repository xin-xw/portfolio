import { Grid } from '@mantine/core';
import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard';

const Explorify = {
    title: 'EXPLORIFY',
    description: "Explorify aims to unleash the potential of Spotify's Recommendation API. " +
        'Provided your favorite songs along with specific track attributes such as: tempo, valence, energy, ' +
        'popularity, and more - the application aims to recommend you other similar tracks.',
    project_icon: '/projects/explorify.png',
    project_link: 'https://github.com/xinwang-git/explorify',
    avatars: [
        { label: 'Xin', url: 'https://media.licdn.com/dms/image/D5603AQHEw1xSgOMyDg/profile-displayphoto-shrink_100_100/0/1669740190423?e=1680134400&v=beta&t=J1gRthJupwhd_t8SVO2vQuvX6nxQdhGhymoVxxMGnj0' },
    ],
    tags: [
        { label: 'Express.js' },
        { label: 'React.js' },
        { label: 'Node.js' },
        { label: 'AWS EC2' },
        { label: 'PM2' },
        { label: 'CI/CD' },

    ],
    isSoloProject: true,
};

const menttobe = {
    title: 'MENT-TO-BE',
    description: '\n' +
        'An application that aims to match computer science students with industry professionals. ' +
        'Our goal for this platform was to provide an open space for students to gain more clarity and guidance ' +
        'towards their future. Students can gain more information about specific fields within the industry ' +
        'such as: front-end, back-end, full stack, machine learning, and more! ' +
        'This is also an open space for any career advice as well as any questions they may have throughout their' +
        ' job/internship recruiting process.',
    project_icon: '/projects/menttobe.png',
    project_link: 'https://github.com/xinwang-git/ment-to-be',
    avatars: [
        { label: 'Xin', url: 'https://media.licdn.com/dms/image/D5603AQHEw1xSgOMyDg/profile-displayphoto-shrink_100_100/0/1669740190423?e=1680134400&v=beta&t=J1gRthJupwhd_t8SVO2vQuvX6nxQdhGhymoVxxMGnj0' },
        { label: 'Yenna', url: 'https://media.licdn.com/dms/image/D5603AQGvJVBc1csG0A/profile-displayphoto-shrink_100_100/0/1670662324636?e=1680134400&v=beta&t=SczQtEA0-iTZ1tPlOmQSO2k5cWrrPE4hZ2dpHPibG7c' },
        { label: 'Michelle', url: 'https://media.licdn.com/dms/image/C5603AQGP0il8_r_4sQ/profile-displayphoto-shrink_100_100/0/1655165779507?e=1680134400&v=beta&t=9JqleaET3QNMrsAx_j1k6CIzWfur184um-4EmfGmsw0' },
        { label: 'Jeanette', url: 'https://media.licdn.com/dms/image/D5603AQHzs-wUnJj3KQ/profile-displayphoto-shrink_100_100/0/1665183613763?e=1680134400&v=beta&t=3CQrIQqVI-8IZunnngTqsxi5e2HWGZ8XuZk861-96WE' },
    ],
    tags: [
        { label: 'React.js' },
        { label: 'Express.js' },
        { label: 'Node.js' },
        { label: 'MongoDB' },
        { label: 'ChakraUI' },
    ],
    isSoloProject: false,
};

const Spotability = {
    title: 'SPOTABILITY',
    description: '\n' +
                'Ideated with 3 other colleagues a dating platform based on similarities detected through ' +
            'each other\'s music taste. Our application received 2 awards: Best Valentine\'s ' +
            'Day Hack and Best Design (UI) in competition against 160+ other participants at ' +
            'Binghamton University’s HackBU 2022.',
    project_icon: '/projects/spotability.png',
    project_link: 'https://github.com/xinwang-git/Spotability',
    avatars: [
        { label: 'Xin', url: 'https://media.licdn.com/dms/image/D5603AQHEw1xSgOMyDg/profile-displayphoto-shrink_100_100/0/1669740190423?e=1680134400&v=beta&t=J1gRthJupwhd_t8SVO2vQuvX6nxQdhGhymoVxxMGnj0' },
        { label: 'Yuteng', url: 'https://media.licdn.com/dms/image/D5603AQHjcFqZI8oETw/profile-displayphoto-shrink_100_100/0/1643232493010?e=1680134400&v=beta&t=iLn70M-YoETvXgvffRnr9JdOPMERP_YYvyaY5_nm4yM' },
        { label: 'Michelle', url: 'https://media.licdn.com/dms/image/C5603AQGP0il8_r_4sQ/profile-displayphoto-shrink_100_100/0/1655165779507?e=1680134400&v=beta&t=9JqleaET3QNMrsAx_j1k6CIzWfur184um-4EmfGmsw0' },
        { label: 'Jeng-Rung', url: 'https://media.licdn.com/dms/image/C5603AQGwg_dYxNqexg/profile-displayphoto-shrink_100_100/0/1645077815460?e=1680134400&v=beta&t=P1rE6zwjlkkh6aA8d9JrI399XhUr4WtxmCd0vbB8cQ8' },
    ],
    tags: [
        { label: 'React.js' },
        { label: 'Node.js' },
        { label: 'Django' },
        { label: 'MongoDB' },
        { label: 'ChakraUI' },
        { label: 'Python3' },
    ],
    isSoloProject: false,
};

const splice = {
    title: '$PLICE',
    description: 'Splice was envisioned through yearning for a way that can easily split the bill when dining out with friends or family. ' +
        'Users can select the restaurant they are dining at and the menu for the respective restaurant will display. ' +
        'Each user will select the food they ordered and pass on the device to the next person. ' +
        'At the end, individualized bills will be generated for each user.',
    project_icon: '/projects/splice.png',
    project_link: 'https://github.com/xinwang-git/splice',
    avatars: [
        { label: 'Xin', url: 'https://media.licdn.com/dms/image/D5603AQHEw1xSgOMyDg/profile-displayphoto-shrink_100_100/0/1669740190423?e=1680134400&v=beta&t=J1gRthJupwhd_t8SVO2vQuvX6nxQdhGhymoVxxMGnj0' },
        { label: 'Jeanette', url: 'https://media.licdn.com/dms/image/D5603AQHzs-wUnJj3KQ/profile-displayphoto-shrink_100_100/0/1665183613763?e=1680134400&v=beta&t=3CQrIQqVI-8IZunnngTqsxi5e2HWGZ8XuZk861-96WE' },
        { label: 'Hongan', url: null },
    ],
    tags: [
        { label: 'C++' },
        { label: 'Google Test Framework' },
        { label: 'CI/CD' },
        { label: 'Prototype' },
        { label: 'Composite' },
    ],
    isSoloProject: false,
};

export default function Projects() {
    return (
        <Grid gutter="lg">
            <Grid.Col sm={12}>
                <ProjectCard {...Explorify} />
            </Grid.Col>
            <Grid.Col sm={12}>
                <ProjectCard {...menttobe} />
            </Grid.Col>
            <Grid.Col sm={12}>
                <ProjectCard {...Spotability} />
            </Grid.Col>
            <Grid.Col sm={12}>
                <ProjectCard {...splice} />
            </Grid.Col>
        </Grid>

    );
}
