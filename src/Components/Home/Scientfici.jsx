import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import first from "../../assets/images/first.jpg";
import second from "../../assets/images/second.jpg";
import third from "../../assets/images/third.jpg";
import MediaCard from "./HomePageCard";

function Scientific() {
  const card = [
    {
      img: first,
      title: "Provision of dissertation information on research topics",
    },
    {
      img: second,
      title: "Find article you’d never have found with Real Time Graph",
    },
    {
      img: third,
      title: "Allows communicate and collaborate with your team effectively",
    },
  ];


  return (
    <Box
      sx={{ backgroundColor: "#F4F8FB", marginTop: "0px", textAlign: "center" }}
    >
      <Box
        sx={{
          width: {
            width: "375px",
            md: "80%",
            margin: "0px auto",
            paddingBottom: "100px",
          },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { md: "3.5rem", xs: "1.65rem" },
            paddingTop: "50px",
            fontWeight: "bold",
            marginBottom: "50px",
            color:"#4730cd",
          }}
        >
          Scientific Literature Made Seamless
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{ justifyContent: "space-between" }}
        >
          {card.map((card, i) => {
            return (
              <Box
                sx={{
                  fontFamily:"unset",
                  textAlign: "center",
                  marginBottom: "20px",
                }}
                key={card}
              >
                <Typography
                  variant="span"
                  sx={{
                    padding: "16px 18px 16px 18px",
                    border: "2px dashed #111111",
                    borderRadius: "100em",
                    color:"black",
                    fontSize: "1.5rem",
                    fontWeight : "bold"
                  }}
                >
                  0{i + 1}
                </Typography>
                <MediaCard card={card} />
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
}

export default Scientific;
