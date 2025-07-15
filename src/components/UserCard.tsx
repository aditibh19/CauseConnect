import { Avatar, Button, Flex, Paper, PaperProps, Stack, Text } from '@mantine/core';
import { IconSend } from '@tabler/icons-react';
import userData from '../data/User.json';

type IProps = PaperProps;

const UserCard = ({ ...others }: IProps) => {
  return (
    <Paper p="md" radius="md" shadow="sm" withBorder {...others}>
      <Flex align="center" gap="lg" direction={{ base: 'column', sm: 'row' }}>
        <Avatar src={userData.avatar} size={120} radius={120} />
        <Stack spacing={4} align="flex-start">
          <Text fz="lg" fw={600}>
            {userData.name}
          </Text>
          <Text c="dimmed" fz="sm">
            {userData.email} • {userData.job}
          </Text>
          <Button
            variant="light"
            leftIcon={<IconSend size={18} />}
            mt="sm"
            radius="md"
          >
            Send message
          </Button>
        </Stack>
      </Flex>
    </Paper>
  );
};

export default UserCard;
