import ChatIcon from "@mui/icons-material/Chat";
import DescriptionIcon from "@mui/icons-material/Description";
import { Box, Button, Stack, Typography, createTheme } from "@mui/material";
import React, { useState } from "react";
function ServicePageMenu({ handleProfile, }) {
  const [color1, setColor1] = useState("red");
  const [color2, setColor2] = useState("black");
  const [color3, setColor3] = useState("black");
  const [chat,setChat]=useState(true);
  const [semantic,setSemantic]=useState(false);
  const theme = createTheme({
    typography: {
      fontFamily: [
        "Assistant",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  });
  return (
    <Stack
      spacing={2}
      direction={{ xs: "row", md: "row" }}
      sx={{
        backgroundColor:"#efefef",
        width: "100%",
        padding:"20px",
        paddingBottom:'0px',
        alignItems:"center",
        fontWeight: "bold",
        marginLeft: "0px",
        textAlign: "center",
       
      }}
    >
      <Box flex={1} sx={{cursor:"pointer"}}onClick={(e) => {
            setColor1("red");
            setColor2("black");
            setColor3("black");
            setChat(true);
            setSemantic(false);
            handleProfile("chat")}}>
        {/* <Button
          onClick={(e) => {
            setColor1("red");
            setColor2("black");
            setColor3("black");
            handleProfile("chat");
          }}
          startIcon={<ChatIcon />}
          variant="text"
          sx={{
            marginBottom: "10px",
            width: "100%",
            display: "block",
            color: color1,

            fontWeight: "bold",
          }}
        >
          Chat
        </Button> */}
       <Box sx={{display:"flex",flexDirection:"row",gap:"10px",}}>
          <ChatIcon sx={{color:"#a34e11"}}/>
          <Typography variant="p" sx={{display:"block",color:"#a34e11"}}>
            Chat
          </Typography>
          </Box>
          <Box sx={{marginTop:"20px"}}>
            {chat&&<hr style={{width:"100%",height:"4px",backgroundColor:"#d2c9bd",color:"#d2c9bd",        border: "none"
}}></hr>}
          </Box>
       
      </Box>
      <Box flex={1} sx={{cursor:"pointer"}}  onClick={(e) => {
            setColor1("red");
            setColor2("black");
            setColor3("black");
            setChat(false);
            setSemantic(true);
            handleProfile("semantic");
          }}>
            <Box sx={{display:"flex",flexDirection:"row",gap:"10px",}}>
          <DescriptionIcon sx={{color:"#a34e11"}}/>
          <Typography variant="p" sx={{display:"block",color:"#a34e11"}}>
            Semantic
          </Typography>
          </Box>
          <Box sx={{marginTop:"20px"}}>
            {semantic&&<hr style={{width:"100%",height:"4px",backgroundColor:"#d2c9bd",color:"#d2c9bd",        border: "none"
}}></hr>}
          </Box>
        </Box>
    </Stack>
  );
}

export default ServicePageMenu;
