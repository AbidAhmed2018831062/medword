import { Box, Typography } from "@mui/material";
import React from "react";

function ServiceHeader() {
  return (
    <Box sx={{ backgroundColor: "#EAEAEA", padding: "40px 0px" }}>
      <Box sx={{ width: { xs: "90%", md: "70%" }, margin: "0px auto" }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", fontSize: { md: "3rem", xs: "1.65rem" } }}
        >
          An Instant Solution for All of{" "}
          <span /*style={{ color: "#30CC9B" }}*/>Your Medical Writing Needs</span>
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontSize: { xs: "75%", md: "100%" },
            color: "black",
            display: "block",
            lineHeight: 2,
            fontWeight: "bold",
            marginTop: "24px",
          }}
        >
          Medical Communication, Regulatory Writing, Educational Writing,
          Medical Journalism & Medical Product Description are just a few of our
          many medical writing services. We follow stringent quality control
          procedures to ensure all of our work is correct, thoroughly
          researched, and error-free.
        </Typography>
      </Box>
    </Box>
  );
}

export default ServiceHeader;
