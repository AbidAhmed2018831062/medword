import ChatIcon from "@mui/icons-material/Chat";
import DescriptionIcon from "@mui/icons-material/Description";
import { Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";
function ServicePageMenu({ handleProfile }) {
  const [color1, setColor1] = useState("red");
  const [color2, setColor2] = useState("black");
  const [color3, setColor3] = useState("black");

  return (
    <Stack
      p={2}
      direction={{ xs: "row", md: "row" }}
      sx={{
        width: "100%",
        paddingBottom: "10px",
        fontWeight: "bold",
        marginLeft: "0px",
        textAlign: "center",
        borderBottom: "1px solid grey",
      }}
    >
      <Box flex={1}>
        <Button
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
        </Button>
      </Box>
      <Box flex={1}>
        <Button
          onClick={(e) => {
            setColor2("red");
            setColor1("black");
            setColor3("black");
            handleProfile("semantic");
          }}
          startIcon={<DescriptionIcon />}
          variant="text"
          sx={{
            fontWeight: "bold",
            marginBottom: "10px",
            width: "100%",
            display: "block",
            color: color2,
          }}
        >
          Feedback
        </Button>
      </Box>
    </Stack>
  );
}

export default ServicePageMenu;
