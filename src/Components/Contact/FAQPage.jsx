import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import FAQ from "./FAQ";

function FAQPage() {
  return (
    <Box sx={{ width: { xs: "90%", md: "75%" }, margin: "20px auto" }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Box flex={1} sx={{ textAlign: "start" }}>
          <Box sx={{ textAlign: { xs: "center", md: "start" } }}>
            <Typography
              variant="h4"
              sx={{
                textAlign: { xs: "center", md: "start" },

                display: { xs: "inline-block", md: "block" },
                fontWeight: "bold",
                marginBottom: "10px",
                fontSize: { xs: "1.45rem", md: "2.125rem" },
              }}
            >
              Frequently <span style={{ color: "#30CC9B" }}>Asked&nbsp;</span>
            </Typography>
            <Typography
              variant="h4"
              sx={{
                display: { xs: "inline-block", md: "block" },
                fontWeight: "bold",
                marginBottom: "20px",
                color: "#30CC9B",
                fontSize: { xs: "1.45rem", md: "2.125rem" },
              }}
            >
              Questions
            </Typography>
          </Box>
          <Typography
            variant="p"
            sx={{ fontSize: "85%", display: "block", color: "grey" }}
          >
            Experience Revolutionart Medical Writing Powered by Combined AI and
            Expert Medical Writers.
          </Typography>
        </Box>

        <FAQ />
      </Stack>
    </Box>
  );
}

export default FAQPage;
