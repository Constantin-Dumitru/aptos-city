import React, { FC } from "react";
import { Grid, Typography } from "@mui/material";
import { CyberStroke } from "../../shared/containers";
import ProfessionContainer from "./components/ProfessionContainer";
import { TraderIcon, HunterIcon, ScavengerIcon, CrafterIcon } from "../../shared/icons";

const SectionTwo: FC = () => (
  <Grid
    container
    sx={{
      width: "100vw",
      background: "#FDCD0B",
      padding: "32px 0",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    }}
  >
    <CyberStroke
      sx={{
        fill: "#FDCD0B",
        position: "absolute",
        width: "100%",
        top: "-20px",
        // left: "50%",
        // transform: "translate(-50%, 0)",
        right: '0',  
        // background: "red",
      }}
    />
    <Grid
      item
      container
      xs={12}
      md={10}
      sx={{ alignItems: "center", justifyContent: "center" }}
      gap={4}
    >
      <Typography
        sx={{
          fontSize: "32px",
          color: "#384043",
        }}
      >
        PROFESII
      </Typography>
      <Grid container sx={{
        width: '100%'
      }}
      spacing={4}
      >
        <Grid item container xs={12} sm={6} md={3}>
            <ProfessionContainer icon={<TraderIcon/>}/>
        </Grid>
        <Grid item container xs={12} sm={6} md={3}>
            <ProfessionContainer icon={<ScavengerIcon/>}/>
        </Grid>
        <Grid item container xs={12} sm={6} md={3}>
            <ProfessionContainer icon={<CrafterIcon/>}/>
        </Grid>
        <Grid item container xs={12} sm={6} md={3}>
            <ProfessionContainer icon={<HunterIcon/>}/>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default SectionTwo;
