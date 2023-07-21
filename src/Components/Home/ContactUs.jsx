import Textarea from "@mui/joy/Textarea";
import {
  Box,
  Button,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import React from "react";
import contact from "../../assets/images/contact.jpg";
function ContactUs() {
  const styles = {
    header: {
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundImage: "linear-gradient(#e52ee5, #4c9fe1)",
      padding:"50px"
    },

    content: {
      height: "100%",
      width: "100%",
      paddingTop: "40px",
    },
  };
  return (
    <Box sx={styles.header}>
      <Box sx={styles.content}>
        <Box sx={{ width: { xs: "90%", md: "80%" }, margin: "0px auto" }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            sx={{ justifyContent: "space-between", paddingBottom: "30px" }}
            spacing={4}
          >
            {/* <Box flex={1}>
              <Typography variant="h4" sx={{ textAlign: "start" }}>
                Get In Touch <span style={{ textAlign: { xs: "center", md: "start" },
              fontWeight: "bold",
              color: "#4730cd", }}>With Us</span>
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontSize: "85%",
                  display: "block",
                  marginTop: "20px",
                  textAlign: "start",
                }}
              >
                Learn more about our services and how we can help you achieve
                your goals.
              </Typography>
            </Box> */}
            <Box
              flex={1}
              sx={{
                backgroundColor: "white",
                border: "1px solid white",
                borderRadius: "10px",
                padding: "70px"
              }}
            >
              <Box component="form" sx={{ width: "90%", margin: "20px auto" }}>
                <Box sx={{ marginBottom: "20px" }}>
                <Typography variant="h4" sx={{ textAlign: "start" }}>
                Get In Touch <span style={{ textAlign: { xs: "center", md: "start" },
              fontWeight: "bold",
              color: "#4730cd", }}>With Us</span>
              </Typography>
              <Typography
                sx={{
                  fontSize: "100%",
                  display: "block",
                  marginTop: "20px",
                  textAlign: "start",
                }}
              >
                Learn more about our services and how we can help you achieve
                your goals.
              </Typography>

                <Typography
                  sx={{
                    width: "300px",
                    marginTop: "20px",
                    xs: "6"
                  }}
                >
                  <TextField
                    fullWidth
                    required
                    placeholder="First Name"
                    name="name"
                    id="name"
                    sx={{ backgroundColor: "white", borderRadius: "50px", marginTop:"20px" }}
                  ></TextField>
                </Typography>
                  <Typography
                  sx={{
                    width: "300px",
                    marginTop: "20px",
                    xs: "6"
                  }}
                >
                  <TextField
                    fullWidth
                    required
                    placeholder="Last Name"
                    name="name"
                    id="name"
                    sx={{ backgroundColor: "white", borderRadius: "50px", marginTop:"20px" }}
                  ></TextField>
                </Typography>
                </Box>
                <Box sx={{ marginBottom: "20px" }}>
                  <InputLabel
                    sx={{
                      color: "white",
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
                    sx={{ backgroundColor: "white"}}
                  ></Textarea>
                </Box>
                <Box sx={{ marginBottom: "20px" }}>
                  <InputLabel
                    sx={{
                      color: "white",
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
                    sx={{ backgroundColor: "white"}}
                  ></Textarea>
                </Box>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    "&:hover": {
                      color: "black",
                      border: "2px solid #b7aee9",
                      borderRadius: "10px",
                      borderWidth : "1px",
                      backgroundColor:"white"
                    },
                    width: "100%",
                    backgroundImage: "linear-gradient(#e52ee5, #4c9fe1)",
                    width: "500px",
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
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactUs;
