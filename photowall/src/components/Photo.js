import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removePost } from '../features/postSlice';

const Photo = (props) => {
    const dispatch = useDispatch();
    const post = props.post;
    return (
        <div className="card" style={{ width: '33rem' }}>
            <Link to={`/single/${post.id}`}>
                <img src={post.link} className="card-img-top" alt={post.description} />
            </Link>
            <div className="card-body">
                <p className="card-text">{post.description}</p>
                <div className='text-center'>
                    <button className='btn btn-outline-danger' type='submit' onClick={() => dispatch(removePost(post.id))}>REMOVE</button>
                </div>
            </div>
        </div>
    );
}

export default Photo;


