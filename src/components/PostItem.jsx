import React from "react";
import '../styles/post.css';
import { MyButton } from "./UI/button/MyButton";

export const PostItem = function (props) {
    return (
        <div className="post">
            <div className='post__content'>
                <strong>{props.number}. {props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <div className='post__btns'>
                <MyButton onClick={() => props.removePost(props.post)} >Delete</MyButton>
            </div>
        </div>
    )
}