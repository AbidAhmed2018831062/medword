import { Box, Stack } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import human from "../../assets/images/human.webp";
import Navbar from "../Common/NavBar";
import { baseURL } from "../../Config";
function HistoryChat() {
  // console.log(response);
  const [chat, setChat] = useState([]);
  const [chatmessages, setChatMessages] = useState([]);
  const [userMessages, setUserMessages] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${baseURL}/chatgpt/getchat?id=${id}`)
      .then((res) => {
        console.log(res);
        setChat((content) => [...content, res.data.reports[0]]);
        setUserMessages(
          res.data.reports[0].userMessages
            .split("#")
            .filter((e) => (e === "#" ? "" : e))
        );
        setChatMessages(
          res.data.reports[0].chatmessages
            .split("#")
            .filter((e) => (e === "#" ? "" : e))
        );
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box>
      <Navbar />

      <Box flex={4} sx={{ position: "relative", color: "black" }}>
        <Box>
          {chat.length > 0 && (
            <Box sx={{ zIndex: -1, marginBottom: "100px" }}>
              <Box sx={{ backgroundColor: "white" }}>
                {userMessages.map((userMes, e) => {
                  return (
                    <Box key={userMes}>
                      <Box
                        sx={{
                          backgroundColor: "white",
                          borderBottom: "1px solid grey",
                          borderTop: "1px solid grey",
                          padding: "40px",
                        }}
                      >
                        <Stack
                          direction="row"
                          spacing={2}
                          sx={{
                            width: { xs: "95%", md: "65%" },
                            margin: "0px auto",
                            alignItems: "start",
                          }}
                        >
                          <Box flex={1}>
                            <img
                              src={human}
                              width="30px"
                              height="30px"
                              style={{ borderRadius: "50%" }}
                            />
                          </Box>

                          <Box
                            flex={4}
                            sx={{
                              width: { xs: "95%", md: "65%" },
                              margin: "0px auto",
                              textAlign: "start",
                            }}
                          >
                            {userMes}
                          </Box>
                        </Stack>
                      </Box>
                      <Box
                        sx={{
                          backgroundColor: "#F7F7F8",
                          borderBottom: "1px solid white",
                          padding: "40px",
                        }}
                      >
                        <Stack
                          direction="row"
                          spacing={2}
                          sx={{
                            width: { xs: "95%", md: "65%" },
                            margin: "0px auto",
                            alignItems: "start",
                          }}
                        >
                          <Box flex={1}>
                            <img
                              src={human}
                              width="30px"
                              height="30px"
                              style={{ borderRadius: "50%" }}
                            />
                          </Box>

                          <Box
                            flex={4}
                            sx={{
                              width: { xs: "95%", md: "65%" },
                              margin: "0px auto",
                              textAlign: "start",
                            }}
                          >
                            <pre
                              style={{
                                fontFamily:
                                  "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
                                overflowX: "auto",
                                whiteSpace: "pre-wrap",
                                wordWrap: "break-word",
                              }}
                            >
                              {" "}
                              {chatmessages[e]}
                            </pre>
                          </Box>
                        </Stack>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default HistoryChat;
