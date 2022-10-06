import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: 'updatePost',
    initialState: [
        {
            id: 10,
            link: 'https://hdwallpaperim.com/wp-content/uploads/2017/08/25/453466-leopard-wildlife-savannah.jpg',
            description: 'awesome'
        },
        {
            id: 11,
            link: 'https://www.thewowstyle.com/wp-content/uploads/2015/01/Nature-wildlife-photography-22806244-2048-1363.jpg',
            description: 'Beautiful'
        }
    ],
    reducers: {
        addPost: (state, actions) => {
            return state.concat(actions.payload)
        },
        removePost: (state, actions) => {
            return state.filter(clickedPost => clickedPost.id !== actions.payload)
        }
    }
})

export const { addPost, removePost } = postSlice.actions
export default postSlice.reducer