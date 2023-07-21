import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import edu from "../../assets/images/edu.png";
import tp04 from "../../assets/images/top04.png";
import tp01 from "../../assets/images/tp01.png";
import tp02 from "../../assets/images/tp02.png";
import tp05 from "../../assets/images/tp05.png";
import tp06 from "../../assets/images/tp06.png";

function Services() {
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
  return (
    <Box sx={{ margin: "40px auto", color: "white" }}>
      <Box
        sx={{
          backgroundColor: "#876EFF",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        <Box
          sx={{
            width: { xs: "93%" },
            margin: "0px auto",
            marginBottom: "30px",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginBottom: "30px" }}
          >
            An Instant Solution for All of Your Medical Writing Needs
          </Typography>
          <Typography
            variant="p"
            sx={{ display: "block", marginBottom: "40px" }}
          >
            With MedWordsmith, medical writers can overcome the traditional
            challenge of time-intensive and human-error-prone results. Our AI
            tech pillars of speed and accuracy empower the medical Industry to
            Streamline the communication process and prepare precise, in-depth
            content faster than previously imaginable.
          </Typography>
          <Box
            sx={{
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
              spacing={6}
            >
              {services.map((service) => {
                return (
                  <Box key={service} flex={1}>
                    <img
                      src={service.img}
                      style={{ maxWidth: "350px" }}
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
                );
              })}
            </Stack>
            <Stack
              direction={{ xs: "column", md: "row" }}
              sx={{
                justifyContent: "space-between",
                margin: "20px",
                marginBottom: "60px",
              }}
              spacing={6}
            >
              {servicesSecond.map((service) => {
                return (
                  <Box key={service} flex={1}>
                    <img
                      src={service.img}
                      style={{ maxWidth: "350px" }}
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
                );
              })}
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Services;
