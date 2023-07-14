import React from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  TextField,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Style from "./styles/MainHeader.module.scss";
import { useDispatch } from "react-redux";
import { addComment } from "../../utils/slice";
export default function MainHeader() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box component="div" className={Style.root}>
        <Typography component="h1" variant="h3">
          All Comments
        </Typography>
        <Button variant="contained" onClick={handleClickOpen}>
          Add Comments
        </Button>
      </Box>
      <CommentDialog open={open} handleClose={handleClose} />
    </>
  );
}

function CommentDialog({ open, handleClose }) {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState({
    title: "",
    comment: "",
  });
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: "40%",
          },
        }}
      >
        <DialogTitle>Write Comment</DialogTitle>
        <DialogContent>
          <TextField
            label="title"
            name="title"
            onChange={(e) => {
              setValue({ ...value, [e.target.name]: e.target.value });
            }}
          />

          <TextField
            name="comment"
            multiline
            rows={3}
            fullWidth
            defaultValue="Write your comment"
            onChange={(e) => {
              setValue({ ...value, [e.target.name]: e.target.value });
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => {
              if (value.title && value.comment) {
                dispatch(
                  addComment({
                    description: value.comment,
                    title: value.title,
                  })
                );
                handleClose();
              } else {
                alert("please write something else");
              }
            }}
            sx={{ textTransform: "none" }}
          >
            Save comment
          </Button>
          <Button
            autoFocus
            onClick={handleClose}
            sx={{ textTransform: "none" }}
          >
            Close comment
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
