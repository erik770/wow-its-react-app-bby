import React from "react";
import '../styles/post.scss';
import {MyButton} from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom";

export const PostItem = function (props) {
  const navigate = useNavigate();
  return (
    <div className="post">
      <div className='post__content'>
        <strong>{props.number}. {props.post.title}</strong>
        <div>{props.post.body}</div>
      </div>
      <div className='post__btns'>
        <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>Open</MyButton>
        <MyButton onClick={() => props.removePost(props.post)}>Delete</MyButton>
      </div>
    </div>
  )
}