import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addComment } from '../features/commentSlice'

const Comments = () => {
    const dispatch = useDispatch()
    const comments = useSelector(state => state.comment)
    const handleSubmit = (e) => {
        e.preventDefault();
        const postcomment = e.target[0].value;
        dispatch(addComment(postcomment))
    }
    return (
        <div style={{ width: '400px' }}>
            <form onSubmit={handleSubmit} className='myform'>
                <input type="text" placeholder='Leave a comment' className='comment-input' />
            </form>
            {comments.map((item, index) => {
                return (
                    <p key={index} className='ms-3 mt-3'>{item}</p>
                )
            })}
        </div>
    )
}

export default Comments