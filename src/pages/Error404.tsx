import { useRouteError, Link } from "react-router-dom";
import { Button, Container, Title, Text } from "@mantine/core";

const Error404Page = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <Container style={{ padding: 40, textAlign: "center" }}>
      <Title order={2} mb="md" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        404 — Page Not Found
      </Title>
      <Text size="lg" color="dimmed" mb="lg">
        Sorry, we couldn’t find the page you are looking for.
      </Text>
      <Text mb="xl" color="red" style={{ fontStyle: "italic" }}>
        {error?.statusText || error?.message || "An unknown error occurred."}
      </Text>
      <Button component={Link} to="/" variant="outline" size="md">
        Go to Home
      </Button>
    </Container>
  );
};

export default Error404Page;
