import { Box, Button, Table, Typography } from "@mui/material"
import "./tabledesign.css"
import Navbar from "../Common/NavBar"
import MobilePayment from "./MobilePayment"
const PaymentPage=()=>{
    const tableRows=[
        {
            first:"Literature Alert",
            second:"None",
            third:"Weekly",
            fourth:"Weekly",
        },
        {
            first:"Discovery tools",
            second:"10 input/ daily",
            third:"unlimited",
            fourth:"unlimited",
        },
        {
            first:"Visualization",
            second:"100 articles",
            third:"unlimited",
            fourth:"unlimited",
        },
        {
            first:"Collaboration",
            second:"None",
            third:"None",
            fourth:"unlimited",
        },
        {
            first:"Automate review and Editing",
            second:"None",
            third:"unlimited",
            fourth:"unlimited",
        },
        {
            first:"Spell checks",
            second:"unlimited",
            third:"unlimited",
            fourth:"unlimited",
        },
        {
            first:"Facts check",
            second:"none",
            third:"unlimited",
            fourth:"unlimited",
        },
        {
            first:"Reference",
            second:"none",
            third:"unlimited",
            fourth:"unlimited",
        },
        {
            first:"Export PDF",
            second:"none",
            third:"unlimited",
            fourth:"unlimited",
        },
        {
            first:"Support",
            second:"none",
            third:"none",
            fourth:"Available",
        },
        {
            first:"",
            second:<Button
            sx={{
             "&:hover": {
               backgroundColor: "#111111",
               color: "white",
             },
             backgroundColor: "#4730cd",
             width:"70%",
             marginRight:"10px",
             color:"white",
             paddingLeft:"50px",
             paddingRight:"50px",
             paddingTop:"10px",
             paddingBottom:"10px",
             border: "2px solid black",
             borderRadius: "10px",
             fontSize: "75%",
             margiRight:"10px",
             fontWeight: "bold",
             marginTop: "5px",
           }}
         >Select</Button>,
         third:<Button
         sx={{
          "&:hover": {
            backgroundColor: "#111111",
            color: "white",
          },
          backgroundColor: "#4730cd",
          width:"70%",
          marginRight:"10px",
          color:"white",
          paddingLeft:"50px",
          paddingRight:"50px",
          paddingTop:"10px",
          paddingBottom:"10px",
          border: "2px solid black",
          borderRadius: "10px",
          fontSize: "75%",
          margiRight:"10px",
          fontWeight: "bold",
          marginTop: "5px",
        }}
      >Select</Button>,
      fourth:<Button
      sx={{
       "&:hover": {
         backgroundColor: "#111111",
         color: "white",
       },
       backgroundColor: "#4730cd",
       width:"70%",
       marginRight:"10px",
       color:"white",
       paddingLeft:"50px",
       paddingRight:"50px",
       paddingTop:"10px",
       paddingBottom:"10px",
       border: "2px solid black",
       borderRadius: "10px",
       fontSize: "75%",
       margiRight:"10px",
       fontWeight: "bold",
       marginTop: "5px",
     }}
   >Select</Button>
        }
    ]
    return (
    <Box>
        <Navbar page="payment"/>
   
    <Box sx={{width:{xs:"90%",md:"75%"},margin:"30px auto"}}>
      
        <Typography variant="h6" sx={{fontWeight:"bold",marginBottom:"10px"}}><Typography variant="h4" sx={{display:"inline-flex",fontWeight:"bolder"}}>Medwordsmith</Typography>- AI powered search and discovery platform that helps researchers and scientist discover and understand scientific literature</Typography>
        <Typography variant="h4" sx={{marginBottom:"25px",fontWeight:"bold"}}>Pricing</Typography>
        <Box sx={{display:{xs:"none",md:"block"}}}>
       <table>
        <thead>
            <tr>
                <th style={{color:"red"}}>Features</th>
                <th style={{color:"red"}}>Free/ 7days trials</th>
                <th style={{color:"red"}}><p> $19.99/month</p><p>Individual</p></th>
                <th style={{color:"red"}}>Team/ Contact</th>
            </tr>
        </thead>
        <tbody>
            {tableRows.map(row=>{
              return(<tr>
                <td style={{fontWeight:"bold"}}>{row.first}</td>
                <td>{row.second}</td>
                <td>{row.third}</td>
                <td>{row.fourth}</td>
              </tr>)
            })}
           
        </tbody>
       </table>
       </Box>
       <Box sx={{display:{xs:"block",md:"none"}}}>
     
        <MobilePayment/>
       </Box>
    </Box>
    </Box>)
}
export default PaymentPage;