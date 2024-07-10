import React, { FC } from "react";
import { Grid, Box, Typography } from "@mui/material";
import { CyberStroke } from "../../shared/containers";
import China from "./../../shared/images/china.png";
import US from "./../../shared/images/usa.png";
import Mexic from "./../../shared/images/mexic.png";
import Japan from "./../../shared/images/japan.png";
import Italy from "./../../shared/images/italy.png";

const SectionThree: FC = () => (
  <Grid
    container
    sx={{
      width: "100vw",
      background: "#384043",
      padding: "32px 0",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    }}
  >
    <CyberStroke
      sx={{
        fill: "#384043",
        position: "absolute",
        width: "100%",
        top: "-20px",
        // left: "50%",
        // transform: "translate(-50%, 0)",
        right: "0",
        // background: "red",
      }}
    />
    <Grid item container xs={10}>
      <Grid
        container
        width="100%"
        sx={{
          justifyContent: "space-between",
          flexDirection: {
            xs: "row-reverse",
            md: "row",
          },
          flexWrap: {
            xs: 'wrap-reverse',
            md: 'wrap'
          }
        }}
        rowGap={4}
      >
        <Grid
          item
          container
          xs={12}
          md={5}
          sx={{
            gap: "16px",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            // background: "red",
            '&>*': {
                width: {
                    xs: '33.3%',
                    md: '25%'
                }
            }
          }}
        >
          <Box component="img" src={China} />
          <Box component="img" src={Italy} />
          <Box component="img" src={Japan} />
          <Box component="img" src={US} />
          <Box component="img" src={Mexic} />
        </Grid>
        <Grid item container xs={12} md={4}>
          <Typography
            sx={{
              width: "100%",
              textAlign: {
                xs: "center",
                md: "right",
              },
              fontSize: {
                xs: "24px",
                md: "48px",
              },
              color: "white",
            }}
          >
            DISTRICT
            <br />
            FACTIONS
          </Typography>
          <Typography
            sx={{
                textAlign: {
                    xs: "center",
                    md: "right",
                  },
              color: "#BCBCBC",
            }}
          >
            In this game, rival mafia factions vie for power, using strategy, alliances, and cunning tactics.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default SectionThree;
