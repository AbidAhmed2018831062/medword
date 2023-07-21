import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import axios from "axios";
import * as React from "react";
import { Navigate } from "react-router-dom";
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

export default function AdminSignIn() {
  const [open1, setOpen1] = React.useState(false);
  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleOpen1 = () => {
    setOpen1(true);
  };
  const [navigate, setNavigate] = React.useState(false);
  const [error, setError] = React.useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen1(true);
    const data = new FormData(event.currentTarget);

    axios
      .post(`${baseURL}/admin/login`, {
        email: data.get("email"),
        password: data.get("password"),
      })
      .then((res) => {
        console.log(res);
        setNavigate(true);
        setOpen1(false);
      })
      .catch((err) => {
        setOpen1(false);
        setError(true);
        console.log(err);
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {navigate && <Navigate to="/admin/home"></Navigate>}
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Admin Signin
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
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            {error && (
              <p
                style={{
                  color: "red",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                Wrong email and password combination
              </p>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
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
