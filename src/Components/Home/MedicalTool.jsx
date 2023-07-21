import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import RightImage from "../../assets/images/young-writer-taking-notes.jpg";
import DoneIcon from '@mui/icons-material/Done';

function MedicalTools() {
  return (
    <Box sx={{ width: { xs: "90%", md: "80%", margin: "30px auto" } }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{ 
            justifyContent: "space-between",
            borderRadius: "25px",
            margin: "10px",
            alignItems:'center',
            padding:"50px",
            backgroundColor:"#eef0fb",
        }}
        spacing={2}
      >
        <Box flex={1} sx={{ textAlign: { xs: "start", md: "start" } }}>
          <Stack direction="row" spacing={3} sx={{alignItems:'center',marginBottom:"30px"}}>
          <DoneIcon sx={{fontSize:"250%",color:"#30C730",fontWeight:'bolder'}}/>
         < Typography
            variant="h5"
            component="h5"
            sx={{
                // textAlign: { xs: "center", md: "start" },
                // marginBottom: { md: "30px", xs: "10px" },
                // fontWeight: "bold",
                // display: "block",
                // fontSize: { md: "1.25rem", xs: "1.15rem" },
                // color: "white",
                // border: "none",
                // height:"25%",
                // marginTop:"40px",
                // borderRadius: "40px 10px",
                // backgroundColor: "#8e7ee5",
                // padding:"10%",
                fontFamily:"Visage",
                fontSize:{md:"205%",xs:"155%"},
                fontWeight:"600",
              
                color:"black"
                
            }}
          >
            AI-powered research tool for scientific literature.
          </Typography>
       
          </Stack>
       
          <Stack direction="row" spacing={3} sx={{alignItems:'center',marginBottom:"30px"}}>
          <DoneIcon sx={{fontSize:"250%",color:"#30C730",fontWeight:'bolder'}}/>
          <Typography
            variant="h5"
            component="h5"
            sx={{
                // textAlign: { xs: "center", md: "start" },
                // marginBottom: { md: "30px", xs: "10px" },
                // fontWeight: "bold",
                // display: "block",
                // fontSize: { md: "1.25rem", xs: "1.15rem" },
                // color: "white",
                // border: "none",
                // height:"25%",
                // marginTop:"40px",
                // borderRadius: "40px 10px",
                // backgroundColor: "#8e7ee5",
                // padding:"10%",
                fontFamily:"Visage",
                fontSize:{md:"205%",xs:"155%"},
                fontWeight:"600",
              
              
                color:"black"
                
            }}
          >
       1.4b citation statement extracted and analyzed.
          </Typography>
       
          </Stack>
          <Stack direction="row" spacing={3} sx={{alignItems:'center',marginBottom:"30px"}}>
          <DoneIcon sx={{fontSize:"250%",color:"#30C730",fontWeight:'bolder'}}/>
          < Typography
            variant="h5"
            component="h5"
            sx={{
                // textAlign: { xs: "center", md: "start" },
                // marginBottom: { md: "30px", xs: "10px" },
                // fontWeight: "bold",
                // display: "block",
                // fontSize: { md: "1.25rem", xs: "1.15rem" },
                // color: "white",
                // border: "none",
                // height:"25%",
                // marginTop:"40px",
                // borderRadius: "40px 10px",
                // backgroundColor: "#8e7ee5",
                // padding:"10%",
                fontFamily:"Visage",
                fontSize:{md:"205%",xs:"155%"},
                fontWeight:"600",
              
              
                color:"black"
                
            }}
          >
            200m articles indexed, preprints and datasets
          </Typography>
       
          </Stack>
        </Box>
        <Box flex={1}>
          <Typography
            variant="h5"
            sx={{
              display: "block",
              fontWeight: "bold",
              color: "black",
              margin:"20px",
           
            }}
          >
            <img src={[RightImage]} width="100%" />
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default MedicalTools;
