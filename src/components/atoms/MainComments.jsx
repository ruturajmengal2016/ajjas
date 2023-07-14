import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import Style from "./styles/MainComments.module.scss";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { addReplies } from "../../utils/slice";
export default function MainComments() {
  const data = useSelector((state) => state.comments.comments);
  return (
    <Box component="div" className={Style.root}>
      {data.map((ele, ind) => {
        return <CommentBox key={ind} data={ele} />;
      })}
    </Box>
  );
}

function CommentBox({ data }) {
  const [open, setOpen] = React.useState(false);
  const [reply, setReply] = React.useState(false);
  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box
        sx={{
          minHeight: "25%",
          width: "95%",
          backgroundColor: "whitesmoke",
          boxSizing: "border-box",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          gap: "1rem",
        }}
      >
        <Typography variant="h5" component="h5">
          {data.title}
        </Typography>
        <Box>{data.description}</Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "0.5rem",
            width: "100%",
          }}
        >
          <Box>
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                alignSelf: "flex-start",
              }}
              onClick={handleClickOpen}
            >
              Show Replies
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
            }}
          >
            {reply ? (
              <>
                <TextField
                  focused
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                />
                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                  }}
                  onClick={() => {
                    dispatch(addReplies({ description: value }));
                    handleClose();
                  }}
                >
                  save
                </Button>
              </>
            ) : (
              <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                }}
                onClick={() => {
                  setReply(!reply);
                }}
              >
                Reply
              </Button>
            )}

            <Typography variant="h6" component="span">
              {data.date}
            </Typography>
          </Box>
        </Box>
      </Box>
      <CustomizedDialogs open={open} handleClose={handleClose} />
    </>
  );
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function CustomizedDialogs({ open, handleClose }) {
  const selector = useSelector((state) => state.comments.replies);
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        PaperProps={{
          sx: {
            width: "40%",
            height: "fit-content",
          },
        }}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Replies
        </BootstrapDialogTitle>
        <DialogContent
          dividers
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {selector.map((ele, ind) => {
            return (
              <Typography
                key={ind}
                variant="h6"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {ele.description}
                {ele.date}
              </Typography>
            );
          })}
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
