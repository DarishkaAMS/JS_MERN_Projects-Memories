import React from 'react';
import Post from './Post/Post.js';
import useStyles from './styles';

const Posts = () => {
    const classes = useStyles();
    return (
        <>
        <h2> Posts to come </h2>
        <Post />
        <Post />
        <Post />
        </>
    )
};

export default Posts