import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

export function ColorSchemeToggle() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    return (
        <Group position="center">
            <ActionIcon
              onClick={() => toggleColorScheme()}
              size="xl"
              sx={(theme) => ({
                    color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : '#000',
                })}
            >
                {colorScheme === 'dark' ? (
                    <IconSun size={20} stroke={2} />
                ) : (
                    <IconMoonStars size={20} stroke={2} />
                )}
            </ActionIcon>
        </Group>
    );
}
