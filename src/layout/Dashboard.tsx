import { AppShell, useMantineTheme } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { AppNavbar } from "../components";

const DashboardLayout = () => {
  const theme = useMantineTheme();

  return (
    <AppShell
      padding="md"
      header={<AppNavbar />}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      layout="default"
      styles={{
        main: {
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : "#F3F2E7",
          minHeight: "100vh",
        },
      }}
    >
      <Outlet />
    </AppShell>
  );
};

export default DashboardLayout;
