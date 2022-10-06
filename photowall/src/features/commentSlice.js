import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
    name: 'comment',
    initialState: [],
    reducers: {
        addComment(state, actions) {
            return state.concat(actions.payload);
        }
    }
})

export const { addComment } = commentSlice.actions;
export default commentSlice.reducer