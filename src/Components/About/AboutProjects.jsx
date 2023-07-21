import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import video from "../../assets/images/kle.mp4";
import play from "../../assets/images/video.svg";
import "../Common/videoback.css";

function AboutProjects() {
  const clients = [
    {
      number: "300+",
      text: "Satisfied Clients",
    },
    {
      number: "150+",
      text: "App Developed",
    },
    {
      number: "9.8",
      text: "Client Rating",
    },
    {
      number: "11",
      text: "Years of Experience",
    },
  ];
  const [showPlay, setShowPlay] = useState(true);
  const [control, setControl] = useState(0);
  const [showControl, setShowControl] = useState(false);

  const showPlayTrue = (e) => {
    const video = window.document.getElementsByClassName(
      "custom-video__video"
    )[0];
    console.log(video);
    console.log(video.paused);
    if (video.paused) setShowPlay(true);
    else setShowPlay(false);
    setShowControl(true);
  };
  const showPlayFalse = (e) => {
    setShowPlay(false);
    setShowControl(false);
  };
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
  return (
    <Box sx={{ margin: "40px auto" }}>
      <Box
        sx={{ width: { xs: "90%", md: "75%" }, margin: "0px auto" }}
        onMouseLeave={showPlayFalse}
        onMouseEnter={showPlayTrue}
      >
        <div class="custom-video__container" onMouseEnter={showPlayTrue}>
          <video
            class="custom-video__video"
            width="100%"
            height="auto"
            muted
            controls={showControl}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {showPlay && (
            <div class="custom-video__control">
              <img src={play} style={{ width: "100px" }} onClick={handlePlay} />
            </div>
          )}
        </div>
      </Box>
      <Box
        sx={{
          backgroundColor: "#304fe7",
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <Box sx={{ width: { xs: "90%", md: "85%" }, margin: "20px auto" }}>
          <Stack
            direction={{ xs: "row", md: "row" }}
            sx={{ justifyContent: "space-between", marginBottom: "20px",}}
            spacing={5}
          >
            <Box
              flex={1}
              sx={{
                textAlign: "start",
               
              }}
            >
              <Typography variant="p" sx={{ display: "block", color: "white" }}>
                MedWordsmith is a Silicon Valley technology company founded to
                support the scientific work of researchers and directors on
                behalf of stakeholders and public interests in the medical
                field. We offer top-quality medical writing services to
                Pharmaceutical, Biotech, Healthcare and Medical Device companies
                while extending our cutting-edge technology platform to all
                branches of medical science for the promotion of knowledge. Our
                specialism is far-reaching and a first choice for regulatory
                document writing, clinical study report writing, medical
                manuscript writing, and producing in-depth scientific content.
                In partnership with experienced Medical Writers, our tech-based
                collaborative environment fosters skilled and knowledgeable
                writing services while taking full advantage of AI’s power,
                efficiency and real-time accuracy.
              </Typography>
            </Box>
          </Stack>
          <Stack
            direction={{ xs: "column", md: "row" }}
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "center",
              marginTop: "40px",
            }}
            spacing={3}
          >
            {clients.map((client) => (
              <Box key={client}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    display: "block",
                    color: "#30CC9B",
                    marginBottom: "5px",
                  }}
                >
                  {client.number}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    display: "block",
                    color: "white",
                    marginBottom: "10px",
                  }}
                >
                  {client.text}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutProjects;
