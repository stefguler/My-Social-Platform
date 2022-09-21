import { createSlice } from "@reduxjs/toolkit";

export const notificationSlice = createSlice({
  name: "feed",
  initialState: {
    notificationList: [],
  },

  reducers: {
    setNotifications: (state, action) => {
        state.notificationList = action.payload
    },
    addNotification: (state, action) => {
        state.notificationList.push(action.payload)
    }
  }
})


export const { setNotifications, addNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
