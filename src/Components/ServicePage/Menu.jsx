import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import RenameTitle from "./RenameTitle";
import { Stack, Typography } from "@mui/material";
import SaveAsIcon from '@mui/icons-material/SaveAs';
import HtmlIcon from '@mui/icons-material/Html';
export default function BasicMenu({ url,data }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [title,setTitle]=React.useState(false);
  
  const handleOpen1 = () =>{
    console.log(data);
    setTitle(true);}
  const handleClose1 = () => setTitle(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<MoreVertIcon sx={{ color: "black" }} />}
      ></Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
          <MenuItem onClick={handleOpen1} sx={{marginBottom:"10px"}}>
        <Stack direction="row" spacing={2}sx={{alignItems:"center",fontSize:"95%"}}>
          <SaveAsIcon/>
          <Typography variant="p">Rename</Typography>
        </Stack>
        
        </MenuItem>
        <MenuItem onClick={handleClose}  sx={{marginBottom:"10px",fontSize:"95%"}}>
        <Stack direction="row" spacing={2}sx={{alignItems:"center",fontSize:"95%"}}>
          <HtmlIcon/>
          <a href={`../assets/${url}.html`} download>
            Download As HTML
          </a>
        </Stack>
        </MenuItem>
      </Menu>
      {title&&<RenameTitle open={title}handleClose={handleClose1}handleOpen={handleOpen1} data={data}/>}
    </div>
  );
}
