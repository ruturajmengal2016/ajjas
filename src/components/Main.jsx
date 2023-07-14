import React from "react";
import { Box } from "@mui/material";
import Style from "./styles/Main.module.scss";
import MainHeader from "./atoms/MainHeader";
import MainFilters from "./atoms/MainFilters";
import MainComments from "./atoms/MainComments";
export default function Main() {
  return (
    <Box component="div" className={Style.root}>
      <MainHeader />
      <MainFilters />
      <MainComments />
    </Box>
  );
}
