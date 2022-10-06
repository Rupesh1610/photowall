import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Photo from './Photo';
import Comments from './Comments';

const Single = () => {
    const params = useParams();
    const posts = useSelector(state => state.updatePost)
    const post = posts.find(post => post.id === Number(params.id));
    return (
        <div className='container'>
            <div className='single'>
                <Photo post={post} />
                <Comments />
            </div>
        </div>
    )
}

export default Single