import { Box, Typography } from "@mui/material";
import React from "react";
function Publisher() {
  return (
    <Box sx={{ margin: "40px auto"}}>
      <Typography variant="h5" 
      sx={{ 
        color: "#4730cd",
        fontWeight: "bold",
        fontSize: "35px"
        }}>
          Publisher Partners  
      </Typography>
      <Typography variant="h5" 
      sx={{ 
        color: "black",
        fontFamily: "revert",
        fontSize: "25px",
        marginLeft:"190px",
        marginRight:"190px"
        }}>
          More than 50 direct partnerships with publishers, data providers, and aggregators provide Medwordsmith with Service from 500+ academic journals, university presses, and scholarly societies around the globe.
      </Typography>
      <Box sx={{ width: { xs: "90%", md: "75%" }, margin: "30px auto" }}>

      </Box>
    </Box>
  );
}

export default Publisher;
