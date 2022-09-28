import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../redux/slices/Auth"
import feedReducer from '../redux/slices/Feed'
import notificationReducer from '../redux/slices/Notifications'
import usersReducer from '../redux/slices/Users'
import postReducer from './slices/Post'
import profileReducer from './slices/Profile'

export default configureStore({
    reducer: {
        auth: authReducer,
        feed: feedReducer,
        notifications: notificationReducer,
        users: usersReducer,
        post: postReducer,
        profile: profileReducer,
    }
});
