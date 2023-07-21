import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { pdfjs } from "react-pdf";
export default function Reactpdf({ url, setText, newArticle,pdfPaper }) {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    console.log(url);
    if(url==="")return;
    newArticle(localStorage.getItem("url"),pdfPaper);
  }, []);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Box sx={{ width: "100%",marginTOp:"30px" }} flex={1}>
      {/* <Document
        file={{
          url: "https://openresearch-repository.anu.edu.au/bitstream/1885/114776/2/b1105086x.pdf",
        }}
        crossOrigin="anonymous"
        options={{
          cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
          cMapPacked: true,
          crossOrigin: "*",
          withCredentials: true,
          httpHeaders: {
            method: "GET",
            mode: "no-cors",
          },
        }}
        onLoadSuccess={onDocumentLoadSuccess}
        style={{ width: "100%" }}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p> */}
      <object data={localStorage.getItem("url")} type="application/pdf" width="100%" height="800px">
        <p>
          Unable to display PDF file. <a href={localStorage.getItem("url")}>Download</a> instead.
        </p>
      </object>
    </Box>
  );
}
