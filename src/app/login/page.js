"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  TextField,
  Typography,
  Grid,
} from "@mui/material";
import Image from "next/image";

const page = () => {
  const [userData, setUserData] = useState({ userName: "", userPassword: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showError, setShowError] = useState(false);

  const correctUser = { userName: "admin@admin.com", userPassword: "admin" };

  const handleForm = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    if (
      userData.userName !== correctUser.userName ||
      userData.userPassword !== correctUser.userPassword
    ) {
      setShowError(true);
    } else {
      setShowError(false);
      window.location.href = "/main";
    }
  };

  return (
    <Grid container spacing={2} sx={{ height: "100vh", background: "#ffffff" }}>
      <Grid size={6} sx={{ height: "100%" }}>
        <Grid
          container
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "50px 0",
          }}
        >
          <Image
            src="/GoogleLogin.png"
            width={650}
            height={120}
            alt="googleLogin"
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              my: 2,
              paddingTop: "50px",
            }}
          >
            <Divider
              sx={{ flexGrow: 1, borderColor: "grey.300", width: "20vw" }}
            />
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "grey.400",
                mx: 2,
              }}
            />
            <Divider
              sx={{ flexGrow: 1, borderColor: "grey.300", width: "20vw" }}
            />
          </Box>
        </Grid>
        <Grid
          container
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <form
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onSubmit={handleSubmit}
          >
            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                textTransform: "none",
                color: "#2E2E2E",
                fontWeight: "bold",
              }}
            >
              User
            </Typography>
            <TextField
              id="userName"
              variant="outlined"
              value={userData.userName}
              onChange={handleForm}
              sx={{ width: "80%", margin: "10px 0" }}
            />
            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                textTransform: "none",
                color: "#2E2E2E",
                fontWeight: "bold",
              }}
            >
              Password
            </Typography>
            <TextField
              id="userPassword"
              variant="outlined"
              onChange={handleForm}
              type={showPassword ? "text" : "password"}
              value={userData.userPassword}
              error={showError}
              helperText={showError ? "Usuario o contraseña incorrectos" : ""}
              sx={{ width: "80%", margin: "10px 0" }}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: "#2E2E2E",
                width: "50%",
                margin: "20px",
                fontSize: "15px",
              }}
              onClick={handleSubmit}
            >
              Log In
            </Button>
            <Button
              variant="text"
              color="primary"
              sx={{
                width: "50%",
                margin: "20px",
                fontSize: "15px",
              }}
            >
              Cant log in?
            </Button>
          </form>
        </Grid>
      </Grid>
      <Grid size={6} sx={{ height: "100%" }}>
        <Image
          src="/MedPoster.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100vh" }}
          alt="poster"
        />
      </Grid>
    </Grid>
  );
};

export default page;
