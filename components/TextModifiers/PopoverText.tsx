import { Popover, Text } from '@mantine/core';
import useStyles from './PopoverText.styles';

export default function PopoverText({ text, target, dropdown } : any) {
    const { classes } = useStyles();
    return (
        <Popover width="auto" shadow="md">
            {text}
            <Popover.Target>
                <Text className={classes.text} span>
                    {target}
                </Text>
            </Popover.Target>
            <Popover.Dropdown>
                <Text>
                    {dropdown}
                </Text>
            </Popover.Dropdown>
        </Popover>
);
}
