import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import {PostService} from "../API/PostService";
import {Loader} from "../components/UI/loader/Loader";

const SinglePost = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.GetById(params.id);
    setPost(response.data);
  })
  useEffect(() => {
    // console.log(params.id);
    fetchPostById();
  }, [])
  return (
    <div>
      {isLoading
        ? <div style={{display: "flex", justifyContent: "center", marginTop: "150px"}}><Loader/></div>
        : <div> {post.id} {post.title} </div>
      }
      <h1>Вы перешли на страницу поста {params.id}</h1>
    </div>
  );
};

export default SinglePost;