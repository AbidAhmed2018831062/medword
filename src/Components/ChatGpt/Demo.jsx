// import { Box, Button, IconButton, Stack, Typography, styled } from "@mui/material";
// import logo from "../../assets/images/logo.png";
// import pdf from "../../assets/images/pdf.png";
// import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
// import sem from  "../../assets/images/sem.svg";
// import { useState } from "react";
// function Demo(){
//   const paper= {
//     "paperId": "649def34f8be52c8b66281af98ae884c09aef38b",
//     "publicationVenue": {
//         "id": "01103732-3808-4930-b8e4-7e9e68d5c68d",
//         "name": "North American Chapter of the Association for Computational Linguistics",
//         "type": "conference",
//         "alternate_names": [
//             "North Am Chapter Assoc Comput Linguistics",
//             "NAACL"
//         ],
//         "url": "https://www.aclweb.org/portal/naacl"
//     },
//     "url": "https://www.semanticscholar.org/paper/649def34f8be52c8b66281af98ae884c09aef38b",
//     "title": "Construction of the Literature Graph in Semantic Scholar",
//     "abstract": "We describe a deployed scalable system for organizing published scientific literature into a heterogeneous graph to facilitate algorithmic manipulation and discovery. The resulting literature graph consists of more than 280M nodes, representing papers, authors, entities and various interactions between them (e.g., authorships, citations, entity mentions). We reduce literature graph construction into familiar NLP tasks (e.g., entity extraction and linking), point out research challenges due to differences from standard formulations of these tasks, and report empirical results for each task. The methods described in this paper are used to enable semantic features in www.semanticscholar.org.",
//     "venue": "North American Chapter of the Association for Computational Linguistics",
//     "year": 2018,
//     "referenceCount": 27,
//     "citationCount": 315,
//     "openAccessPdf": {
//         "url": "https://www.aclweb.org/anthology/N18-3011.pdf",
//         "status": "HYBRID"
//     },
//     "fieldsOfStudy": [
//         "Computer Science"
//     ],
//     "authors": [
//         {
//             "authorId": "145585097",
//             "name": "Waleed Ammar"
//         },
//         {
//             "authorId": "3458736",
//             "name": "Dirk Groeneveld"
//         },
//         {
//             "authorId": "1857797",
//             "name": "Chandra Bhagavatula"
//         },
//         {
//             "authorId": "46181066",
//             "name": "Iz Beltagy"
//         },
//         {
//             "authorId": "46230609",
//             "name": "Miles Crawford"
//         },
//         {
//             "authorId": "145612610",
//             "name": "Doug Downey"
//         },
//         {
//             "authorId": "38092776",
//             "name": "Jason Dunkelberger"
//         },
//         {
//             "authorId": "143718836",
//             "name": "Ahmed Elgohary"
//         },
//         {
//             "authorId": "46411828",
//             "name": "Sergey Feldman"
//         },
//         {
//             "authorId": "4480314",
//             "name": "Vu A. Ha"
//         },
//         {
//             "authorId": "143967880",
//             "name": "Rodney Michael Kinney"
//         },
//         {
//             "authorId": "41018147",
//             "name": "Sebastian Kohlmeier"
//         },
//         {
//             "authorId": "46258841",
//             "name": "Kyle Lo"
//         },
//         {
//             "authorId": "144240185",
//             "name": "Tyler C. Murray"
//         },
//         {
//             "authorId": "46256862",
//             "name": "Hsu-Han Ooi"
//         },
//         {
//             "authorId": "39139825",
//             "name": "Matthew E. Peters"
//         },
//         {
//             "authorId": "39561369",
//             "name": "Joanna L. Power"
//         },
//         {
//             "authorId": "46181683",
//             "name": "Sam Skjonsberg"
//         },
//         {
//             "authorId": "31860505",
//             "name": "Lucy Lu Wang"
//         },
//         {
//             "authorId": "46212260",
//             "name": "Christopher Wilhelm"
//         },
//         {
//             "authorId": "2112339497",
//             "name": "Zheng Yuan"
//         },
//         {
//             "authorId": "15292561",
//             "name": "Madeleine van Zuylen"
//         },
//         {
//             "authorId": "1741101",
//             "name": "Oren Etzioni"
//         }
//     ]
// }
// const LightTooltip = styled(({ className, ...props }) => (
//     <Tooltip {...props} classes={{ popper: className }} />
//   ))(({ theme }) => ({
//     [`& .${tooltipClasses.tooltip}`]: {
//       backgroundColor: '#005082',
//       color: '#fff',
//       boxShadow: theme.shadows[1],
//       fontSize: 11,
//     },
//   }));
//   const [clicked,setClicked]=useState(false);
//     return(
//         <Box sx={{ boxShadow: "0px 48px 80px -3px rgb(0 0 0 / 7%)",
//         marginBottom: "30px",
//         textAlign:"start",
//         backgroundColor: "white",padding:"20px",
//         "&:hover":{
//             backgroundColor:"#EBF1F5"
//         }}}>
//            <Typography sx={{marginBottom:"5px"}} variant="h5">{paper.title.substring(0,150)}</Typography>
//            <Box sx={{color:"grey"}}>
//             {paper.authors.slice(0,5).map((author,e)=>{

//             return <Typography variant="span"sx={{marginRight:"5px"}} key={author}>{author.name}</Typography>
//             }
//             )}
//             {paper.authors.length>5?"...":""}
//             <Typography variant="p" sx={{display:"block"}}>
//               {paper.venue}
//             </Typography>
//              <Typography variant="p" sx={{display:"block"}}>
//               {paper.referenceCount} References {paper.citationCount} Citation
//             </Typography>
//            </Box>
//            <Box>
          
//                 <LightTooltip title="MedwordSmith">
//   <IconButton>
   
//   <img src={logo} width="50px" height="30px"  onClick={(e) => {
//                         setClicked(true);

//                         setUrl(paper.openAccessPdf.url);
//                       }}/>
//   </IconButton>
// </LightTooltip>
                 
             
            
//                 <LightTooltip title="PDF Link">
//   <IconButton>
//     <a href={paper.openAccessPdf.url}>
//   <img src={pdf} width="40px" height="40px"/>
//   </a>
//   </IconButton>
// </LightTooltip>
                   
              
               
//                 <LightTooltip title="Semantic">
//   <IconButton>
//     <a href={paper.url}><img src={sem} width="40px" height="40px" target="_blank"/></a>
 
//   </IconButton>
// </LightTooltip>
                   
          
//            </Box>
//            <Box>
//             <Stack direction="row"sx={{justifyContent:"space-between"}}>
//             <Typography flex={4} variant="p">{paper.abstract.substring(0,320)+"..."}</Typography>
//             <Button variant="text" flex={1} sx={{border:"0px",alignItems:"end"}}
//              onClick={(e) => {
//                 setPaper(paper);
//                 setOpen(true);
//               }}>Read More</Button>
//             </Stack>
//            </Box>
//         </Box>
//     )
// }
// export default Demo;