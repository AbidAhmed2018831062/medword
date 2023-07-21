import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import SideImage from "../../assets/images/SideImage.png";
function MedicalWriting() {
  return (
    <Box sx={{ width: { xs: "100%", md: "80%", margin: "30px auto" } }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{ justifyContent: "space-between" }}
        spacing={2}
      >
        <Box flex={1} 
        sx={{ 
          textAlign: { xs: "start", md: "start" },
          borderRadius: "25px",
          margin: "10px",
          padding:"46px",
          backgroundColor:"#eef0fb"
          }}>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              textAlign: { xs: "center", md: "start" },
              marginBottom: { md: "30px", xs: "10px" },
              fontWeight: "bold",
              fontSize: { md: "2.25rem", xs: "1.15rem" },
              display: "block",
              color: "black",
            }}
          >
                  Experience Revolutionary Medical Writing  Powered by AI Combined With The  Expertise of Experienced Medical Writers.
          </Typography>
          <Typography
            variant="span"
            sx={{ marginTop: "18px", fontSize: "110%", color:"black" }}
          >
            No industry in the world is better positioned to take full advantage
            of AI writing than medicine. MedWordsmith is a cutting-edge platform
            aligning the speed, power and accuracy of AI writing with the
            medical field. Supported by our team of writers from the American
            Medical Writer’s Association, we deliver a full gamut of medical
            writing services—from regulatory writing and clinical research
            writing to medical communications, medical literature, medical
            journalism and much more—with impressive speed and precision to the
            industries of the world. Partner with MedWordsmith to produce
            high-quality and customized content and documents for purposes of
            regulatory compliance, breakthrough science and resonating impact in
            the medical community. Our commitment to excellence and the highest
            quality medical standards makes us your trusted partner in the
            advancement of science.
          </Typography>
          <Button
            variant="contained"
            sx={{
              display: "block",
              "&:hover": {
                backgroundColor: "#fff",
                color: "black",
              },
              width: "200px",
              marginTop: "60px",
              height: "50px",
              backgroundColor: "#4730cd",
              color: "#fff",
              borderRadius: "32px",
              fontWeight: "bold",
            }}
          >
            Get Started
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}

export default MedicalWriting;
