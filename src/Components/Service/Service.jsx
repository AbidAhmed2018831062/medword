import { Box } from "@mui/material";
import React from "react";
import Footer from "../Common/Footer";
import Navbar from "../Common/NavBar";
import ContactUs from "../Home/ContactUs";
import Image from "./Image";
import InstantSolution from "./InstantSolution";
import ServiceHeader from "./ServiceHeader";
import Services from "./Services";
import ChooseUs from "./WhyUs";
import Blogs from "./Blogs";
import ServiceSecondHeader from "./ServiceSecondHeader";
import UpdatedFooter from "../Common/UpdatedFooter";

function Service() {
  return (
    <Box>
      <Navbar page="services" />
      {/* <ServiceHeader /> */}
      <ServiceSecondHeader/>
      <Image />
      <Box sx={{ height: "100px", backgroundColor: "#EAEAEA" }}></Box>
      {/* <InstantSolution /> */}
      <Blogs/>
      <Services />
      <ChooseUs />
      <ContactUs />
      <UpdatedFooter />
    </Box>
  );
}

export default Service;
