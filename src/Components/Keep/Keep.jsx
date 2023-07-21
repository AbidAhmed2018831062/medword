import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import BasicModal from "../Common/BasicModal";

function Articles({ search }) {
  // const { search } = useParams();
  const [paper, setPaper] = useState({});
  const [allpapers, setAllPapers] = useState([]);
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    let papers = [];
    axios
      .get(
        `https://api.semanticscholar.org/graph/v1/paper/autocomplete?query=${search}`
      )
      .then((res) => {
        console.log(res);
        setArticles(res.data.matches);
        Array.from(res.data.matches).forEach((article, i) => {
          axios
            .get(
              `https://api.semanticscholar.org/graph/v1/paper/${article.id}?fields=url,year,authors,title,abstract,referenceCount,citationCount,fieldsOfStudy,openAccessPdf`
            )
            .then((res) => {
              console.log(res);
              setAllPapers((content) => [...content, res.data]);
            })
            .catch((err) => console.log(err));

          console.log(papers);
        });
      })
      .catch((err) => console.log(err));
  }, []);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      {/* <Navbar /> */}
      <Box sx={{ backgroundColor: "#F4F4F4", margin: "0px", padding: "0px" }}>
        {allpapers.length > 0 && (
          <Box
            sx={{
              width: {
                width: "95%",
                margin: "0px auto",
                paddingTop: "30px",
                paddingBottom: "30px",
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: "30px" }}
            >
              Search Result for {search}, Found: {allpapers.length}
            </Typography>
            {allpapers.map((paper, i) => {
              return (
                <Box
                  sx={{
                    boxShadow: "0px 48px 80px -3px rgb(0 0 0 / 7%)",
                    marginBottom: "30px",
                    backgroundColor: "white",
                    padding: "30px",
                    borderRadius: "10px",
                    textAlign: "start",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      display: "block",
                    }}
                  >
                    {paper.title}, {paper.year}
                  </Typography>
                  <Box>
                    {paper.authors.map((author) => {
                      return (
                        <Typography
                          key={author}
                          variant="p"
                          sx={{
                            display: "inline-block",
                            marginBottom: "20px",
                            color: "grey",
                          }}
                        >
                          {author.name},
                        </Typography>
                      );
                    })}
                  </Box>
                  <Box sx={{ marginTop: "10px", marginBottom: "20px" }}>
                    <ul>
                      <li style={{ marginBottom: "10px", marginLeft: "10px" }}>
                        Reference Count:{" "}
                        <span style={{ fontWeight: "bold" }}>
                          {paper.referenceCount}
                        </span>
                      </li>
                      <li style={{ marginBottom: "10px", marginLeft: "10px" }}>
                        Citation Count:{" "}
                        <span style={{ fontWeight: "bold" }}>
                          {paper.citationCount}
                        </span>
                      </li>
                      <li style={{ marginBottom: "10px", marginLeft: "10px" }}>
                        Field of Study:{" "}
                        {paper.fieldsOfStudy.map((field) => {
                          return (
                            <Typography
                              variant="span"
                              sx={{ fontWeight: "bold" }}
                              key={field}
                            >
                              {field},
                            </Typography>
                          );
                        })}
                      </li>
                    </ul>
                  </Box>
                  <Button variant="text">
                    <NavLink
                      to={`/editor/${paper.paperId}`}
                      style={{ textDecoration: "none", marginRigt: "10px" }}
                    >
                      View Full Text
                    </NavLink>
                  </Button>
                  <Button
                    variant="text"
                    onClick={(e) => {
                      setPaper(paper);
                      setOpen(true);
                    }}
                  >
                    Read Abstract
                  </Button>
                </Box>
              );
            })}
          </Box>
        )}
        {open && (
          <BasicModal
            paper={paper}
            open={open}
            handleClose={handleClose}
            handleOpen={handleOpen}
          />
        )}
      </Box>
    </Box>
  );
}

export default Articles;
