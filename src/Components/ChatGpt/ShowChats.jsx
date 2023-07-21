import SendIcon from "@mui/icons-material/Send";
import { Box, Button, Stack, TextField } from "@mui/material";
import React from "react";
import chatgpt from "../../assets/images/chatgpt.png";
import human from "../../assets/images/human.webp";

function ShowChats({ sendPrompt, userMessages, response, setPrompt, prompt }) {
  console.log(response);
  return (
    <Box flex={4} sx={{ position: "relative", color: "black" }}>
      <Box>
        <Box sx={{ zIndex: -1, marginBottom: "100px" }}>
          <Box sx={{ backgroundColor: "white" }}>
            {response.map((userMes, e) => {
              return (
                <Box key={userMes}>
                  <Box
                    sx={{
                      backgroundColor: "white",
                      borderBottom: "1px solid grey",
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
                        {userMessages[e]}
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
                          src={chatgpt}
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
                          {userMes.content}
                        </pre>
                      </Box>
                    </Stack>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box
          component="form"
          onSubmit={sendPrompt}
          sx={{
            position: "absolute",
            bottom: "0px",
            left: { xs: "2.5%", md: "12.5%" },
            width: { xs: "95%", md: "75%" },
            margin: "20px auto",
            border: "1px solid white",
            borderRadius: "10px",
            boxShadow: "0px 48px 80px -3px rgb(0 0 0 / 7%)",
            backgroundColor: "white",
          }}
        >
          <Stack
            direction="row"
            sx={{
              zIndex: 1,
              justifyContent: "space-between",
              border: "1px solid white",
              borderRadius: "10px",
              backgroundColor: "white",
            }}
          >
            <TextField
              flex={3}
              sx={{ border: "0px" }}
              fullWidth
              required
              id="chat"
              value={prompt}
              onChange={(e) => setPrompt(e.currentTarget.value)}
              title="prompt"
              placeholder="Enter Your Prompt"
            ></TextField>
            <Button type="submit" startIcon={<SendIcon />} flex={1}></Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default ShowChats;
