import React from 'react';

const CommentItem = ({author, title, body}) => {
  return (
    <div className="comment">
      <div className="comment__author">{author}</div>
      <div className="comment__title">{title}</div>
      <div className="comment__body">{body}</div>
    </div>
  );
};

export default CommentItem;