import { LandingFooter, LandingNavbar } from "../components";
import { Box } from "@mantine/core";
import footerLinksData from "../data/Footer.json";
import { Outlet } from "react-router-dom";

interface IProps {
  compressedNav?: boolean;
}

const PublicLayout = ({ compressedNav }: IProps) => {
  return (
    <Box
      style={{
        position: "relative",
        zIndex: 0,
        paddingTop: compressedNav ? 50 : 70, // Adjust for header height
      }}
    >
      {/* Transparent Navbar */}
      <LandingNavbar compressed={compressedNav} />

      {/* Routed Page Content */}
      <Box component="main">
        <Outlet />
      </Box>

      {/* Footer */}
      <LandingFooter data={footerLinksData.data} />
    </Box>
  );
};

export default PublicLayout;
