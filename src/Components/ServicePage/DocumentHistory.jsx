import ArticleIcon from "@mui/icons-material/Article";
import { Box, Button, Stack, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import * as React from "react";
import { NavLink } from "react-router-dom";
import BasicMenu from "./Menu";
import DescriptionIcon from "@mui/icons-material/Description";
import { baseURL } from "../../Config";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0),
  createData("Ice cream sandwich", 237, 9.0),
  createData("Eclair", 262, 16.0),
  createData("Cupcake", 305, 3.7),
  createData("Gingerbread", 356, 16.0),
];
function DocumentHistory({ createDocument, setDocumentId }) {
  const [documents, setDocuments] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(
        `${baseURL}/document/getdocuments?id=${localStorage.getItem(
          "id"
        )}`
      )
      .then((res) => {
        console.log(res.data.documents[0].id);
        setDocuments(res.data.documents);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box sx={{ marginTop: "10px", marginLeft: "20px", marginBottom: "20px" }}>
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          alignContent: "end",
          marginBottom:"10px",
          marginRight:"10px"
        }}
      >
        <Box flex={1}>
          <Typography variant="p" sx={{ display: "block",textAlign:"start",marginLeft:"10px" }}>
            <NavLink
              to="/"
              style={{ textDecoration: "none", color:"#735d58" }}
            >
              Home
            </NavLink>
          </Typography>
        </Box>
        <Box flex={1} sx={{ textAlign: "end" }}>
          <Stack direction="row" sx={{justifyContent:'space-between',alignItems:"center"}} >
          <Box sx={{flex:3}}></Box>
         <Box flex={2}onClick={createDocument} sx={{display:"flex",flexDirection:"row",padding:"10px",color:"#735d58",alignItems:"center",marginRight:"15px",  "&:hover":{
                backgroundColor:"#4730cd",
                color:"white"
               }, 
              "&:active": {
                backgroundColor: "#4730cd",
                boxShadow: "0 5px #666",
                transform: "translateY(4px)",
                color:"white"
              }
            }}>
          <ArticleIcon sx={{marginRight:"5px"}}/>
          <Typography variant="p" sx={{fontSize:"95%",fontWeight:"bold"}}>New Doocument </Typography>
         </Box>
          </Stack>
          
        </Box>
      </Stack>
      <hr></hr>

      {documents.length > 0 && (
        <TableContainer sx={{ width: "100%",color:"#735d58" }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color:"#735d58"}}>Name</TableCell>
                <TableCell sx={{ color:"#735d58"}}align="right">Words</TableCell>
                <TableCell sx={{ color:"#735d58"}}align="right">Created</TableCell>
                <TableCell sx={{ color:"#735d58"}}align="right">Options</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {documents.map((row) => (
                <TableRow
                  key={row}
                  sx={{
                    color:"#735d58",
                    "&:last-child td, &:last-child th": { border: 0 },
                    "&:hover": {
                      backgroundColor: "#FFF8E1",
                    },
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    onClick={(e) => setDocumentId(row.id)}
                  >
                    <Button
                      variant="text"
                      sx={{ color:"#735d58","&:hover":{
                        backgroundColor:"#4730cd",
                        color:"white"
                       },  }}
                      startIcon={<ArticleIcon />}
                    >
                      {" "}
                      {row.title}
                    </Button>
                  </TableCell>
                  <TableCell sx={{ color:"#735d58"}}align="right">{row.contents.length}</TableCell>
                  <TableCell sx={{ color:"#735d58"}}align="right">{row.date}</TableCell>
                  <TableCell sx={{ color:"#735d58"}}align="right">
                    {" "}
                    <BasicMenu url={row.filename} data={row}/>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {documents.length === 0 && (
        <Box>
          <Typography
            variant="h6"
            sx={{
              marginTop: "20px",
              display: "inline-block",
              marginBottom: "20px",
            }}
          >
            You have no documents created. Create a new one:
          </Typography>

          <Button
            variant="contained"
            sx={{
              display: "inline-block",
              padding: "10px 30px",
              marginLeft: "10px",
              color: "black",
              backgroundColor: "white",
              "&:hover":{
                backgroundColor:"#4730cd",
                color:"white"
               }, 
              "&:active": {
                backgroundColor: "#4730cd",
                boxShadow: "0 5px #666",
                transform: "translateY(4px)",
                color:"white"
              }
            }}
            startIcon={<ArticleIcon />}
            onClick={createDocument}
          >
            New Document
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default DocumentHistory;
