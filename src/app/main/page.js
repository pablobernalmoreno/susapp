"use client";
import React from "react";
import { AppBarMenu } from "../components/AppBarMenu";
import { Typography } from "@mui/material";
import { Questions } from "../components/Questions";

const page = () => {
  return (
    <>
      <AppBarMenu />
      <main
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#2E2E2E",
            fontWeight: "bold",
          }}
        >
            Practice makes perfect!
        </Typography>
        <Questions />
      </main>
    </>
  );
};

export default page;
