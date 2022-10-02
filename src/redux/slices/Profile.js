import { createSlice } from '@reduxjs/toolkit';

export const ProfileSlice = createSlice({
    name: 'profile',
    initialState: {
        filter: 1, 
        renderData: [],
    },
     reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload
        },
        setRenderData: (state, action) => {
            state.renderData = action.payload
        },
     }
})


export const { setFilter, setRenderData } = ProfileSlice.actions;
export default ProfileSlice.reducer;
