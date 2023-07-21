import { Box } from "@mui/material";
import React from "react";
import Navbar from "../Common/NavBar";
import UpdatedFooter from "../Common/UpdatedFooter";
import ChooseUs from "../Service/WhyUs";
import ContactHeader from "./ContactHeader";
import FAQPage from "./FAQPage";
function Contact() {
  return (
    <Box>
      <Navbar page="contact" />
      <ContactHeader />
      <FAQPage />
      <ChooseUs />
      <UpdatedFooter />
    </Box>
  );
}

export default Contact;
