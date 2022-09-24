import { createSlice } from "@reduxjs/toolkit";

export const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    notificationCounter: 0,
  },

  reducers: {
    setNotificationCounter: (state, action) => {
        state.notificationCounter = action.payload
    },
  }
})


export const { setNotificationCounter } = notificationSlice.actions;
export default notificationSlice.reducer;
