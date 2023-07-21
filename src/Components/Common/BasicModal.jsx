import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import * as React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "96%", md: "75%" },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ paper, handleOpen, open, handleClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Read the abstract of the paper {paper.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ padding: "20px" }}>
            {paper.abstract}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
