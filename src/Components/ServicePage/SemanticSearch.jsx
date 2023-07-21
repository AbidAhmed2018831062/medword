import SearchIcon from "@mui/icons-material/Search";
import { Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import axios from "axios";
import React, { useState } from "react";
import Articles from "../ChatGpt/Articles";
function SemanticSearch({
  articles,
  setSearch,
  newArticle,
  setPapers,
  papers,
  search,
  setArticles,
  setText,
  text,
}) {
  console.log(articles);
  const [counter,setCounter]=useState(0)
  const [showArticles, setShowArticles] = useState(false);
  // const autoComplete = (e) => {
  //   e.preventDefault();
  //   setPapers(false);
  //   setSearch(e.currentTarget.value);
  //   if (
  //     e.currentTarget.value === "" ||
  //     e.currentTarget.value === null ||
  //     e.currentTarget.value === "undefined"
  //   ) {
  //     setArticles([]);
  //     return;
  //   }
  //   axios
  //     .get(
  //       `https://api.semanticscholar.org/graph/v1/paper/search?query=${e.currentTarget.value}`
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       if (res.data.total === 0) return;
  //       setShowArticles(true);
  //       setArticles(res.data.data);
  //     })
  //     .catch((err) => console.log(err));
  // };
  const handlePaperSubmit = (e) => {
    console.log(search);
    setCounter(counter=>counter+1);

    localStorage.removeItem("url");
    setPapers(true);
    e.preventDefault();
    setArticles([]);
    setShowArticles(false);
   
  };
  
  return (
    <Box>
      <Box sx={{ position: "relative" }}>
        <Box
          component="form"
          sx={{
            p: "2px 0px",
            paddingBotton: "0px",
            display: "flex",
            alignItems: "center",
            width: "100%",
            borderBottom: "1px solid #E8E9EB",
            backgroundColor: "#E8E9EB",
          }}
          onSubmit={handlePaperSubmit}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            value={search}
             onChange={(e) => setSearch(e.currentTarget.value)}
           
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={handlePaperSubmit}
          >
            <SearchIcon />
          </IconButton>
        </Box>
        {articles.length > 0 && (
          <Box
            sx={{
              margin: "0px auto",
              overflowY: "auto",
              position: "absolute",
              zIndex: 1000,
              width: "100%",
              backgroundColor: "white",
              padding: "10px",
            }}
          >
            {showArticles &&
              articles.map((article) => {
                return (
                  <Typography
                    variant="p"
                    key={article}
                    onClick={(e) => setSearch(article.title)}
                    sx={{
                      cursor: "pointer",
                      display: "block",
                      marginBottom: "10px",
                      textAlign: "start",
                    }}
                  >
                    <span style={{ fontWeight: "bold" }}>{article.title}</span>
                    ,&nbsp;{article.authorsYear}
                  </Typography>
                );
              })}
          </Box>
        )}
      </Box>
      {papers && (
        <Articles
          newArticle={newArticle}
          search={search}
          setArticles={setArticles}
          articles={articles}
          counter={counter}
          setText={setText}
          text={text}
        />
      )}
    </Box>
  );
}

export default SemanticSearch;
