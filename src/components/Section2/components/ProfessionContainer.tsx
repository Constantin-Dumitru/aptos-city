import React, { FC, ReactElement } from "react";
import { Stack, SvgIcon, Box } from "@mui/material";
import { Hexagon } from "../../../shared/containers";

interface Props {
  icon?: ReactElement<typeof SvgIcon>;
}

const ProfessionContainer: FC<Props> = ({icon}) => (
  <Stack
    sx={{
      width: "100%",
      position: "relative",
      //height: '300px'
      // background: 'red'
    }}
  >
    <Hexagon
      sx={{
        fill: "#384043",
        height: "auto",
        width: "100%",
      }}
    />
    {icon && (
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          "&>*": {
            fill: '#BCBCBC !important',
            width: '128px !important',
            height: 'auto !important'
          },
        }}
      >
        {icon}
      </Box>
    )}
  </Stack>
);

export default ProfessionContainer;
