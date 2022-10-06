import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../features/postSlice'
import commentReducer from '../features/commentSlice'
export const store = configureStore({
    reducer: {
        updatePost: postReducer,
        comment: commentReducer
    }
})