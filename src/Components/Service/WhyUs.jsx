import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
function ChooseUs() {
  const info = [
    {
      img: <EmojiEventsIcon sx={{ color: "white", fontSize: "200%" }} />,
      text: "Precise Information About a Research Topic",
    },
    {
      img: <AccessAlarmIcon sx={{ color: "white", fontSize: "200%" }} />,
      text: "Find article you’d never have found with Real Time Graph",
    },
    {
      img: <FavoriteIcon sx={{ color: "white", fontSize: "200%" }} />,
      text: "Allows communicate and collaborate with your team effectively",
    },
  ];
  return (
    <Box
      sx={{ backgroundColor: "#F4F8FB", padding: "60px", textAlign: "start" }}
    >
      <Box sx={{ width: { xs: "90%", md: "75%" }, margin: "0px auto" }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Box flex={1}>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              Why Choose Our
            </Typography>
            <Typography
              variant="h3"
              sx={{ display: "block", color: "#30CC9B", fontWeight: "bold" }}
            >
              Tools
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontSize: "85%",
                color: "grey",
                marginTop: "30px",
                display: "block",
                marginBottom: "30px",
              }}
            >
              Scientific Literature Made Seamless
            </Typography>
            <Button
              variant="contained"
              sx={{
                marginBottom: "20px",

                fontWeight: "bold",
                backgroundColor: "#111",
                color: "white",
                textAlign: "center",

                borderRadius: "20px",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              Get Started Now
            </Button>
          </Box>
          <Box flex={1}>
            {info.map((info) => {
              return (
                <Stack
                  key={info}
                  direction="row"
                  sx={{
                    boxShadow: "0px 48px 80px -24px rgb(17 17 17 / 10%)",
                    padding: "10px",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    marginBottom: "25px",
                    alignItems: "center",
                  }}
                  spacing={3}
                >
                  <Box
                    sx={{
                      padding: "10px 15px",
                      display: "inline-block",
                      borderRadius: "5px",
                      backgroundColor: "#30CC9B",
                    }}
                  >
                    {info.img}
                  </Box>
                  <Typography
                    variant="p"
                    sx={{
                      color: "black",
                      fontWeight: "bold",
                      display: "block",
                    }}
                  >
                    {info.text}
                  </Typography>
                </Stack>
              );
            })}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default ChooseUs;
