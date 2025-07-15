import {
  Avatar,
  Box,
  BoxProps,
  Button,
  Flex,
  Image,
  Progress,
  Stack,
  Text,
  TextProps,
  ThemeIcon,
  Title,
  TitleProps,
} from "@mantine/core";
import { IconUsers, IconWorld } from "@tabler/icons-react";
import { TitleBadge } from "../../components";
import { useMediaQuery } from "@mantine/hooks";

interface IProps {
  boxProps: BoxProps;
  titleProps?: TitleProps;
  subtitleProps?: TextProps;
}

const JoinUsSection = ({ boxProps, subtitleProps }: IProps) => {
  const matchesMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Box {...boxProps}>
      <Flex
        gap={{ base: "lg", sm: "xl" }}
        direction={{ base: "column-reverse", md: "row" }}
        align="center"
        justify="space-between"
      >
        {/* Left Textual Content */}
        <Stack spacing="lg" maw={matchesMobile ? '100%' : 500}>
          <TitleBadge title="Open Partnership – Start Your Journey" />
          <Text {...subtitleProps} size="lg" fw={600}>
            Almost is never enough. Make the leap — join CauseConnect today.
          </Text>

          {/* Feature 1 */}
          <Flex gap="sm" align="flex-start">
            <ThemeIcon size="xl" color="secondary" variant="light" radius="xl">
              <IconWorld />
            </ThemeIcon>
            <Box>
              <Text fw={700}>Global Community</Text>
              <Text size="sm" c="dimmed">
                Reach a network of changemakers to build something greater together.
              </Text>
            </Box>
          </Flex>

          {/* Feature 2 */}
          <Flex gap="sm" align="flex-start">
            <ThemeIcon size="xl" color="secondary" variant="light" radius="xl">
              <IconUsers />
            </ThemeIcon>
            <Box>
              <Text fw={700}>Crowdfunding Access</Text>
              <Text size="sm" c="dimmed">
                Simple, effective fundraising designed for first-time founders and dreamers.
              </Text>
            </Box>
          </Flex>

          {/* Avatars */}
          <Avatar.Group spacing="sm">
            <Avatar
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=880&q=80"
              radius="xl"
            />
            <Avatar
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=500&q=60"
              radius="xl"
            />
            <Avatar
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=60"
              radius="xl"
            />
            <Avatar
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=500&q=60"
              radius="xl"
            />
            <Avatar radius="xl">+5</Avatar>
          </Avatar.Group>

          {/* Progress and CTA */}
          <Progress value={50} color="secondary" radius="xl" size="md" />
          <Button size="md" radius="xl" color="secondary" mt="sm">
            Join Us
          </Button>
        </Stack>

        {/* Right Image */}
        <Box mx={matchesMobile ? 0 : "auto"}>
          <Image
            src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?auto=format&fit=crop&w=1170&q=80"
            width={matchesMobile ? "100%" : 500}
            height={matchesMobile ? 300 : 400}
            radius="md"
            fit="cover"
            alt="Join CauseConnect"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default JoinUsSection;
