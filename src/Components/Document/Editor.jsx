import { Box, Stack } from "@mui/material";
import {
  DocumentEditorContainerComponent,
  Toolbar,
} from "@syncfusion/ej2-react-documenteditor";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Reactpdf from "../ChatGpt/ReactPDF";
import { baseURL } from "../../Config";
DocumentEditorContainerComponent.Inject(Toolbar);
function Editor() {
  const { url } = useParams();
  const [paper, setPaper] = useState({});
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

  const formattedTime = React.useMemo(() => {
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(0);
    //setRemtime(remtime - time);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }, [time]);

  useEffect(() => {
    axios
      .get(
        `https://api.semanticscholar.org/graph/v1/paper/${url}?fields=url,year,authors,title,abstract,referenceCount,citationCount,fieldsOfStudy,openAccessPdf`
      )
      .then((res) => {
        console.log(res);
        setPaper(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {remtime <= 0 && showRem && <Navigate to="/unauthor"></Navigate>}
      {Object.keys(paper).length > 0 && (
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{
            justifyContent: "space-between",
            marginTop: "20px",
            marginBottom: "20px",
          }}
          spacing={2}
        >
          <Box flex={3}>
            <Box sx={{ width: "600px" }}>
              <Reactpdf url={paper.openAccessPdf.url} />
            </Box>
          </Box>
          <Box flex={1} sx={{ marginTop: "20px" }}>
            <DocumentEditorContainerComponent
              id="container"
              height={"100vh"}
              width="700px"
              serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
              enableToolbar={true}
            />
          </Box>
          {remtime}
        </Stack>
      )}
    </div>
  );
}

export default Editor;
