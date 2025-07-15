// src/sections/Home/About/AboutUsSection.tsx

import {
  Box,
  BoxProps,
  Grid,
  Image,
  Stack,
  Text,
  TextProps,
  Title,
  TitleProps,
  createStyles,
  Button,
} from "@mantine/core";
import TitleBadge from "components/TitleBadge";
import aboutImage from "assets/img/about-us.jpg"; // Ensure this path is correct

const useStyles = createStyles((theme) => ({
  container: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },
  image: {
    borderRadius: theme.radius.md,
    objectFit: "cover",
    boxShadow: theme.shadows.md,
  },
  heading: {
    fontFamily: `'Montserrat', sans-serif`,
    fontWeight: 700,
    fontSize: 36,
    lineHeight: 1.4,
    color: theme.white,
  },
  subheading: {
    fontSize: 18,
    lineHeight: 1.6,
    color: theme.colorScheme === "dark" ? theme.colors.gray[3] : theme.colors.gray[7], // lighter gray for dark mode, darker for light mode
    marginTop: theme.spacing.sm,
    fontFamily: `'Quicksand', sans-serif`,
  },
  badge: {
    marginBottom: theme.spacing.md,
  },
}));

interface IProps {
  boxProps?: BoxProps;
  titleProps?: TitleProps;
  subtitleProps?: TextProps;
}

const AboutUsSection = ({ boxProps, titleProps, subtitleProps }: IProps) => {
  const { classes, theme } = useStyles();

  return (
    <Box {...boxProps} className={classes.container}>
      <Grid gutter="xl" align="center">
        <Grid.Col sm={12} md={6}>
          <Image
            src={aboutImage}
            alt="About us"
            height={400}
            width="100%"
            className={classes.image}
          />
        </Grid.Col>

        <Grid.Col sm={12} md={6}>
          <Stack>
            <TitleBadge title="About CauseConnect" className={classes.badge} />
            <Title className={classes.heading} {...titleProps}>
              We’re on a mission to help people fund what matters.
            </Title>

            <Text className={classes.subheading} {...subtitleProps}>
              CauseConnect empowers individuals and organizations to launch impactful fundraising campaigns. From personal causes to global initiatives, we provide tools, support, and a caring community to help bring your vision to life.
            </Text>
            <Text className={classes.subheading}>
              Whether you’re just getting started or scaling your mission, we’re here to connect your cause to the world.
            </Text>

            {/* What to Expect */}
            <Title order={3} className={classes.heading} mt="xl">
              What to Expect
            </Title>
            <Text className={classes.subheading} sx={{ color: theme.colors.gray[2] }}>
              - Transparent and secure fundraising process.<br />
              - A global community ready to support your cause.<br />
              - Tools to track and share your campaign easily.<br />
              - 24/7 support and real human assistance.
            </Text>

            {/* Make an Impact Button */}
            <Button
              mt="xl"
              size="lg"
              radius="xl"
              variant="gradient"
              gradient={{ from: "orange", to: "red" }}
              sx={{
                fontWeight: 700,
                color: theme.white, // ensure text is readable on button
                boxShadow: "0 4px 12px rgba(255, 100, 0, 0.6)",
              }}
            >
              Make an Impact
            </Button>
          </Stack>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default AboutUsSection;
