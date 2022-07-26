import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import {PostService} from "../API/PostService";
import {Loader} from "../components/UI/loader/Loader";
import '../styles/single-post.scss';

const SinglePost = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.GetById(params.id);
    setPost(response.data);
  })

  useEffect(() => {
    fetchPostById();
  }, [])

  return (
    <div className='single-post'>
      {isLoading
        ? <div style={{display: "flex", justifyContent: "center"}}><Loader/></div>
        : (
          <div className='single-post__info'>
            <div className='single-post__title'> {post.title} </div>
            <div className='single-post__body'>  {post.body} </div>
          </div>
        )
      }
    </div>
  );
};

export default SinglePost;