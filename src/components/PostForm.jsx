import React, { useState } from "react";
import { MyInput } from './UI/input/MyInput';
import { MyButton } from './UI/button/MyButton';


export const PostForm = function (props) {
    const [post, setPost] = useState({
        title: '',
        body: '',
    });

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            ...post,
        };
        props.create(newPost);
        setPost({ title: '', body: '' });
    }

    return (
        <form onSubmit={addNewPost}>
            <MyInput onChange={(e)=> setPost({...post, title: e.target.value})} value={post.title} type='text' placeholder='Title of post' />
            <MyInput onChange={(e)=> setPost({...post, body: e.target.value})} value={post.body} type='text' placeholder='Description of post' />
            <MyButton >Add new post</MyButton>
        </form>
    )
}