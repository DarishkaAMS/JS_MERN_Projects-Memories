import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post.js'
import useStyles from './styles';

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    console.log(posts); 
    
    return (
        <>
        <h2>POSTS</h2>
        <Post />
        <Post />
        </>
    );
}

export default Posts;