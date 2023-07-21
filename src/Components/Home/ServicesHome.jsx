import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import edu from "../../assets/images/edu.png";
import tp04 from "../../assets/images/top04.png";
import tp01 from "../../assets/images/tp01.png";
import tp02 from "../../assets/images/tp02.png";
import tp05 from "../../assets/images/tp05.png";
import tp06 from "../../assets/images/tp06.png";
import "../Common/videoback.css";

function ServicesHome() {
  
  let control = 0;

  const services = [
    {
      img: tp01,
      title: "Medical Communication",
    },
    {
      img: tp02,
      title: "Regulatory Writing",
    },
    {
      img: edu,
      title: "Educational Writing",
    },
  ];
  const servicesSecond = [
    {
      img: tp04,
      title: "Medical Journalism",
    },
    {
      img: tp05,
      title: "Medical Product Promotion",
    },
    {
      img: tp06,
      title: "Editing/Indexing & more",
    },
  ];
  const handlePlay = () => {
    if (control % 2 === 0) {
      const video = window.document.getElementById("video");
      video.play();
    } else {
      const video = window.document.getElementById("video");
      video.pause();
    }
    control++;
  };
  return (
    <Box sx={{ margin: "40px auto" }}>
      <Box sx={{ width: { xs: "100%", md: "85%" }, margin: "0px auto" }}></Box>
      <Box
        sx={{
          backgroundColor: "#876EFF",
          paddingTop: "100px",
          paddingBottom: "100px",
          marginTop: "30px",
        }}
      >
        <Box
          sx={{
            width: { xs: "92%", md: "75%" },
            margin: "0px auto",
            marginBottom: "30px",
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            sx={{
              justifyContent: "space-between",
              margin: "20px",
              marginBottom: "60px",
            }}
            spacing={15}
          >
            {services.map((service) => {
             return (
              <Box key={service}>
                <Box
                  sx={{
                    width: { xs: "50%", sm: "40%", md: "100%" },
                    margin: "0px auto",
                  }}
                >
                  <img
                    src={service.img}
                    style={{ width: "100%" }}
                    height="200px"
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white",
                      marginTop: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    {service.title}
                  </Typography>
                </Box>
              </Box>
            );
            })}
          </Stack>
          <Stack
            spacing={5}
            direction={{ xs: "column", md: "row" }}
            sx={{ justifyContent: "space-between", margin: "20px" }}
          >
            {servicesSecond.map((service) => {
              return (
                <Box key={service}>
                  <Box
                    sx={{
                      width: { xs: "50%", sm: "40%", md: "100%" },
                      margin: "0px auto",
                    }}
                  >
                    <img
                      src={service.img}
                      style={{ width: "100%" }}
                      height="200px"
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        color: "white",
                        marginTop: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      {service.title}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default ServicesHome;
