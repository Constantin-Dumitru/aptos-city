import React, { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { SimpleContainer } from "../../../shared/containers";
import BorderImg from "./../../../shared/containers/SimpleContainer.svg";
import Container2 from './../../../shared/containers/ButtonClip.svg'
import { ArrowIcon } from "../../../shared/icons";

const TitleWithLinks: FC = () => (
  <Stack>
    <Stack
      sx={{
        "&>*": {
          fontSize: "92px",
          color: "#FFFFFF",
        },
      }}
      spacing={-4}
    >
      <Typography>APTOS</Typography>
      <Typography>CITY</Typography>
      <Typography>PROJECT</Typography>
    </Stack>
    <Stack direction="row" gap={2}>
      <Stack
        sx={{
            background: `url(${Container2})`,
            width: '360px',
            height: '64px',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            gap: '16px',
            transition: 'all 0.2s ease-in-out',
            cursor: 'pointer',
            '&:hover': {
                gap: '24px',
            }
        }}
      >
        <Typography sx={{color: '#010101'}}>FOLLOW US</Typography>
        <ArrowIcon sx = {{stroke: '#010101'}}/>
      </Stack>
      <Stack
        sx={{
          position: "relative",
          width: "max-content",
          height: "64px",
          minWidth: "192px",
          // borderImage: `url(${BorderImg})`,
          // borderWidth: '0 200px',
          // borderStyle: 'solid',
          background: `url(${BorderImg})`,
          alignItems: "center",
          justifyContent: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          cursor: 'pointer'
        }}
      >
        <Typography>Pula</Typography>
      </Stack>
    </Stack>
  </Stack>
);

export default TitleWithLinks;
