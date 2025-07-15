import {
  Box,
  Button,
  Card,
  Container,
  createStyles,
  Flex,
  Group,
  Paper,
  PaperProps,
  rem,
  SimpleGrid,
  Stack,
  Text,
  Title,
  TitleProps,
  useMantineTheme,
} from "@mantine/core";
import {
  IconArrowDownRight,
  IconArrowUpRight,
  IconFunction,
  IconPlus,
  IconReceipt2,
  IconTrophy,
} from "@tabler/icons-react";
import { CampaignsTable, DonatorsTable, YearlyDonationChart } from "../components";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  root: {
    padding: `calc(${theme.spacing.xl} * 1.5)`,
  },

  value: {
    fontSize: rem(24),
    fontWeight: 700,
    lineHeight: 1,
    fontFamily: "'Montserrat', sans-serif",
  },

  diff: {
    lineHeight: 1,
    display: "flex",
    alignItems: "center",
    fontFamily: "'Montserrat', sans-serif",
  },

  icon: {
    color: theme.colorScheme === "dark" ? theme.white : theme.colors.gray[7],
  },

  title: {
    fontWeight: 700,
    textTransform: "uppercase",
    fontFamily: "'Montserrat', sans-serif",
  },
}));

const DashboardPage = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  const paperProps: PaperProps = {
    p: "md",
    shadow: "sm",
    radius: "md",
    sx: {
      backgroundColor: theme.white,
      fontFamily: "'Montserrat', sans-serif",
    },
  };

  const subTitleProps: TitleProps = {
    size: 18,
    mb: "sm",
    sx: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 600,
    },
  };

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Box>
        <Container fluid my="xl">
          <Stack spacing="xl">
            <Title
              order={3}
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: 28,
              }}
            >
              Good evening, Aditi Bhalla
            </Title>

            {/* Metrics Cards */}
            <SimpleGrid
              cols={4}
              breakpoints={[
                { maxWidth: "md", cols: 2, spacing: "md" },
                { maxWidth: "sm", cols: 1, spacing: "sm" },
              ]}
            >
              {[
                {
                  title: "Total Donations",
                  value: "$100,202.10",
                  diff: "10%",
                  color: "teal",
                  icon: IconReceipt2,
                  trendIcon: IconArrowUpRight,
                  desc: "Compared to previous month",
                },
                {
                  title: "Today's Donations",
                  value: "$1,202.10",
                  diff: "30.1%",
                  color: "red",
                  icon: IconReceipt2,
                  trendIcon: IconArrowDownRight,
                  desc: "Compared to yesterday",
                },
                {
                  title: "Avg Donations per Campaign",
                  value: "34%",
                  diff: "4.2%",
                  color: "teal",
                  icon: IconFunction,
                  trendIcon: IconArrowUpRight,
                  desc: "Compared to previous month",
                },
                {
                  title: "Active Campaigns",
                  value: "13",
                  diff: "11.1%",
                  color: "teal",
                  icon: IconTrophy,
                  trendIcon: IconArrowUpRight,
                  desc: "Compared to previous month",
                },
              ].map((metric, index) => (
                <Paper key={index} {...paperProps}>
                  <Group position="apart">
                    <Text size="xs" color="dimmed" className={classes.title}>
                      {metric.title}
                    </Text>
                    <metric.icon className={classes.icon} size="1.4rem" stroke={1.5} />
                  </Group>
                  <Group align="flex-end" spacing="xs" mt={25}>
                    <Text className={classes.value}>{metric.value}</Text>
                    <Text color={metric.color} fz="sm" fw={500} className={classes.diff}>
                      <span>{metric.diff}</span>
                      <metric.trendIcon size="1rem" stroke={1.5} />
                    </Text>
                  </Group>
                  <Text fz="xs" c="dimmed" mt={7} style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {metric.desc}
                  </Text>
                </Paper>
              ))}
            </SimpleGrid>

            {/* Campaign Management */}
            <Paper {...paperProps}>
              <Card.Section mb="lg">
                <Flex align="center" justify="space-between">
                  <Box>
                    <Title {...subTitleProps}>Campaigns</Title>
                    <Text size="sm" color="dimmed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      Let&apos;s manage your campaigns
                    </Text>
                  </Box>
                  <Button
                    leftIcon={<IconPlus size={18} />}
                    component={Link}
                    to="/create-campaign"
                  >
                    Create a Campaign
                  </Button>
                </Flex>
              </Card.Section>
              <Card.Section>
                <CampaignsTable />
              </Card.Section>
            </Paper>

            {/* Donators Table */}
            <Paper {...paperProps}>
              <Card.Section>
                <Title {...subTitleProps}>Top Contributors</Title>
                <DonatorsTable />
              </Card.Section>
            </Paper>

            {/* Donations Chart */}
            <Paper {...paperProps}>
              <Title {...subTitleProps}>Donations per Category</Title>
              <YearlyDonationChart />
            </Paper>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default DashboardPage;
