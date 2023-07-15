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
        like: 0,
      });
    },
    addReplies: (state, actions) => {
      state.replies.push({
        description: actions.payload.description,
        date: new Date().toLocaleTimeString(),
      });
    },
    sorting: (state, actions) => {
      if (actions.payload.type === "asc") {
        for (let i = 0; i < state.comments.length; i++) {
          for (let j = i; j < state.comments.length; j++) {
            if (state.comments[i].date > state.comments[j].date) {
              [state.comments[i], state.comments[j]] = [
                state.comments[j],
                state.comments[i],
              ];
            }
          }
        }
      } else {
        for (let i = 0; i < state.comments.length; i++) {
          for (let j = i; j < state.comments.length; j++) {
            if (state.comments[i].date < state.comments[j].date) {
              [state.comments[i], state.comments[j]] = [
                state.comments[j],
                state.comments[i],
              ];
            }
          }
        }
      }
    },
    fav: (state, actions) => {
      if (actions.payload.type === "like") {
        state.comments.forEach((ele, ind) => {
          if (state.comments[ind].title === actions.payload.title) {
            state.comments[ind].like += 1;
          }
        });
      } else {
        state.comments.forEach((ele, ind) => {
          if (
            state.comments[ind].title === actions.payload.title &&
            state.comments[ind].like > 0
          ) {
            state.comments[ind].like -= 1;
          }
        });
      }
    },
    high: (state, actions) => {
      if (actions.payload.type) {
        state.comments.sort((a, b) => a.like - b.like);
      } else {
        state.comments.sort((a, b) => b.like - a.like);
      }
    },
  },
});

export const { addComment, addReplies, sorting, fav, high } =
  commentsSlice.actions;
