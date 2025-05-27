"use client";
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";

export const AppBarMenu = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "none" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <IconButton>
              <LocalHospitalIcon sx={{ color: "#2E2E2E" }} />
            </IconButton>
          </Box>
          <Box>
            <Button
              sx={{
                textTransform: "none",
                color: "#2E2E2E",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              About Us
            </Button>
            <Button
              href="/pricing"
              sx={{
                textTransform: "none",
                color: "#2E2E2E",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Pricing
            </Button>
          </Box>
          <Box>
            <Button
              sx={{
                textTransform: "none",
                color: "#2E2E2E",
                fontWeight: "bold",
                fontSize: "18px",
              }}
              href="/login"
            >
              Log in <ArrowForwardIcon />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
