import GoogleIcon from "@mui/icons-material/Google";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Cookies from "js-cookie";
import * as React from "react";
import { Navigate, NavLink } from "react-router-dom";
import SimpleBackdrop from "../Common/Backdrop";
import { baseURL } from "../../Config";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function CreateAdmin() {
  const [open1, setOpen1] = React.useState(false);
  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleOpen1 = () => {
    setOpen1(true);
  };
  const [adminCreated,setAdminCreated]=React.useState(false);
  const [navigate, setNavigate] = React.useState(false);
  const [error, setError] = React.useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen1(true);
    const data = new FormData(event.currentTarget);

    axios
      .post(`${baseURL}/admin/createadmin`, {
        email: data.get("email"),
        password: data.get("password"),
        name: data.get("name"),
      })
      .then((res) => {
        console.log(res);

        Cookies.set("reload", 1, { expires: 1 });

        Cookies.set("id", res.data[0].id, { expires: 1 });
        Cookies.set("remtime", res.data[0].remtime, { expires: 1 });
        Cookies.set("time", res.data[0].time, { expires: 1 });
        Cookies.set("email", res.data[0].email, { expires: 1 });
        Cookies.set("name", res.data[0].name, { expires: 1 });
        setNavigate(true);
        setOpen1(false);
        setAdminCreated(true);
      })
      .catch((err) => {
        setOpen1(false);
        setError(true);
        console.log(err);
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
    {!adminCreated&&  <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
       
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           Create A New Admin 
         </Typography>
       
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Enter Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            {error && (
              <p
                style={{
                  color: "red",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                The email already exists or an error occured
              </p>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Create Admin
            </Button>
          
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>}
      {adminCreated&&<Box sx={{marginTop:"30px"}}>
        <Typography variant="h3">A new admin has been created</Typography>
        <Typography variant="h5">Go to home from <NavLink to="/admin/home">here</NavLink></Typography>
        </Box>}
      {open && (
        <SimpleBackdrop
          open={open1}
          handleOpen={handleOpen1}
          handleClose={handleClose1}
        />
      )}
    </ThemeProvider>
  );
}
