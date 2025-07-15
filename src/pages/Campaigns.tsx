import {
  Box,
  BoxProps,
  Container,
  Flex,
  Select,
  SimpleGrid,
  Stack,
  TextInput,
  Title,
  TitleProps,
  Text,
  TextProps,
} from "@mantine/core";
import campaignsData from "../data/Campaigns.json";
import { CampaignCard } from "../components";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "@mantine/hooks";

interface SectionProps {
  boxProps?: BoxProps;
  titleProps?: TitleProps;
  subtitleProps?: TextProps;
}

const CampaignsSection = ({
  boxProps,
  titleProps,
  subtitleProps,
}: SectionProps): JSX.Element => {
  const matchesMobile = useMediaQuery("(max-width: 768px)");

  const mergedBoxProps: BoxProps = {
    mt: matchesMobile ? 4 : 24,
    mb: matchesMobile ? 4 : 48,
    py: matchesMobile ? 16 : 24,
    ...boxProps,
  };

  const mergedTitleProps: TitleProps = {
    size: matchesMobile ? 28 : 40,
    weight: 800,
    mb: "xs",
    align: "center",
    sx: {
      fontFamily: "Montserrat, sans-serif",
      letterSpacing: "-0.5px",
      lineHeight: 1.2,
    },
    ...titleProps,
  };

  const mergedSubtitleProps: TextProps = {
    size: matchesMobile ? 16 : 18,
    mb: "xl",
    color: "dimmed",
    align: "center",
    sx: {
      fontFamily: "Montserrat, sans-serif",
      maxWidth: 640,
      marginInline: "auto",
    },
    ...subtitleProps,
  };

  const items = campaignsData.data.map((c) => (
    <CampaignCard key={c.id} data={c} showActions />
  ));

  return (
    <>
      <Helmet>
        <title>Discover campaigns to fund</title>
      </Helmet>
      <Box {...mergedBoxProps}>
        <Container size="lg">
          <Stack>
            <Title {...mergedTitleProps}>Discover campaigns to fund</Title>
            <Text {...mergedSubtitleProps}>
              Explore impactful causes and contribute to projects that matter.
            </Text>

            {/* Filters */}
            <Flex
              justify="space-between"
              gap={{ base: "sm", sm: "lg" }}
              direction={{ base: "column-reverse", sm: "row" }}
              mb="md"
            >
              <TextInput
                placeholder="🔍 Search campaigns..."
                variant="filled"
                radius="md"
                size="md"
                sx={{ width: matchesMobile ? "100%" : 500 }}
              />

              <Flex
                align="center"
                gap="sm"
                wrap="wrap"
                justify={{ base: "space-between", sm: "flex-start" }}
              >
                <Select
                  radius="md"
                  size="md"
                  variant="default"
                  placeholder="Show: 25"
                  defaultValue="25"
                  data={[
                    { value: "10", label: "Show: 10" },
                    { value: "25", label: "Show: 25" },
                    { value: "50", label: "Show: 50" },
                    { value: "100", label: "Show: 100" },
                  ]}
                />
                <Select
                  radius="md"
                  size="md"
                  variant="default"
                  placeholder="Sort by"
                  defaultValue="featured"
                  data={[
                    { value: "featured", label: "Sort by: Featured" },
                    { value: "popular", label: "Sort by: Popular" },
                    { value: "latest", label: "Sort by: Latest" },
                  ]}
                />
              </Flex>
            </Flex>

            {/* Campaign Grid */}
            <SimpleGrid
              cols={3}
              spacing="lg"
              breakpoints={[
                { maxWidth: "md", cols: 2, spacing: "md" },
                { maxWidth: "sm", cols: 1, spacing: "sm" },
              ]}
            >
              {items}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default CampaignsSection;
