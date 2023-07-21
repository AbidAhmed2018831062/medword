import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Stack } from '@mui/material';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function MobilePayment() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
 
]

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="Free"sx={{fontWeight:"bold"}} {...a11yProps(0)} />
          <Tab label="Individual" {...a11yProps(1)} />
          <Tab label="Team" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box>
            <Stack direction="row" sx={{justifyContent:"space-between",marginBottom:"20px"}}>
                <Typography variant='h6' sx={{fontWeight:"bold",color:"black"}}>Free</Typography>
                <Typography variant='h6' sx={{fontWeight:"bold",color:"black"}}>7 days Trial</Typography>
            </Stack>
            <Box>
                {tableRows.map(row=>
                    <Typography variant='p' sx={{display:"block",textAlign:"start",marginBottom:"10px"}}><span style={{fontWeight:"bold"}}>{row.first}</span>: {row.second}</Typography>
                )}
            </Box>
            <Button
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
        </Box>

      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Box>
            <Stack direction="row" sx={{justifyContent:"space-between",marginBottom:"20px"}}>
                <Typography variant='h6' sx={{fontWeight:"bold",color:"black"}}>Free</Typography>
                <Typography variant='h6' sx={{fontWeight:"bold",color:"black"}}>7 days Trial</Typography>
            </Stack>
            <Box>
                {tableRows.map(row=>
                    <Typography variant='p' sx={{display:"block",textAlign:"start",marginBottom:"10px"}}><span style={{fontWeight:"bold"}}>{row.first}</span>: {row.third}</Typography>
                )}
            </Box>
            <Button
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
        </Box>

      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <Box>
            <Stack direction="row" sx={{justifyContent:"space-between",marginBottom:"20px"}}>
                <Typography variant='h6' sx={{fontWeight:"bold",color:"black"}}>Free</Typography>
                <Typography variant='h6' sx={{fontWeight:"bold",color:"black"}}>7 days Trial</Typography>
            </Stack>
            <Box>
                {tableRows.map(row=>
                    <Typography variant='p' sx={{display:"block",textAlign:"start",marginBottom:"10px"}}><span style={{fontWeight:"bold"}}>{row.first}</span>: {row.fourth}</Typography>
                )}
            </Box>
            <Button
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
        </Box>

      </CustomTabPanel>
    </Box>
  );
}