import { Text } from '@mantine/core';
import React from 'react';
import Link from 'next/link';
import useStyles from './TextLink.styles';

export default function TextLink({ link, name } : any) {
    const { classes } = useStyles();
    return (
        <Text component="a" href={link} className={classes.text} target="_blank">
            {name}
        </Text>

    );
}
