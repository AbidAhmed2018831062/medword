import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, InputBase, Stack } from "@mui/material";
import axios from "axios";
import JoditEditor from "jodit-react";
import React, { useEffect, useRef, useState } from "react";
import DocumentHistory from "./DocumentHistory";
import BasicMenu from "./Menu";
import { baseURL } from "../../Config";
function TextEditor({ data, setData, getFeedback }) {
  const [id, setDocumentId] = useState(-1);
  const editor = useRef(null);
  const [history, setHistory] = useState(true);
  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/docs/,
    placeholder: "Start typings...",
    height: "100vh",
    width: "100%",
    textAlign: "start",
  };
  const [title, setTitle] = useState("New Document");
  const [url, setUrl] = useState("");
  const createDocument = () => {
    axios
      .post(`${baseURL}/document/createdocument`, {
        userId: localStorage.getItem("id"),
        content: "Start",
        date: new Date().toLocaleTimeString(),
        forfile: new Date().getTime(),
      })
      .then((res) => {
        console.log(res);
        setHistory(false);
        setDocumentId(res.data[0].id);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (id === -1) return;
    axios
      .get(`${baseURL}/document/getdocument?id=${id}`)
      .then((res) => {
        console.log(res);
        setData(res.data[0].contents);
        setTitle(res.data[0].title);
        setUrl(res.data[0].filename);
        setHistory(false);
      })
      .catch((err) => console.log(err));
  }, [id]);
  const saveDocument = () => {
    console.log(data);
    axios
      .put(`${baseURL}/document/updatedocument`, {
        id,
        title,
        content: data,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ height: "100vh", overflowY: "scroll" }}>
      {history && (
        <DocumentHistory
          createDocument={createDocument}
          setDocumentId={setDocumentId}
        />
      )}
      {!history && (
        <Box>
          <Box>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                justifyContent: "space-between",
                padding: "10px",
                alignItems: "center",
              }}
            >
              <ArrowBackIcon
                flex={1}
                onClick={(e) => {
                  setDocumentId(-1);
                  setHistory(true);
                }}
              />
              <InputBase
                sx={{ ml: 1, flex: 5, borderBottom: "1px solid grey" }}
                placeholder="Search"
                value={title}
                onChange={(e) => setTitle(e.currentTarget.value)}
                inputProps={{ "aria-label": "search google maps" }}
              />
              <Button
                variant="outlined"
                sx={{
                  display: "block",
                  backgroundColor: "white",
                  flex: 1,
                  color: "black",
                }}
                onClick={(e) => getFeedback(data)}
              >
                Get Feedback
              </Button>
              <Button
                variant="outlined"
                sx={{
                  display: "block",
                  backgroundColor: "white",
                  flex: 1,
                  color: "black",
                }}
                onClick={saveDocument}
              >
                Save
              </Button>
              <BasicMenu flex={1} url={url} />
            </Stack>
          </Box>
          <JoditEditor
            ref={editor}
            value={data}
            style={{ height: "100vh" }}
            config={config}
            tabIndex={1} // tabIndex of textarea
            onBlur={(data) => setData(data)} // preferred to use only this option to update the content for performance reasons
          />
        </Box>
      )}
    </div>
  );
}

export default TextEditor;
