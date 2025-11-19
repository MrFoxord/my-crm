"use client";

import { CacheProvider } from "@emotion/react";
import createEmotionCache from "./api/caches/createEmotionCache";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const clientSideEmotionCache = createEmotionCache();
const theme = createTheme();

export default function Page() {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Typography variant="h4">Welcome to My CRM</Typography>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}
