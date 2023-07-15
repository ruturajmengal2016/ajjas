import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Style from "./styles/MainFilters.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { sorting, high } from "../../utils/slice";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function MainFilters() {
  const [anchorEl, setAnchorEl] = React.useState(true);
  const value = useSelector((state) => state.comments.comments);
  const dispatch = useDispatch();
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
        <Button
          variant="contained"
          onClick={() => {
            dispatch(sorting({ type: "asc" }));
          }}
        >
          Newest
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            dispatch(sorting({ type: "dsc" }));
          }}
        >
          Oldest
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            dispatch(high({ type: anchorEl }));
            setAnchorEl(!anchorEl);
          }}
          endIcon={anchorEl ? <ExpandLessIcon /> : <KeyboardArrowDownIcon />}
        >
          score
        </Button>
      </Box>
    </Box>
  );
}
