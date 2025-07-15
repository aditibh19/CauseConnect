import {
  Badge,
  Card,
  createStyles,
  Flex,
  getStylesRef,
  Group,
  Image,
  PaperProps,
  Progress,
  Stack,
  Text,
} from "@mantine/core";
import { ICampaign } from "../types";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    padding: theme.spacing.lg,
    backdropFilter: `blur(16px) saturate(180%)`,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : `rgba(255, 255, 255, 0.75)`,
    border: `2px solid rgba(209, 213, 219, 0.3)`,
    transition: "all 150ms ease",

    [`&:hover .${getStylesRef("image")}`]: {
      transform: "scale(1.03)",
    },

    "&:hover": {
      boxShadow: theme.shadows.xl,
      border: `2px solid ${theme.colors.primary[7]}`,
      backgroundColor: theme.colors.primary[0],
    },
  },

  title: {
    marginTop: theme.spacing.md,
    fontWeight: 600,
    lineHeight: 1.3,
  },

  image: {
    ref: getStylesRef("image"),
    transition: "transform 200ms ease",
  },

  raised: {
    color: theme.colors.orange[7],
    fontWeight: 600,
  },

  donors: {
    color: theme.colors.teal[7],
    fontWeight: 600,
  },
}));

interface IProps extends PaperProps {
  data: ICampaign;
  showActions?: boolean;
}

const CampaignCard = ({ data, showActions }: IProps) => {
  const { classes, theme } = useStyles();
  const {
    mainImage,
    id,
    title,
    amountRaised,
    daysLeft,
    contributors,
    description,
    category,
    country,
  } = data;

  const linkProps = {
    to: `/campaigns/${id}`,
    rel: "noopener noreferrer",
  };

  return (
    <Card
      radius="sm"
      shadow="md"
      ml="xs"
      component={Link}
      {...linkProps}
      className={classes.card}
    >
      <Card.Section>
        <Image
          src={mainImage}
          height={280}
          className={classes.image}
          alt={title}
        />
      </Card.Section>

      <Card.Section pt={0} px="md" pb="md">
        <Stack spacing="xs">
          <Text className={classes.title} lineClamp={1} size="lg">
            {title}
          </Text>

          <Group position="apart">
            <Text size="xs" transform="uppercase" color="dimmed" fw={700}>
              {country}
            </Text>
            <Badge
              variant="filled"
              color="secondary"
              radius="sm"
              size="sm"
              sx={{ textTransform: "capitalize" }}
            >
              {category}
            </Badge>
          </Group>

          {showActions && (
            <Text size="sm" lineClamp={3} color="dimmed">
              {description}
            </Text>
          )}

          <Progress value={daysLeft} radius="sm" size="sm" color="primary" />

          <Flex justify="space-between" align="center">
            <Text className={classes.raised}>{amountRaised} raised</Text>
            <Text className={classes.donors}>{contributors} donations</Text>
          </Flex>
        </Stack>
      </Card.Section>
    </Card>
  );
};

export default CampaignCard;
