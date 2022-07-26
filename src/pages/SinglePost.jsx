import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import {PostService} from "../API/PostService";
import {Loader} from "../components/UI/loader/Loader";
import '../styles/single-post.scss';
import '../styles/comment.scss';
import CommentItem from "../components/CommentItem";

const SinglePost = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.GetById(params.id);
    setPost(response.data);
  })
  const [fetchComments, isCommentsLoading, commentsError] = useFetching(async () => {
    const response = await PostService.GetComments(params.id);
    setComments(response.data);
  })

  useEffect(() => {
    fetchPostById();
    fetchComments();
  }, [])

  return (
    <div className='single-post'>
      {isPostLoading
        ? <div style={{display: "flex", justifyContent: "center", marginTop: "15px"}}><Loader/></div>
        : (
          <div className='single-post__info'>
            <div className='single-post__title'> {post.title} </div>
            <div className='single-post__body'>  {post.body} </div>
          </div>
        )
      }
      {isCommentsLoading
        ?
        <div style={{display: "flex", justifyContent: "center", marginTop: "100px", transform: "scale(0.8)"}}><Loader/>
        </div>
        : (
          <div className="comments-container">
            {comments.map((comment, index) => <CommentItem author={comment.email}
                                                           title={comment.name}
                                                           body={comment.body}
                                                           key={comment.id}/>)}
          </div>
        )
      }
    </div>
  );
};

export default SinglePost;