import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
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
import contacthead from "../../assets/images/contacthead.jpg";
function ContactHeader() {
  const styles = {
    header: {
      backgroundImage: `url(${contacthead})`,

      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },

    content: {
      height: "100%",
      width: "100%",
      paddingTop: "40px",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      color: "white",
      paddingBottom: "20px",
    },
  };
  return (
    <Box sx={styles.header}>
      <Box sx={styles.content}>
        <Box
          sx={{
            width: { xs: "90%", md: "75%" },
            margin: "30px auto",
            textAlign: "center",
          }}
        >
          <Typography variant="h3" sx={{ textAlign: "start" }}>
            Contact <span style={{ color: "#30CC9B" }}> Us</span>
          </Typography>
          <Stack
            direction={{ xs: "column", md: "row" }}
            sx={{ justifyContent: "space-between" }}
            spacing={3}
          >
            <Box
              component="form"
              flex={1}
              sx={{
                border: "1px solid white",
                borderRadius: "10px",
                margin: "20px auto",
                padding: "30px",
                width: "100%",
              }}
            >
              <Box sx={{ marginBottom: "20px" }}>
                <InputLabel
                  sx={{
                    color: "white",
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
                  sx={{ backgroundColor: "white", borderRadius: "10px" }}
                ></TextField>
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
                  sx={{ backgroundColor: "white", borderRadius: "10px" }}
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
                  sx={{ backgroundColor: "white", borderRadius: "10px" }}
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
            <Box flex={1}>
              <Box sx={{ textAlign: "start", marginTop: "10px" }}>
                <Box
                  sx={{
                    height: "100%",
                    width: "100%",
                    paddingTop: "40px",
                    backgroundColor: "rgba(49, 50, 50, 0.5)",
                    color: "white",
                    padding: "30px",
                    borderRadius: "15px",
                    border: "1px solid white",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        display: "block",
                        fontWeight: "bold",
                        marginBottom: "5px",
                      }}
                    >
                      Call Us
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{
                        display: "block",
                        fontSize: "95%",
                        marginBottom: "30px",
                      }}
                    >
                      Learn More about out goals and how we can help you achieve
                      your goals.
                    </Typography>
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center" }}
                      spacing={2}
                    >
                      <PhoneIcon sx={{ color: "#30CC9B" }} />
                      <Typography variant="p">+123456</Typography>
                    </Stack>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ textAlign: "start", marginTop: "20px" }}>
                <Box
                  sx={{
                    height: "100%",
                    width: "100%",
                    paddingTop: "40px",
                    backgroundColor: "rgba(49, 50, 50, 0.5)",
                    color: "white",
                    padding: "30px",
                    borderRadius: "15px",
                    border: "1px solid white",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        display: "block",
                        fontWeight: "bold",
                        marginBottom: "5px",
                      }}
                    >
                      Visit Us
                    </Typography>

                    <Stack
                      direction="row"
                      sx={{ alignItems: "center" }}
                      spacing={2}
                    >
                      <LocationOnIcon sx={{ color: "#30CC9B" }} />
                      <Typography variant="p">USA</Typography>
                    </Stack>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ textAlign: "start", marginTop: "20px" }}>
                <Box
                  sx={{
                    height: "100%",
                    width: "100%",
                    paddingTop: "40px",
                    backgroundColor: "rgba(49, 50, 50, 0.5)",
                    color: "white",
                    padding: "30px",
                    borderRadius: "15px",
                    border: "1px solid white",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        display: "block",
                        fontWeight: "bold",
                        marginBottom: "5px",
                      }}
                    >
                      Live Chat
                    </Typography>

                    <Stack
                      direction="row"
                      sx={{ alignItems: "center" }}
                      spacing={2}
                    >
                      <HeadsetMicIcon sx={{ color: "#30CC9B" }} />
                      <Typography variant="p">Start Chat</Typography>
                    </Stack>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactHeader;
