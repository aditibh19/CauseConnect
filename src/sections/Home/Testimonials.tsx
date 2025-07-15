import { Box, BoxProps, Text, TextProps, Title, TitleProps } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import testimonialsData from "../../data/Testimonials.json";
import TestimonialsCard from "../../components/TestimonialsCard";

interface IProps {
  boxProps?: BoxProps;
  titleProps?: TitleProps;
  subtitleProps?: TextProps;
}

const TestimonialsSection = ({
  boxProps = {},
  titleProps = {},
  subtitleProps = {},
}: IProps) => {
  const slides = testimonialsData?.data?.map((t) =>
    t ? (
      <Carousel.Slide key={t.id}>
        <TestimonialsCard data={t} />
      </Carousel.Slide>
    ) : null
  );

  return (
    <Box
      {...boxProps}
      sx={{
        paddingTop: 48,
        paddingBottom: 96,
        backgroundColor: "#f8f9fa", // Subtle light tone for separation
        ...boxProps?.sx,
      }}
    >
    <Title
  align="center"
  order={2}
  fw={800}
  {...titleProps} // Spread this BEFORE sx!
  sx={{
    fontSize: "32px",
    lineHeight: "1.4",
    marginBottom: 8,
    color: "#111111", // Now this will apply
    zIndex: 1,
    textShadow: "0 1px 2px rgba(0,0,0,0.05)",
    ...(titleProps?.sx || {}), // Optional: merge custom sx too
  }}
>
  What People Say About CauseConnect
</Title>


<Text
  align="center"
  size="md"
  fw={500}
  sx={{
    maxWidth: 600,
    margin: "0 auto 2rem",
    color: "#222222", // visible on light or transparent backgrounds
    zIndex: 1,
    textShadow: "0 1px 2px rgba(0,0,0,0.05)", // optional
    ...subtitleProps?.sx,
  }}
  {...subtitleProps}
>
  Empowering stories from real people who created real change.
</Text>


      <Carousel
        slideSize="85%"
        align="center"
        slideGap="lg"
        breakpoints={[{ maxWidth: "md", slideSize: "100%" }]}
        loop
        withControls
        withIndicators
      >
        {slides}
      </Carousel>
    </Box>
  );
};

export default TestimonialsSection;
