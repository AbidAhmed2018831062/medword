import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Stack, TextField } from '@mui/material';
import { baseURL } from "../../Config";

import axios from "axios";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {xs:200,md:400},
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function RenameTitle({open,handleClose,handleOpen,data}) {
    const [title,setTitle]=React.useState(data.title)
    const saveDocument = () => {
        console.log(data);
        axios
          .put(`${baseURL}/document/updatedocument`, {
            id:data.id,
            title,
            content: data.contents,
          })
          .then((res) =>{ console.log(res);
            handleClose();
        window.location.reload()})
          .catch((err) => {console.log(err);
            handleClose()});
      };
  return (
    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign:"center",marginBottom:"20px"}}>
           Rename
          </Typography>
          <TextField fullWidth value={title} onChange={e=>setTitle(e.currentTarget.value)} sx={{borderColor:"#FF8F00",pading:"10px 20px",borderRadius:"20px"}}/>
          <Stack direction="row" sx={{justifyContent:"space-between",marginTop:"20px"}}>
            <Button variant="contained"sx={{backgroundColor:"#FF8F00",color:"white",padding:"10px 20px"}} onClick={saveDocument}>Save</Button>
            <Button variant="text" onClick={handleClose}>Cancel</Button>
          </Stack>
        </Box>
      </Modal>
   
  );
}