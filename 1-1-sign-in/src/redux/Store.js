import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/Auth"
import feedReducer from './slices/Feed'
import notificationReducer from './slices/Notifications'
import usersReducer from './slices/Users'

export default configureStore({
    reducer: {
        auth: authReducer,
        feed: feedReducer,
        notifications: notificationReducer,
        users: usersReducer
    }
});
