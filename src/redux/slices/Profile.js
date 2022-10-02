import { createSlice } from '@reduxjs/toolkit';

export const ProfileSlice = createSlice({
    name: 'profile',
    initialState: {
        filter: 2,
        metricsList: [],
    },
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload
        },
        setMetricsList: (state, action) => {
            action.payload.length > 0 ?
                state.metricsList = action.payload :
                state.metricsList = [];
        },
    }
})


export const { setFilter, setMetricsList } = ProfileSlice.actions;
export default ProfileSlice.reducer;
