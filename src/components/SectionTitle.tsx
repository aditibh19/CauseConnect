import { Box, BoxProps, Text, Title, Stack } from "@mantine/core";
import { TitleBadge } from "./index";

interface IProps extends BoxProps {
  title: string;
  description?: string;
  extra?: string;
}

const SectionTitle = ({ title, description, extra, ...props }: IProps) => {
  return (
    <Box {...props}>
      <Stack spacing={4}>
        <TitleBadge title={title} />
        {description && (
          <Title order={2} mt="xs">
            {description}
          </Title>
        )}
        {extra && <Text size="md" color="dimmed">{extra}</Text>}
      </Stack>
    </Box>
  );
};

export default SectionTitle;
