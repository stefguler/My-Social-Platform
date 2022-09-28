import { createSlice } from '@reduxjs/toolkit';

export const ProfileSlice = createSlice({
    name: 'profile',
    initialState: {
        filter: 1, 
    },
     reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload
        },
     }
})


export const { setFilter } = ProfileSlice.actions;
export default ProfileSlice.reducer;
