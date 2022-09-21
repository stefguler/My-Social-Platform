import { createSlice } from "@reduxjs/toolkit";

export const feedSlice = createSlice({
  name: "feed",
  initialState: {
    feedList: [],
  },

  reducers: {
    setFeed: (state, action) => {
        state.feedList = action.payload
    },
    addPost: (state, action) => {
        state.feedList.push(action.payload)
    }
  }
})


export const { setFeed, addPost } = feedSlice.actions;
export default feedSlice.reducer;
