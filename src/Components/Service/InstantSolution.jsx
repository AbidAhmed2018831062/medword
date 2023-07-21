import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Textarea } from "@mui/joy";
import {
  Box,
  Button,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import user1 from "../../assets/images/user1.jpg";
import user2 from "../../assets/images/user2.jpg";
import user3 from "../../assets/images/user3.jpg";
function InstantSolution() {
  const users = [
    {
      img: user1,
      name: "Robert Anderson",
      title: "-Co Founder of ABC Company",
      des: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
      img: user2,
      name: "Celenite Magenity",
      title: "-Co Founder of ABC Company",
      des: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
      img: user3,
      name: "Robert Anderson",
      title: "-Co Founder of ABC Company",
      des: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
  ];
  return (
    <Box sx={{ color: "black" }}>
      <Box
        sx={{
          width: { xs: "95%", md: "80%" },
          margin: "0px auto",
          padding: "40px 0px",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{ justifyContent: "space-between" }}
          spacing={4}
        >
          <Box flex={4} sx={{ textAlign: "start" }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                marginBottom: "20px",
                textAlign: "center",
              }}
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
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: "30px" }}
            >
              What Our Users Say
            </Typography>
            {users.map((user) => {
              return (
                <Box
                  key={user}
                  sx={{
                    backgroundColor: "#F4F8FB",
                    borderRadius: "10px",
                    padding: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <Stack
                    direction="row"
                    sx={{ alignItems: "center", marginBottom: "40px" }}
                    spacing={3}
                  >
                    <Box flex={1} sx={{ textAlign: "start" }}>
                      <img
                        src={user.img}
                        width="50px"
                        height="50px"
                        style={{ borderRadius: "50%" }}
                      />
                    </Box>
                    <Box flex={8} sx={{ textAlign: "start" }}>
                      <Typography
                        variant="p"
                        sx={{ fontWeight: "bold", display: "block" }}
                      >
                        {user.name}
                      </Typography>
                      <Typography
                        variant="p"
                        sx={{ color: "#30CC9B", display: "block" }}
                      >
                        -{user.title}
                      </Typography>
                    </Box>
                  </Stack>
                  <Box sx={{ color: "grey" }}>{user.des}</Box>
                </Box>
              );
            })}
          </Box>
          <Box
            flex={2}
            sx={{ textAlign: "start", padding: "20px", paddingTop: "0px" }}
          >
            <Box
              sx={{
                margin: "0px auto",
                width: { md: "75%", xs: "90%" },
                boxShadow: "0px 48px 80px -24px rgb(17 17 17 / 10%)",
                padding: "20px",
              }}
            >
              <Button
                endIcon={<ArrowRightAltIcon sx={{ color: "white" }} />}
                variant="contained"
                sx={{
                  marginBottom: "20px",
                  width: "100%",
                  fontWeight: "bold",
                  backgroundColor: "#30CC9B",
                  color: "white",
                  textAlign: "center",
                  marginTop: "20px",

                  borderRadius: "10px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
              >
                Get Started
              </Button>
              <Button
                endIcon={<ArrowRightAltIcon sx={{ color: "white" }} />}
                variant="contained"
                sx={{
                  marginBottom: "20px",
                  width: "100%",
                  fontWeight: "bold",
                  backgroundColor: "#111",
                  color: "white",
                  textAlign: "center",
                  marginTop: "20px",

                  borderRadius: "10px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
              >
                <NavLink
                  to="/contact"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Contact Us
                </NavLink>
              </Button>
              <Box component="form" sx={{ width: "90%", margin: "20px auto" }}>
                <Box sx={{ marginBottom: "20px" }}>
                  <InputLabel
                    sx={{
                      textAlign: "start",
                      fontWeight: "bold",
                      marginBottom: "5px",
                    }}
                  >
                    Full Name*
                  </InputLabel>
                  <TextField
                    fullWidth
                    required
                    placeholder="Enter Name"
                    name="name"
                    id="name"
                    sx={{
                      backgroundColor: "#F4F8FB",
                      borderRadius: "20px",
                    }}
                  ></TextField>
                </Box>
                <Box sx={{ marginBottom: "20px" }}>
                  <InputLabel
                    sx={{
                      textAlign: "start",
                      fontWeight: "bold",
                      marginBottom: "5px",
                    }}
                  >
                    Email
                  </InputLabel>
                  <Textarea
                    fullWidth
                    required
                    placeholder="Enter Email"
                    name="email"
                    id="email"
                    sx={{ backgroundColor: "white", borderRadius: "10px" }}
                  ></Textarea>
                </Box>
                <Box sx={{ marginBottom: "20px" }}>
                  <InputLabel
                    sx={{
                      textAlign: "start",
                      fontWeight: "bold",
                      marginBottom: "5px",
                    }}
                  >
                    Message*
                  </InputLabel>
                  <Textarea
                    fullWidth
                    required
                    placeholder="Enter Message"
                    minRows={5}
                    name="message"
                    id="message"
                    sx={{ backgroundColor: "#F4F8FB", borderRadius: "10px" }}
                  ></Textarea>
                </Box>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    width: "100%",
                    backgroundColor: "#30CC9B",
                    color: "white",
                    textAlign: "center",
                    marginTop: "20px",
                    border: "1px solid grey",
                    borderRadius: "10px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default InstantSolution;
