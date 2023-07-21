import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import video from "../../assets/images/kle.mp4";
import play from "../../assets/images/video.svg";
import "../Common/videoback.css";
function AboutHome() {
  const [control, setControl] = useState(0);
  const [showControl, setShowControl] = useState(false);
  const [showPlay, setShowPlay] = useState(true);
  const handlePlay = () => {
    console.log(control);
    if (control % 2 === 0) {
      const video = window.document.getElementsByClassName(
        "custom-video__video"
      )[0];
      video.play();

      setShowPlay(false);
    } else {
      console.log("HandlePlay2");
      const video = window.document.getElementsByClassName(
        "custom-video__video"
      )[0];
      video.pause();
    }
    setControl((control) => control + 1);
  };
  const showPlayTrue = (e) => {
    setShowPlay(true);
    setShowControl(true);
  };
  const showPlayFalse = (e) => {
    setShowPlay(false);
    setShowControl(false);
  };
  return (
    <Box
      sx={{
     
        width: { xs: "90%", md: "80%" },
        margin: "0px auto",
        marginTop: "50px",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        sx={{justifyContent: "space-between", textAlign: "start"}}
      >
        <Box flex={1}>
          <Typography
            variant="h4"
            sx={{
              textAlign: { xs: "center", md: "start" },
              display: "block",
              fontWeight: "bold",
              fontSize: { xs: "1.60rem", md: "2.125rem" },
              marginBottom: "50px",
              color: "#4730cd",
            }}
          >
            About MedWorkSmith
          </Typography>
          <Typography
            variant="h4"
            sx={{
              textAlign: { xs: "center", md: "start" },
              display: "block",
              color: "#30CC9B",
              fontWeight: "bold",
              fontSize: { xs: "1.5rem", md: "1.5rem" },
              marginTop:"20px",
              marginBottom:"30px"
            }}
          >
            How AI & Expertise Are Changing The Game
          </Typography>
          <Typography variant="p" 
          sx={{ 
            fontSize: "100%",
            color: "black"
            }}>
            MedWordsmith is a Silicon Valley technology company founded to
            support the scientific work of researchers and directors on behalf
            of stakeholders and public interests in the medical field. We offer
            top-quality medical writing services to Pharmaceutical, Biotech,
            Healthcare and Medical Device companies while extending our
            cutting-edge technology platform to all branches of medical science
            for the promotion of knowledge
          </Typography>
          <Button
            variant="contained"
            sx={{
              display: "block",
              "&:hover": {
                backgroundColor: "#fff",
                color:"black",
                border: "1px solid #4730cd",
                borderRadius: "32px"
              },
              height: "50px",
              backgroundColor: "#4730cd",
              paddingLeft: "30px",
              paddingRight: "30px",
              color: "white",
              borderRadius: "32px",
              fontWeight: "bold",
              marginTop:"40px"
            }}
          >
            Read More
          </Button>
        </Box>
        <Box flex={1} onMouseEnter={showPlayTrue} onMouseLeave={showPlayFalse}>
          <div class="custom-video__container" onMouseEnter={showPlayTrue}>
            <video
              class="custom-video__video"
              width="100%"
              height="auto"
              controls={showControl}
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {showPlay && (
              <div class="custom-video__control">
                <img
                  src={play}
                  style={{ width: "100px" }}
                  onClick={handlePlay}
                />
              </div>
            )}
          </div>
        </Box>
      </Stack>
    </Box>
  );
}

export default AboutHome;
