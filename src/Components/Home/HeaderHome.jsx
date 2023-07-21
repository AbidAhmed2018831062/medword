import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import home from "../../assets/images/home.jpg";
function HeaderHome() {
  const styles = {
    header: {
      backgroundImage: `url(${home})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },

    content: {
      height: "100%",
      width: "100%",
      paddingTop: "60px",
      color: "white",
      justifyContent: "center",
      margin: "0px auto",
      paddingTop: "10vh",
    },
  };
  return (
    <Box sx={styles.header} height="75vh">
      <Box sx={styles.content}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { md: "4.55rem", xs: "1.75rem" },
            display: "inline-block",
            color: "#4730cd",
            marginTop: { md: "100px", xs: "20px" },
            fontWeight: "bold",
          }}
        >
          A New Era&nbsp;&nbsp;
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: { md: "3.75rem", xs: "1.75rem" },
            display: "inline-block",
            color: "black",
            marginTop: { md: "40px", xs: "0px" },
            fontWeight: "bold",
          }}
        >
          Of Medical Writing Is Here
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontSize: {md:"1.2rem", xs:"1.25rem"},
            display: "block",
            marginTop: "30px",
            color: "#4730cd",
            fontWeight: "bold",
          }}
        >
          Experience Revolutionary Medical Writing Powered by Combined AI and
          Expert Medical Writers.
        </Typography>
        <Box
          sx={{
            margin: "0px auto",
            marginTop: "40px",
            textAlign: "center",
          }}
        >
          <Stack
            direction="row"
            sx={{ justifyContent: "space-evenly", alignItems: "center" }}
          >
            <Button
              variant="contained"
              sx={{
                "&:hover": {
                  color: "black",
                  border: "2px solid #4730cd",
                  borderRadius: "32px",
                  borderWidth : "2px",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  backgroundColor: "white"
                },

                height: "65px",
                backgroundColor: "#4730cd",
                paddingLeft: "30px",
                paddingRight: "30px",
                color: "white",
                borderRadius: "32px",
                fontWeight: "bold",
                
              }}
            >
              Get Started
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default HeaderHome;
