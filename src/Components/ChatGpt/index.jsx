import SendIcon from "@mui/icons-material/Send";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import ai from "../../assets/images/jump.png";
import logo from "../../assets/images/logo.png";
import sun from "../../assets/images/sun.png";
import expert from "../../assets/images/warning.png";
import SimpleBackdrop from "../Common/Backdrop";
import Navbar from "../Common/NavBar";
import ShowChats from "./ShowChats";
import { baseURL } from "../../Config";
function Chat() {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [pageLoadTime, setPageLoadTime] = useState(Date.now());
  const [isActive, setIsActive] = useState(true);

  const [remtime, setRemtime] = useState(0);
  useEffect(() => {
    axios
      .get(`${baseURL}/user/getprofile?id=${Cookies.get("id")}`)
      .then((res) => {
        console.log(res);
        Cookies.set("id", res.data.result.id, { expires: 365 });
        setRemtime(parseInt(res.data.result.remtime));
        Cookies.set("remtime", res.data.result.remtime, { expires: 365 });
        Cookies.set("time", res.data.result.time, { expires: 365 });
        Cookies.set("email", res.data.result.email, { expires: 365 });
        Cookies.set("name", res.data.result.name, { expires: 365 });
        setShowRem(true);
      })
      .catch((err) => {
        setShowRem(true);
        console.log(err);
      });
  }, []);
  const [showRem, setShowRem] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      if (isActive) {
        setRemtime((remtime) => remtime - 1);
      }
    }, 1000);

    return () => {
      axios
        .put(`${baseURL}/user/deletetime`, {
          remtime: remtime.toString(),
          id: Cookies.get("id"),
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      clearInterval(interval);
    };
  }, [isActive, pageLoadTime]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsActive(!document.hidden);
      if (!document.hidden) {
        setPageLoadTime(Date.now() - time);
      } else {
        // axios
        //   .put("http://localhost:8080/user/deletetime", {
        //     remtime: remtime.toString(),
        //     id: Cookies.get("id"),
        //   })
        //   .then((res) => {
        //     console.log(res);
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [time]);

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const [title, setTitle] = useState("");
  const handleOpen = () => {
    setOpen(true);
  };
  const [id, setId] = useState(-1);
  const [prompt, setPrompt] = useState("");
  const [userMessages, setUserMessages] = useState([]);
  const [response, setResponse] = useState([]);
  const [showChat, setShowChat] = useState(false);
  useEffect(() => {
    axios
      .post(`${baseURL}/chatgpt/createdb`, {
        title: "hello",
        userMessages1: "hello",
        chatmessages: "hello",
        date: new Date().toLocaleDateString(),
      })
      .then((res) => {
        console.log(res);
        setId(res.data[0].id);
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
  ];
  const services2 = [
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
  const services3 = [
    {
      title: "Precise Information",
    },
    {
      title: "Find article",
    },
    {
      title: "Communication Effectively",
    },
  ];
  const [chat, setChat] = useState([]);

  // const handleSend = async (e) => {
  //   console.log(e);
  //   e.preventDefault();
  //   if (prompt.trim) {
  //     setChat([...chat, { role: "user", content: prompt }]);
  //     setPrompt("");
  //     const response = await fetch("http://localhost:8080/chat", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         messages: [...chat, { role: "user", content: prompt }],
  //       }),
  //     });

  //     //eslint-disable-next-line
  //     const readData = response.body
  //       .pipeThrough(new TextDecoderStream())
  //       .getReader();
  //     let aiRes = "";
  //     while (true) {
  //       const { done, value } = await readData.read();
  //       if (done) {
  //         break;
  //       }
  //       aiRes += value;
  //       setChat([
  //         ...chat,
  //         { role: "user", content: prompt },
  //         { role: "assistant", content: aiRes },
  //       ]);
  //     }

  //     if (!title) {
  //       const createTitle = await fetch("http://localhost:8000/api/title", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           title: prompt,
  //         }),
  //       });

  //       const title = await createTitle.json();
  //       setTitle(title?.title);
  //       setChatHistory([...chatHistory, title]);
  //     }
  //   }
  // };
  const sendPrompt = (e) => {
    e.preventDefault();
    setOpen(true);
    console.log(userMessages);
    axios
      .post(`${baseURL}/chatgpt/chat`, { prompt })
      .then((res) => {
        console.log(res);
        setResponse((content) => [...content, res.data]);
        setShowChat(true);
        setUserMessages((content) => [...content, prompt]);
        setOpen(false);
        setPrompt("");
        let chatGptChats = "";
        let respo = response;

        respo.forEach((e) => {
          chatGptChats += e.content + "#";
        });
        chatGptChats += res.data + "#";

        let userMes2 = "";
        let user12 = userMessages;

        user12.forEach((e) => {
          userMes2 += e + "#";
        });
        userMes2 += prompt + "#";
        axios
          .put(`${baseURL}/chatgpt/update`, {
            id,
            chatmessages: chatGptChats,
            userMessages1: userMes2,
            title: prompt,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState([]);
  const [papers, setPapers] = useState(false);
  const autoComplete = (e) => {
    e.preventDefault();
    setSearch(e.currentTarget.value);
    if (
      e.currentTarget.value === "" ||
      e.currentTarget.value === null ||
      e.currentTarget.value === "undefined"
    ) {
      setArticles([]);
      return;
    }
    axios
      .get(
        `https://api.semanticscholar.org/graph/v1/paper/autocomplete?query=${e.currentTarget.value}`
      )
      .then((res) => {
        console.log(res);
        setArticles(res.data.matches);
      })
      .catch((err) => console.log(err));
  };
  const handlePaperSubmit = (e) => {
    e.preventDefault();
    setPapers(true);
  };

  return (
    <Box>
      {remtime}
      <Navbar page="chat" />
      {showRem && remtime <= 0 && <Navigate to="/unauthor"></Navigate>}
      <Stack direction="row">
        {/* <Box sx={{ flex: 1, backgroundColor: "black", height: "100%" }}>
          <ChatHistory />
        
        </Box> */}
        {papers && <Navigate to={`/articles/${search}`}></Navigate>}
        {response.length === 0 && (
          <Box flex={4}>
            <Box sx={{ width: { xs: "95%", md: "75%" }, margin: "30px auto" }}>
              <Box
                sx={{
                  backgroundColor: "#E5EDFF",
                  padding: "20px",
                  borderRadius: "10px",
                  position: "relative",
                  marginBottom: "10px",
                }}
              >
                <Box
                  component="form"
                  sx={{ width: { xs: "95%", md: "75%" }, margin: "0px auto" }}
                  onSubmit={handlePaperSubmit}
                >
                  <TextField
                    fullWidth
                    required
                    id="search"
                    value={search}
                    onChange={autoComplete}
                    placeholder="Search By Name, Author, Year"
                  ></TextField>
                </Box>
                {articles.length > 0 && (
                  <Box
                    sx={{
                      width: { xs: "95%", md: "75%" },
                      margin: "0px auto",
                      overflowY: "auto",
                      position: "absolute",
                      zIndex: 1000,
                      left: { xs: "2.5%", md: "12.5%" },
                      backgroundColor: "white",
                      padding: "20px",
                    }}
                  >
                    {articles.map((article) => {
                      return (
                        <Typography
                          variant="p"
                          key={article}
                          sx={{
                            display: "block",
                            marginBottom: "10px",
                            textAlign: "start",
                          }}
                        >
                          <span style={{ fontWeight: "bold" }}>
                            {article.title}
                          </span>
                          ,&nbsp;{article.authorsYear}
                        </Typography>
                      );
                    })}
                  </Box>
                )}
              </Box>
              <Box>
                <img
                  src={logo}
                  width="200px"
                  alt="MedWorkSmith Logo"
                  style={{ display: "inline-block" }}
                />

                <Typography
                  variant="p"
                  sx={{
                    display: "block",
                    marginTop: "20px",
                    fontWeight: "bold",
                  }}
                >
                  1.4b citation statement extracted and analyzed.
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    display: "block",
                    marginTop: "20px",
                    fontWeight: "bold",
                  }}
                >
                  200m articles indexed, preprints and datasets
                </Typography>
              </Box>
              <Stack
                direction={{ xs: "column", md: "row" }}
                sx={{
                  marginTop: "30px",
                  justifyContent: "space-between",

                  marginBottom: "30px",
                }}
                spacing={3}
              >
                <Box>
                  <Box>
                    <img
                      src={sun}
                      style={{
                        marginBottom: "20px",
                        display: "inline-block",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="p"
                    sx={{ display: "block", marginBottom: "20px" }}
                  >
                    Writing
                  </Typography>
                  {services.map((service, f) => {
                    return (
                      <Button
                        key={service}
                        sx={{
                          padding: "20px",
                          width: "100%",
                          fontSize: "85%",
                          display: "block",
                          backgroundColor: "#F5F5F5",
                          marginBottom: "20px",
                        }}
                      >
                        {service.title}
                      </Button>
                    );
                  })}
                </Box>
                <Box>
                  <Box>
                    <img
                      src={ai}
                      style={{
                        marginBottom: "20px",
                        display: "inline-block",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="p"
                    sx={{ display: "block", marginBottom: "20px" }}
                  >
                    AI Writers
                  </Typography>
                  {services2.map((service, f) => {
                    return (
                      <Button
                        key={service}
                        sx={{
                          padding: "20px",
                          width: "100%",
                          fontSize: "85%",
                          display: "block",
                          backgroundColor: "#F5F5F5",
                          marginBottom: "20px",
                        }}
                      >
                        {service.title}
                      </Button>
                    );
                  })}
                </Box>
                <Box>
                  <Box>
                    <img
                      src={expert}
                      style={{
                        marginBottom: "20px",
                        display: "inline-block",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="p"
                    sx={{ display: "block", marginBottom: "20px" }}
                  >
                    Expert Writers
                  </Typography>
                  {services3.map((service, f) => {
                    return (
                      <Button
                        key={service}
                        sx={{
                          padding: "20px",
                          width: "100%",
                          fontSize: "85%",
                          display: "block",
                          backgroundColor: "#F5F5F5",
                          marginBottom: "20px",
                        }}
                      >
                        {service.title}
                      </Button>
                    );
                  })}
                </Box>
              </Stack>
            </Box>
            <Box
              component="form"
              onSubmit={sendPrompt}
              sx={{
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
                <Button
                  type="submit"
                  startIcon={<SendIcon />}
                  flex={1}
                ></Button>
              </Stack>
            </Box>
          </Box>
        )}
        {response.length > 0 && (
          <ShowChats
            sendPrompt={sendPrompt}
            userMessages={userMessages}
            response={response}
            setPrompt={setPrompt}
            prompt={prompt}
            // chat={chat}
          />
        )}
      </Stack>
      {open && (
        <SimpleBackdrop
          open={open}
          handleClose={handleClose}
          handleOpen={handleOpen}
        />
      )}
    </Box>
  );
}

export default Chat;
