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
} from "@mantine/core";
import TitleBadge from 'components/TitleBadge'; // ✅ Fixed absolute import

// ... rest of your code remains the same

interface IProps {
  boxProps?: BoxProps;
  titleProps?: TitleProps;
  subtitleProps?: TextProps;
}

const AboutUsSection = ({ boxProps, titleProps, subtitleProps }: IProps) => {
  return (
    <Box {...boxProps}>
      <Grid gutter="xl" align="center">
        {/* Left Side: Image */}
        <Grid.Col md={6} sm={12}>
          <Image
  src="/hero2.avif"
  alt="About us"
  radius="md"
  fit="cover"
/>

        </Grid.Col>

        {/* Right Side: Text */}
        <Grid.Col md={6} sm={12}>
          <Stack spacing="sm">
            <TitleBadge title="Who We Are" />
            <Title
              {...titleProps}
              order={2}
              sx={{ fontFamily: "Quicksand, sans-serif", fontWeight: 600 }}
            >
              Make a Difference with CauseConnect
            </Title>
            <Text {...subtitleProps} size="md" color="dimmed">
              At CauseConnect, we believe in the power of collective generosity.
              Whether you're supporting personal dreams or social causes,
              you're helping build a better tomorrow.
            </Text>

            <Title
              order={4}
              mt="md"
              sx={{ fontFamily: "Quicksand, sans-serif", fontWeight: 600 }}
            >
              What to Expect
            </Title>
            <Text size="sm" color="gray.5">
              - Transparent and secure fundraising process. <br />
              - A global community ready to support your cause. <br />
              - Tools to track and share your campaign easily. <br />
              - 24/7 support and real human assistance.
            </Text>
          </Stack>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default AboutUsSection;
