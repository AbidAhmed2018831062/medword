import { Box, Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { baseURL } from "../../Config";
function ChatHistory() {
  const [history, setHistory] = useState([]);
  const [show, setShow] = useState();
  useEffect(() => {
    axios
      .get(`${baseURL}/chatgpt/getchats`)
      .then((res) => {
        console.log(res);
        setHistory(res.data.reports);
      })
      .catch((err) => console.log(err));
  }, []);
  const services = [
    {
      title: "Medical Communication",
    },
    {
      title: "Regulatory Writing",
    },
    {
      title: "Educational Writing",
    },
    {
      title: "Medical Journalism",
    },
    {
      title: "Medical Product Promotion",
    },
    {
      title: "Editing/Indexing & more",
    },
  ];
  return (
    <Box>
      <Box sx={{ padding: "10px" }}>
        {services.map((service) => {
          return (
            <Button
              key={service}
              sx={{
                border: "1px solid white",
                width: "100%",
                marginBottom: "10px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              {service.title}
            </Button>
          );
        })}
        {history.length > 0 && (
          <Box>
            {history.map((history) => {
              return (
                <NavLink
                  to={`/history/${history.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button
                    key={history}
                    sx={{
                      border: "1px solid white",
                      width: "100%",
                      marginBottom: "10px",
                      backgroundColor: "black",
                      color: "white",
                    }}
                  >
                    {history.title}
                  </Button>
                </NavLink>
              );
            })}
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default ChatHistory;
