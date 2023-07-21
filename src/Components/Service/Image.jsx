import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import video from "../../assets/images/webanim.mp4";
import play from "../../assets/images/video.svg";
import "../Common/videoback.css";
function Image() {
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
    <Box sx={{width:{xs:"90%",md:"75%"},margin:"40px auto"}}>
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
  </Box>
  );
}

export default Image;
