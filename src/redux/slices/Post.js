import { createSlice } from '@reduxjs/toolkit';

export const PostSlice = createSlice({
    name: 'post',
    initialState: {
        PostList: [], 
    },
     reducers: {
        setPost: (state, action) => {
            state.PostList = action.payload
        },
        addPost : (state, action) => {
            state.PostList.push(action.payload)
        }
     }

})


export const { setPost, addPost } = PostSlice.actions;
export default PostSlice.reducer;
