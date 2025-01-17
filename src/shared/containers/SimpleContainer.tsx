import React from "react";
import { createSvgIcon } from "@mui/material";

const SimpleContainer = createSvgIcon(
  <svg
    width={192}
    height={64}
    viewBox="0 0 192 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 0H169.5L192 17.5V64H173V60H148V64H20.5L0 46V0Z"
      fill="#FDCD0B"
    />
  </svg>,
  "SimpleContainer"
);

export default SimpleContainer;
