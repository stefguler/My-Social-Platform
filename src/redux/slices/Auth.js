import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: undefined,
    authorizedUsers: []
  },
  reducers: {
    setCurrentUser: (state, action) => {
        state.currentUser = action.payload
  },
    addAuthorizedUsers: (state, action) => {
        state.currentUser.push(action.payload)
    }
 
}})


export const { setCurrentUser, addAuthorizedUsers } = authSlice.actions;
export default authSlice.reducer;
