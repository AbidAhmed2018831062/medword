import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BasicModal from "../Common/BasicModal";
import PaginationRounded from "../ServicePage/Pagination";
import Reactpdf from "./ReactPDF";
import { IconButton, Stack, styled } from "@mui/material";
import logo from "../../assets/images/logo.png";
import pdf from "../../assets/images/pdf.png";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import sem from  "../../assets/images/sem.svg";
import DownloadIcon from '@mui/icons-material/Download';
import "./design.css";
import { Link } from "react-router-dom";
function Articles({
  search,
 
  articles,
  setArticles,
  setText,
  newArticle,
  text,
  counter,
}) {
  const [clicked, setClicked] = useState(localStorage.getItem("url")?true:false);
  // const { search } = useParams();
  const [paper, setPaper] = useState({});
  const [total, setTotal] = useState();
  const [allpapers, setAllPapers] = useState([]);
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    console.log("hello");
    if(localStorage.getItem("url"))
    return;
    console.log(url);
    setAllPapers([]);
    setClicked(false);
    let papers = [];
    axios
      .get(
        `https://api.semanticscholar.org/graph/v1/paper/search?query=${search}&offset=${
          page * 10 - 10
        }`
      )
      .then((res) => {
        console.log(res);
        setTotal(res.data.total);
        setArticles(res.data.data);
        Array.from(res.data.data).forEach((article, i) => {
          axios
            .get(
              `https://api.semanticscholar.org/graph/v1/paper/${article.paperId}?fields=url,year,authors,title,abstract,referenceCount,citationCount,fieldsOfStudy,openAccessPdf`
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
  }, [ search,counter,page]);
  // useEffect(() => {
  //   console.log("hello");
  //   if(localStorage.getItem("url"))
  //   return;
  //   console.log(url);
  //   setAllPapers([]);
  //   let papers = [];
  //   axios
  //     .get(
  //       `https://api.semanticscholar.org/graph/v1/paper/search?query=${search}&offset=${
  //       0
  //       }`
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       setTotal(res.data.total);
  //       setArticles(res.data.data);
  //       Array.from(res.data.data).forEach((article, i) => {
  //         axios
  //           .get(
  //             `https://api.semanticscholar.org/graph/v1/paper/${article.paperId}?fields=url,year,authors,title,abstract,referenceCount,citationCount,fieldsOfStudy,openAccessPdf`
  //           )
  //           .then((res) => {
  //             console.log(res);
  //             setAllPapers((content) => [...content, res.data]);
  //           })
  //           .catch((err) => console.log(err));

  //         console.log(papers);
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#005082',
      color: '#fff',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));
  const [pdfPaper,setPdfPaper]=useState({});
  const [url, setUrl] = useState("");
  const arty=()=>{
    axios.get("https://europepmc.org/backend/ptpmcrender.fcgi?accid=PMC7081172&blobtype=pdf", {
  headers: {
    Referer: 'https://europepmc.org/backend/ptpmcrender.fcgi?accid=PMC7081172&blobtype=pdf',
    'X-Requested-With': 'XMLHttpRequest'
  }
}).then(function (response) {
    console.log(response.data);
  });
  }
  return (
    <Box>
      {/* <Navbar /> */}
      <Box sx={{ backgroundColor: "#F4F4F4", margin: "0px", padding: "0px",marginTop:"20px" }}>
        {allpapers.length===0&&!clicked&&(
          <div class="center">
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
        )}
        {allpapers.length > 0 && !clicked && (
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
              Search Result for {search}, Found: {total}
            </Typography>
            {allpapers.filter(e=>e.openAccessPdf?e.openAccessPdf.url.toString().includes(".pdf")?e:"":"").map((paper, i) => {
              return (
                <Box sx={{ boxShadow: "0 4px 12px rgba(0,0,0,.19)",
                marginBottom: "30px",
                textAlign:"start",
                backgroundColor: "white",padding:"20px",
                "&:hover":{
                    backgroundColor:"#EBF1F5"
                }}}>
                   <Typography sx={{marginBottom:"5px"}} variant="h6">
                    {paper.title?paper.title.substring(0,70):""}
                    </Typography>
                   <Box sx={{color:"grey"}}>
                    {paper.authors.slice(0,5).map((author,e)=>{
        
                    return <Typography variant="span"sx={{marginRight:"5px"}} key={author}>{author.name}</Typography>
                    }
                    )}
                    {paper.authors.length>5?"...":""}
                    <Typography variant="p" sx={{display:"block"}}>
                      {paper.venue}
                    </Typography>
                     <Typography variant="p" sx={{display:"block"}}>
                      {paper.referenceCount} References {paper.citationCount} Citation
                    </Typography>
                   </Box>
                   <Box>
                  
                        <LightTooltip title="MedwordSmith">
          <IconButton>
           
          <img src={logo} width="50px" height="30px"  onClick={(e) => {
              localStorage.setItem("url",paper.openAccessPdf.url);
                                setClicked(true);
                                setPdfPaper(paper);
                                setUrl(paper.openAccessPdf.url);
                              
                              }}/>
          </IconButton>
        </LightTooltip>
                         
                     
                    
                        <LightTooltip title="PDF Link">
          <IconButton>
            <a href={paper.openAccessPdf.url}>
          <img src={pdf} width="40px" height="40px"/>
          </a>
          </IconButton>
        </LightTooltip>
                           
                      
                       
                        <LightTooltip title="Semantic">
          <IconButton>
            <a href={paper.url}><img src={sem} width="40px" height="40px" target="_blank"/></a>
         
          </IconButton>
        </LightTooltip>
       {paper.openAccessPdf&&<Box sx={{display:"inline-block"}}>   {paper.openAccessPdf.url.toString().includes(".pdf")?<LightTooltip title="Download PDF">
          <IconButton>
          <a href={paper.openAccessPdf.url} download target="_blank"
  rel="noopener noreferrer"><DownloadIcon/></a>
         
          </IconButton>
        </LightTooltip>:<Button onClick={arty}>Download</Button>}
        </Box>}
                           
                  
                   </Box>
                   <Box>
                    <Stack direction="row"sx={{justifyContent:"space-between"}}>
                    <Typography flex={6} variant="p">{paper.abstract?paper.abstract.substring(0,150)+"...":""}</Typography>
                    <Button variant="text" flex={1} sx={{border:"0px",alignItems:"end"}}
                     onClick={(e) => {
                        setPaper(paper);
                        setOpen(true);
                      }}>Read More</Button>
                    </Stack>
                   </Box>
                </Box>
              );
            })}
            <PaginationRounded
              handleChange={handleChange}
              page={page}
              count={10000}
            />
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
        {clicked && (
          <Box>
            <Reactpdf url={url} setText={setText} newArticle={newArticle} pdfPaper={pdfPaper}/>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Articles;
