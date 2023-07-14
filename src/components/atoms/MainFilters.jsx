import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Style from "./styles/MainFilters.module.scss";
import { useSelector } from "react-redux";
export default function MainFilters() {
  const value = useSelector((state) => state.comments.comments);
  return (
    <Box component="div" className={Style.root}>
      <Typography
        component="h1"
        variant="h5"
        sx={{
          width: "40%",
        }}
      >
        {value.length} Comments
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "60%",
        }}
      >
        <Button variant="outlined">Newest</Button>
        <Button variant="outlined">Oldest</Button>
        <Button variant="outlined">Score</Button>
      </Box>
    </Box>
  );
}
