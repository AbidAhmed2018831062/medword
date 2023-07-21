import { Box, Typography } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import Navbar from "./NavBar";
import { baseURL } from "../../Config";
function UnAuthorized() {
  useEffect(() => {
    axios
      .put(`${baseURL}/user/deletetime`, {
        remtime: "0",
        id: Cookies.get("id"),
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Box>
      <Navbar />

      <div style={{ width: "80%", margin: "20px auto" }}>
        <Typography variant="h5" sx={{ marginTop: "30px" }}>
          You are Now Allowed to view this page
        </Typography>
      </div>
    </Box>
  );
}

export default UnAuthorized;
