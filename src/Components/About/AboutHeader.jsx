import { Box, Typography } from "@mui/material";
import React from "react";
import video from "../../assets/images/re.mp4";
import "./landingpage.css";

function AboutHeader() {
  return (
    <Box sx={{ margin: "0px",alignItems:'center' }}>
      <div className="landingpage">
        <video src={video} autoPlay muted loop className="video-bg" />
        <div className="bg-overlay">
        <Box
            sx={{
              width: { xs: "90%", md: "75%" },
              color: "white",
              position:"relative",
              top:"26%",
              margin:"0px auto",
           

              textAlign: { xs: "center", md: "start" },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                marginBottom: "10px",
              
                fontSize: { md: "3rem", xs: "1.65rem" },
              }}
            >
              We Offer Top-quality
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                marginBottom: "10px",
                fontSize: { md: "3rem", xs: "1.65rem" },
              }}
            >
              Medical Writing
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                marginBottom: "10px",
                fontSize: { md: "3rem", xs: "1.65rem" },
              }}
            >
              Services
            </Typography>
            <Typography
              variant="p"
              sx={{
                marginTop: "20px",
                display: "block",
                margin: { xs: "20px auto", md: "20px 0px" },
                width: { xs: "90%", md: "57%" },
              }}
            >
              We offer wide range of medical writing services to Pharmaceutical,
              Biotech, Healthcare and Medical Device companies. Our dedication
              to excellence is clear in everything we do. We follow stringent
              quality control procedures to make sure that all of our work is
              correct, thoroughly researched, and error-free.
            </Typography>
          </Box>
        </div>
      </div>
    </Box>
  );
}

export default AboutHeader;
