import { useRouteError, Link } from "react-router-dom";
import { Button, Container, Title, Text } from "@mantine/core";

const DetailError404Page = () => {
  const error: any = useRouteError();

  return (
    <Container style={{ padding: 40, textAlign: "center" }}>
      <Title order={2} mb="md" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        Oops! Campaign Not Found (404)
      </Title>
      <Text size="lg" color="dimmed" mb="lg">
        Sorry, we couldn’t find the campaign you’re looking for.
      </Text>
      <Text mb="xl" color="red" style={{ fontStyle: "italic" }}>
        {error?.statusText || error?.message || "An unknown error occurred."}
      </Text>
      <Button component={Link} to="/" variant="outline" size="md">
        Back to Home
      </Button>
    </Container>
  );
};

export default DetailError404Page;
