import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Cookies from "js-cookie";
import * as React from "react";
import { baseURL } from "../../Config";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { md: "45%", xs: "85%" },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: { md: 4, xs: 2 },
};

export default function ResetModal({ open, handleClose, data }) {
  const reset = (e) => {
    e.preventDefault();
    const data1 = new FormData(e.currentTarget);
    const t = parseInt(data1.get("allocate")) * 60;
    axios
      .put(`${baseURL}/admin/time`, {
        date: new Date().getTime(),
        time: t,
        id: data.id,
      })
      .then((res) => {
        Cookies.set("time", data1.get("allocate"), { expires: 1 });
        Cookies.set("date", new Date().getTime(), { expires: 1 });
        window.location.reload();
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h5"
          sx={{ fontWeight: "bold", textAlign: "center", color: "black" }}
        >
          Allocate time to use the service page to this user (in minutes):
        </Typography>
        <Box component="form" onSubmit={reset} sx={{ marginTop: "20px" }}>
          <TextField
            required
            fullWidth
            id="allocate"
            name="allocate"
            placeholder="Enter minutes in a day a user can access the page:"
          ></TextField>
          <Button
            type="submit"
            sx={{
              display: "block",
              width: "50%",
              textAlign: "center",
              marginTop: "20px",
            }}
            variant="contained"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
