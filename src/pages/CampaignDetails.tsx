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
} from "@mantine/core";
import campaignsData from "../data/Campaigns.json";
import { CampaignCard } from "../components";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "@mantine/hooks";

const CampaignsPage = (): JSX.Element => {
  const matchesMobile = useMediaQuery("(max-width: 768px)");

  const boxProps: BoxProps = {
    mt: matchesMobile ? 4 : 24,
    mb: matchesMobile ? 4 : 48,
    py: matchesMobile ? 16 : 24,
  };

  const titleProps: TitleProps = {
    size: 32,
    weight: 700,
    mb: "lg",
    transform: "capitalize",
    sx: { lineHeight: "40px" },
  };

  const items = campaignsData.data.map((c) => (
    <CampaignCard key={c.id} data={c} showActions={true} />
  ));

  return (
    <>
      <Helmet>
        <title>Discover campaigns to fund</title>
      </Helmet>

      <Box>
        <Container size="lg">
          <Stack>
            {/* Page Heading */}
            <Box {...boxProps}>
              <Title {...titleProps} align="center">
                Discover campaigns to fund
              </Title>
            </Box>

            {/* Filter Controls */}
            <Flex
              justify="space-between"
              gap={{ base: "sm", sm: "lg" }}
              direction={{ base: "column-reverse", sm: "row" }}
              mb="md"
            >
              <TextInput
                placeholder="Search campaigns..."
                sx={{ width: matchesMobile ? "100%" : 500 }}
              />
              <Flex
                align="center"
                gap="sm"
                justify={{ base: "space-between", sm: "flex-start" }}
                wrap="wrap"
              >
                <Select
                  placeholder="Campaigns in"
                  defaultValue=""
                  data={[
                    { value: "10", label: "Show: 10" },
                    { value: "25", label: "Show: 25" },
                    { value: "50", label: "Show: 50" },
                    { value: "100", label: "Show: 100" },
                  ]}
                />
                <Select
                  placeholder="Explore"
                  defaultValue="featured"
                  data={[
                    { value: "featured", label: "Sort by: Featured" },
                    { value: "popular", label: "Sort by: Popular" },
                    { value: "latest", label: "Sort by: Latest" }, // ✅ Fixed typo here
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

export default CampaignsPage;
