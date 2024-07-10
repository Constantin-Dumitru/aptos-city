import React, { FC } from "react";
import { Stack, Typography } from "@mui/material";

const Footer: FC = () => (
  <Stack
    sx={{
      width: "100vw",
      padding: "24px 0",
      background: "#010101",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Typography
      sx={{
        color: "#BCBCBC",
        fontSize: '14px'
      }}
    >
      Made with ❤️ by © ESTAR.GAMES - 2024
    </Typography>
  </Stack>
);

export default Footer;
