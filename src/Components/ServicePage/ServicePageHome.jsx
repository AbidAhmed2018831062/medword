import { Box, Stack } from "@mui/material";
import axios from "axios";
import parse from "html-react-parser";
import React, { useState } from "react";
import ChatGpt from "./ChatGpt";
import TextEditor from "./JodItEditor";
import SemanticSearch from "./SemanticSearch";
import ServicePageMenu from "./ServicePageMenu";
import { Navigate } from "react-router-dom";
import { baseURL } from "../../Config";
function ServicePageHome() {
  const [userMessages, setUserMessages] = useState([]);
  const [response, setResponse] = useState([]);
  const [chat, setChat] = useState(true);
  const [text, setText] = useState("");
  const [data, setData] = useState();
  const [semantic, setSemantic] = useState(false);
  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState([]);
  const [semFlex, setSemFlex] = useState(4);
  const [clientx, setClientx] = useState();
  const [papers, setPapers] = useState(false);
  const getFeedback = (data) => {
    const dat = parse(data);
    console.log(data);
    axios
      .post(`${baseURL}/feedback/getfeedback`, {
        article: dat.props ? dat.props.children : data,
        userMessages,
        response,
        
      })
      .then((res) => {
        console.log(res.data);
        ("");
        setResponse((content) => [...content, res.data]);

        setUserMessages((content) => [...content, "Feedback for your article"]);
        handleProfile("chat");
      })
      .catch((err) => console.log(err));
  };
  const newArticle = (url,pdfPaper) => {
    axios
      .post(`${baseURL}/chatgpt/gettext`, {
        url,
        userMessages,
        response2: response,
        pdfPaper
      })
      .then((res) => {
        console.log(res.data);
        ("");
        setResponse((content) => [...content, res.data]);

        setUserMessages((content) => [
          ...content,
          "All the text and data of the PDF has been sent to AI. You can ask questions about the paper and it will answer perfectly",
        ]);
        handleProfile("chat");
      })
      .catch((err) => {
        setResponse((content) => [
          ...content,
          { role: "assistant", content: "The pdf file cannot be read! Sorry!" },
        ]);

        setUserMessages((content) => [
          ...content,
          "All the text and data of the PDF has been sent to AI. You can ask questions about the paper and it will answer perfectly",
        ]);
        console.log(err);
      });
  };
  const handleProfile = (e) => {
    if (e === "chat") {
      setChat(true);
      setSemantic(false);
    } else {
      setChat(false);
      setSemantic(true);
    }
  };
  const handleDrag = (e) => {
    e.preventDefault();
    setClientx(e.clientX);
    var element = document.getElementById("drag");
    var position = element.getBoundingClientRect();
    var x = position.left;

    if (e.clientX > x) setSemFlex((flex) => flex + 0.01);
    else if (e.clientX < x) setSemFlex((flex) => flex - 0.01);
  };

  return (
    <Box>
    {!localStorage.getItem("id")&&<Navigate to="/unauthor"></Navigate>}
    <Stack direction="row">
        <Box flex={semFlex}>
          <ServicePageMenu handleProfile={handleProfile} />
          {semantic && (
            <SemanticSearch
              search={search}
              setArticles={setArticles}
              setSearch={setSearch}
              articles={articles}
              setText={setText}
              text={text}
              setPapers={setPapers}
              papers={papers}
              newArticle={newArticle}
            />
          )}
          {chat && (
            <ChatGpt
              setData={setData}
              data={data}
              userMessages={userMessages}
              setUserMessages={setUserMessages}
              response={response}
              setResponse={setResponse}
              setText={setText}
              text={text}
            />
          )}
        </Box>
        <Box
          flex={0.04}
          draggable
          onDrag={handleDrag}
          id="drag"
          sx={{ cursor: "row-resize", marginLeft: "10px" }}
        >
          <hr
            style={{ height: "100%", width: "7px", backgroundColor: "grey" }}
          ></hr>
        </Box>
        <Box flex={12}>
          <TextEditor data={data} setData={setData} getFeedback={getFeedback} />
        </Box>
      </Stack>
    </Box>
  );
}

export default ServicePageHome;
