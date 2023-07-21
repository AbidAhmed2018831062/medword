import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import React from "react";
import user6 from "../../assets/images/2.png";
import user11 from "../../assets/images/3.png";
import user2 from "../../assets/images/4.png";
import user3 from "../../assets/images/5.png";
import user8 from "../../assets/images/6.png";
import user5 from "../../assets/images/men-fashion-2021-08-31-17-04-36-utc-q79hctud0dhdvbseol3wm4xjpu88pdstam31049rxc (1).jpg";
import user10 from "../../assets/images/user10.jpg";
import kinguser from "../../assets/images/msg5670041865-834.jpg";

import zero from "../../assets/images/zero.jfif";

function OurTeam() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const team = [
    {
      name: "Kelechi Ndekwe",
      insta: "Co-founder and CEO",
      img: zero,
    },
    {
      name: "Marnie Pereira",
      insta: "Vice President of Business Development",
      img: user11,
    },
    {
      name: "Kris Kallstrom",
      insta: " Sales Rep",
      img: user6,
    },
    {
      name: "Stephen Fisher",
      insta: "Sales Rep",
      img: user2,
    },
    {
      name: "Jordan Domanico",
      insta: "Biotech technology engineer/Advisor",
      img: user8,
    },
    {
      name: "Software engineer",
      insta: "Tami Adetayo",
      img: user3,
    },
    {
      name: "Kingsley Osumiri",
      insta: "Web developer",
      img: kinguser,
    },
    {
      name: "Anthony Bilic",
      insta: "AI engineer",
    },
  ];
  // const icons = [
  //   {
  //     icon: (
  //       <FacebookIcon
  //         sx={{ color: "white", marginTop: "5px", fontSize: "medium" }}
  //       />
  //     ),
  //   },
  //   {
  //     icon: (
  //       <InstagramIcon
  //         sx={{ color: "white", marginTop: "5px", fontSize: "medium" }}
  //       />
  //     ),
  //   },
  //   {
  //     icon: (
  //       <YouTubeIcon
  //         sx={{ color: "white", marginTop: "5px", fontSize: "medium" }}
  //       />
  //     ),
  //   },
  // ];
  return (
    <Box sx={{ width: { xs: "90%", md: "80%" }, margin: "30px auto" }}>
      <Box>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", display: "block", marginBottom: "40px" }}
        >
          Our Amazing <span style={{ color: "#30CC9B" }}>Team</span>
        </Typography>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 16 }}
      >
        {Array.from(team).map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item
              sx={{
                borderRadius: "10px",

                padding: "10px",
                paddingBottom: "20px",
                textAlign: "center",
                boxShadow: "0px 48px 80px -3px rgb(0 0 0 / 7%)",
              }}
            >
              <Box>
                <img
                  src={item.img}
                  width="100px"
                  height="100px"
                  style={{ borderRadius: "50%", marginBottom: "20px" }}
                />
                <Typography
                  variant="h6"
                  component="p"
                  sx={{ display: "block", color: "black", marginBottom: "5px" }}
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="span"
                  sx={{ display: "block", marginBottom: "25px", color: "grey" }}
                >
                  {item.insta}
                </Typography>
                <Box sx={{ textAlign: "center" }}>
                  {/* {icons.map((icon) => (
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
                  ))} */}
                </Box>
              </Box>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default OurTeam;
