"use client";
import { Box, Button, Typography } from "@mui/material";
import { AppBarMenu } from "./components/AppBarMenu";

export default function Home() {
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
            flexDirection: "column",
            width: "50%",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#2E2E2E",
              fontWeight: "bold",
            }}
          >
            Ace your medical tests!
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
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Button
              variant="contained"
              sx={{ background: "#464033", textTransform: "none" }}
            >
              Get Started
            </Button>
            <Button sx={{ color: "#2E2E2E", textTransform: "none" }}>
              Learn more
            </Button>
          </Box>
        </section>
      </Box>
    </>
  );
}
