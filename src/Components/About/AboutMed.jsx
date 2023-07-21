import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Stack, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import React from "react";
import { NavLink } from "react-router-dom";
function AboutMed() {
  const icons = [
    {
      icon: <LinkedInIcon sx={{ color: "white", marginTop: "5px" }} />,
      link:"https://www.linkedin.com/company/medwordsmith/"
    },
 
  ];
  const removedicon=[
    {
      icon: <InstagramIcon sx={{ color: "white", marginTop: "5px" }} />,
    },
    {
      icon: <TwitterIcon sx={{ color: "white", marginTop: "5px" }} />,
    },
    {
      icon: <YouTubeIcon sx={{ color: "white", marginTop: "5px" }} />,
    },
    {
      icon: <FacebookIcon sx={{ color: "white", marginTop: "5px" }} />,
      
    },
  ];
  return (
    <Box sx={{ marginTop: "50px", marginBottom: "50px" }}>
      <Box sx={{ width: { xs: "90%", md: "75%" }, margin: "0px auto" }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{ justifyContent: "space-between", alignItems: "center" }}
          spacing={3}
        >
          <Box flex={1} sx={{ textAlign: "start" }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                display: "block",
                marginBottom: "15px",
              }}
            >
              About <span style={{ color: "#30CC9B" }}>MedWorkSmith</span>
            </Typography>
            <Typography
              variant="p"
              sx={{ textAlign: "start", display: "block", color: "#30CC9B" }}
            >
              How AI & Expertise Are Changing The Game
            </Typography>
          </Box>
          <Box flex={1}>
            {icons.map((icon) => (
              <NavLink to={icon.link} style={{textDecoration:"none",}}>
                  <Box
                key={icon}
                sx={{
                  display: "inline-block",
                  padding: "5px 10px",
                  backgroundColor: "#30CC9B",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              >
                {icon.icon}
              </Box>
              </NavLink>
            
            ))}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default AboutMed;
