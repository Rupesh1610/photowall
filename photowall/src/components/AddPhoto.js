import React from 'react';
import Title from './Title';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addPost } from '../features/postSlice';

const AddPhoto = () => {

    const Navigate = useNavigate();
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        const link = e.target.link.value;
        const description = e.target.description.value;
        const post = {
            id: Number(new Date()),
            link: link,
            description: description
        }
        if (link && description) {
            dispatch(addPost(post))
            Navigate('/')
            alert('post succesful')
        }
    }
    return (
        <div>
            <div className='container' style={{ width: '30%' }}>
                <Title title='PhotoWall' />
                <form className='form-control' onSubmit={handleSubmit}>
                    <input type="text" placeholder='Image Link' className='form-control mb-3 mt-5' name='link' />
                    <input type="text" placeholder='Description' className='form-control mb-3' name='description' />
                    <button type='submit' className='form-control btn btn-dark mb-4'>POST</button>
                </form>
            </div>
        </div>
    );
}

export default AddPhoto;
