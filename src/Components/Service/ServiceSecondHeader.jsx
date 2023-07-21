import { Box, Typography } from "@mui/material";
import React from "react";
import video from "../../assets/images/serviceback.mp4";
import "../About/landingpage.css";

function ServiceSecondHeader() {
  return (
    <Box sx={{ margin: "0px",alignItems:'center',verticalAlign: "middle" }}>
      <div className="landingpage">
        <video src={video} autoPlay muted loop className="video-bg" />
        <div className="bg-overlay">
          <Box
            sx={{
              width: { xs: "90%", md: "75%" },
              color: "white",
              position:"relative",
              top:"33%",
              margin:"0px auto",
           

              textAlign: { xs: "center", md: "start" },
            }}
          >
          <Typography
          variant="h3"
          sx={{ fontWeight: "bold", textAlign:"center",display:"block",fontSize: { md: "3rem", xs: "1.65rem" },   width:{xs:"100%",md:"95%"},
          margin:"0px auto", }}
        >
          An Instant Solution for All of{" "}
          <span /*style={{ color: "#30CC9B" }}*/>Your Medical Writing Needs</span>
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontSize: { xs: "95%", md: "110%" },
            width:{xs:"100%",md:"95%"},
            textAlign:"center",
            margin:"0px auto",
            color: "white",
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
        </div>
      </div>
    </Box>
  );
}

export default ServiceSecondHeader;
