import React from 'react';
import Photo from './Photo';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PhotoWall = () => {

    const posts = useSelector(state => state.updatePost)
    return (
        <div className='container'>
            <div className='text-center'>
                <Link to='/addphoto' className='btn btn-outline-primary'>Add Photo</Link>
            </div>
            <div className='row'>
                {posts
                    .map((post) => {
                        return (<div className='col m-5' key={post.id}>
                            <Photo post={post} />
                        </div>)
                    })}
            </div>
        </div>
    );
}

export default PhotoWall;
