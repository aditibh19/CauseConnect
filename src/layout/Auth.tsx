import { Outlet } from "react-router-dom";
import { Center, Container, Paper, Stack, Title } from "@mantine/core";

const AuthLayout = () => {
  return (
    <Center style={{ minHeight: "100vh", backgroundColor: "#f9f9f9" }}>
      <Container size={420}>
        <Paper shadow="md" radius="md" p="xl" withBorder>
          <Stack spacing="md">
            <Title align="center" order={2}>
              Welcome to CauseConnect
            </Title>

            {/* Outlet renders child routes like Login/Signup */}
            <Outlet />
          </Stack>
        </Paper>
      </Container>
    </Center>
  );
};

export default AuthLayout;
