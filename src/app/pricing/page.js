"use client";
import React from "react";
import { AppBarMenu } from "../components/AppBarMenu";
import { Box, Button, Paper, Typography } from "@mui/material";

const page = () => {
  return (
    <>
      <AppBarMenu />
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <section
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Paper
            elevation={1}
            sx={{ margin: "2rem", padding: "2rem", width: "30%" }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#2E2E2E",
              }}
            >
              Anual pack
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: "#2E2E2E",
              }}
            >
              $100 usd
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2E2E2E",
              }}
            >
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
            </Typography>
            <Button
              variant="contained"
              sx={{ background: "#464033", textTransform: "none" }}
            >
              Go to Payment
            </Button>
          </Paper>
          <Paper
            elevation={3}
            sx={{ margin: "2rem", padding: "2rem", width: "30%" }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#2E2E2E",
              }}
            >
              Monthly pack
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: "#2E2E2E",
              }}
            >
              $10 usd
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2E2E2E",
              }}
            >
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
            </Typography>
            <Button
              variant="contained"
              sx={{ background: "#464033", textTransform: "none" }}
            >
              Go to Payment
            </Button>
          </Paper>
        </section>
      </Box>
    </>
  );
};

export default page;
