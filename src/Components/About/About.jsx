import { Box } from "@mui/material";
import React from "react";
import Navbar from "../Common/NavBar";
import UpdatedFooter from "../Common/UpdatedFooter";
import ContactUs from "../Home/ContactUs";
import AboutHeader from "./AboutHeader";
import AboutMed from "./AboutMed";
import AboutProjects from "./AboutProjects";
import OurTeam from "./OurTeam";

function About() {
  return (
    <Box>
      <Navbar page="about" />
      <AboutHeader />
      <AboutMed />
      <AboutProjects />
      <OurTeam />
      <ContactUs />
      <UpdatedFooter />
    </Box>
  );
}

export default About;
