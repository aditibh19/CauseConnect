import {
  Box,
  BoxProps,
  Paper,
  PaperProps,
  SimpleGrid,
  Text,
  TextProps,
  Title,
  TitleProps,
} from "@mantine/core";
import { TitleBadge } from "../../components";

const mockData = [
  {
    amount: "5B",
    description:
      "We’ve raised over 5 billion in donations. Help us reach even greater heights!",
  },
  {
    amount: "15K",
    description:
      "More than 15,000 campaigns successfully funded. Be part of the next one.",
  },
  {
    amount: "700",
    description:
      "700+ active campaigns are currently transforming lives. Fuel the next success story.",
  },
];

interface IStatsProps extends PaperProps {
  amount: string;
  description: string;
}

function Stats({ amount, description }: IStatsProps) {
  return (
    <Paper
      p="lg"
      shadow="md"
      radius="md"
      sx={{
        backdropFilter: `blur(16px) saturate(180%)`,
        backgroundColor: `rgba(255, 255, 255, 0.8)`,
        border: `1px solid rgba(209, 213, 219, 0.3)`,
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 6px 16px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <Title order={2} size="36px" mb="sm" c="dark">
        {amount}+
      </Title>
      <Text size="sm" c="dimmed">
        {description}
      </Text>
    </Paper>
  );
}

interface IProps {
  boxProps: BoxProps;
  titleProps?: TitleProps;
  subtitleProps?: TextProps;
}

const StatsSection = ({ boxProps, subtitleProps, titleProps }: IProps) => {
  const items = mockData.map((item) => (
    <Stats {...item} key={item.description} />
  ));

  return (
    <Box {...boxProps}>
      <Box mb="lg">
        <TitleBadge title="Make a Difference" />
        <Title
          {...titleProps}
          transform="capitalize"
          fw={800}
          sx={{ lineHeight: "1.2" }}
        >
          A Large Pool of Passionate Backers
        </Title>
        <Text
          {...subtitleProps}
          mt="sm"
          size="md"
          c="dimmed"
          sx={{ maxWidth: 600 }}
        >
          With CauseConnect, your campaign gets visibility among supporters who
          care deeply and are ready to act.
        </Text>
      </Box>

      <SimpleGrid
        cols={3}
        spacing="xl"
        breakpoints={[
          { maxWidth: "md", cols: 2, spacing: "lg" },
          { maxWidth: "sm", cols: 1, spacing: "md" },
        ]}
      >
        {items}
      </SimpleGrid>
    </Box>
  );
};

export default StatsSection;
