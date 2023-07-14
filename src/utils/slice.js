import { createSlice } from "@reduxjs/toolkit";

export const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
    replies: [],
  },
  reducers: {
    addComment: (state, actions) => {
      state.comments.push({
        user: "ABC",
        title: actions.payload.title,
        description: actions.payload.description,
        date: new Date().toLocaleTimeString(),
      });
    },
    addReplies: (state, actions) => {
      state.replies.push({
        description: actions.payload.description,
        date: new Date().toLocaleTimeString(),
      });
    },
  },
});

export const { addComment, addReplies } = commentsSlice.actions;
