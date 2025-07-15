import {
  createStyles,
  Divider,
  Grid,
  Group,
  Image,
  Paper,
  PaperProps,
  rem,
  Stack,
  Text,
} from '@mantine/core';
import { ITestimonial } from "../types";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles(() => ({
  card: {
    position: 'relative',
    backdropFilter: `blur(16px) saturate(180%) !important`,
    backgroundColor: `rgba(255, 255, 255, 0.65) !important`,
    border: `1px solid rgba(0, 0, 0, 0.05) !important`,
    boxShadow: `0 8px 24px rgba(0, 0, 0, 0.05) !important`,
  },
  text: {
    color: `#1a1a1a !important`,
  },
  secondaryText: {
    color: `#4a4a4a !important`,
  },
}));

interface IProps extends PaperProps {
  data: ITestimonial;
}

const CampaignCard = ({ data, ...others }: IProps) => {
  const { classes } = useStyles();
  const {
    company,
    createdByImage,
    createdBy,
    testimonial,
    jobPosition,
  } = data;

  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Paper
      radius="md"
      className={classes.card}
      mx={36}
      style={{
        backgroundColor: "rgba(255,255,255,0.65)",
        backdropFilter: "blur(16px) saturate(180%)",
      }}
      {...others}
    >
      <Grid align="center" gutter="xl">
        {/* Image Column */}
        <Grid.Col
          md={5}
          order={isMobile ? 1 : 2}
          style={{ textAlign: 'center' }}
        >
          <Image
            src={createdByImage}
            height={320}
            fit="cover"
            radius="md"
            style={{
              objectFit: "cover",
              width: "100%",
              maxWidth: 400,
              margin: "0 auto",
            }}
          />
        </Grid.Col>

        {/* Text Column */}
        <Grid.Col md={7} order={isMobile ? 2 : 1} p="xl">
          <Stack spacing="sm">
            <Text size="xl" italic className={classes.text}>
              "{testimonial}"
            </Text>
            <Text fw={700} className={classes.text}>
              {createdBy}
            </Text>
            <Group spacing="xs">
              <Text size="md" fs="italic" className={classes.secondaryText}>
                {jobPosition}
              </Text>
              <Divider orientation="vertical" />
              <Text size="md" td="underline" className={classes.secondaryText}>
                {company}
              </Text>
            </Group>
          </Stack>
        </Grid.Col>
      </Grid>
    </Paper>
  );
};

export default CampaignCard;
