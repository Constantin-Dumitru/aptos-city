import React, { FC } from "react";
import { Stack, Typography, Link } from "@mui/material";
import { SimpleContainer } from "../../../shared/containers";
import BorderImg from "./../../../shared/containers/SimpleContainer.svg";
import Container2 from "./../../../shared/containers/ButtonClip.svg";
import { ArrowIcon } from "../../../shared/icons";

const TitleWithLinks: FC = () => (
  <Stack>
    <Stack
      sx={{
        "&>*": {
          fontSize: {
            xs: "32px",
            md: "64px",
            lg: "92px",
          },
          color: "#FFFFFF",
        },
      }}
      spacing={-2}
    >
      <Typography>APTOS</Typography>
      <Typography>CITY</Typography>
      <Typography>PROJECT</Typography>
    </Stack>
    <Stack gap={2} sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <Link
        href="https://estar.games/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ textDecoration: "none" }}
      >
        <Stack
          sx={{
            background: `url(${Container2})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: {
              xs: "180px",
              sm: "240px",
              md: "360px",
            },
            height: {
              xs: "36px",
              md: "64px",
            },
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: {
              xs: "4px",
              md: "16px",
            },
            transition: "all 0.2s ease-in-out",
            cursor: "pointer",
            "&:hover": {
              gap: "24px",
            },
          }}
        >
          <Typography sx={{ color: "#010101" }}>FOLLOW US</Typography>
          <ArrowIcon sx={{ stroke: "#010101" }} />
        </Stack>
      </Link>
      <Stack
        sx={{
          position: "relative",
          width: "max-content",
          height: {
            xs: "36px",
            md: "64px",
          },
          minWidth: {
            xs: "192px",
            md: "104px",
          },
          // borderImage: `url(${BorderImg})`,
          // borderWidth: '0 200px',
          // borderStyle: 'solid',
          background: `url(${BorderImg})`,
          alignItems: "center",
          justifyContent: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          cursor: "pointer",
        }}
      >
        <Typography>SOON</Typography>
      </Stack>
    </Stack>
  </Stack>
);

export default TitleWithLinks;
