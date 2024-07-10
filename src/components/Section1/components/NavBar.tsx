import React, { FC } from "react";
import { Grid, Typography, Stack, Link } from "@mui/material";

const NavBar: FC = () => (
  <Grid
    container
    sx={{
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: "0",
      left: "0",
      background: "#0101012E",
      // padding: "16px 0px",
      borderBottom: "2px solid #010101",
      padding: {
        xs: '16px 16px',
        md: '16px 0px'
      }
    }}
  >
    <Grid
      item
      container
      xs={12}
      md={10}
      sx={{ alignItems: "center", justifyContent: "space-between" }}
    >
      <Typography sx={{ color: "#FFFFFF", fontWeight: "900" }}>
        APTOS CITY
      </Typography>
      <Stack
        direction="row"
        gap="16px"
        sx={{
          "&>*": {
            color: "#FFF",
            fontSize: "16px",
          },
          '& a': {
            transition: 'all 0.2s ease-in-out',
            cursor: 'pointer',
            color: 'white',
            textDecoration: 'none',
            '&:hover': {
              color: '#FDCD0B',
            },
          },
          display: {
            xs: 'none',
            sm: 'none'
          }
        }}
      >
        <Link>
          <Typography>PROFESSIONS</Typography>
        </Link>
        <Link>
          <Typography>FACTIONS</Typography>
        </Link>
        {/* <Typography>Link1</Typography> */}
      </Stack>
    </Grid>
  </Grid>
);

export default NavBar;
