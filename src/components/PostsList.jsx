import React from "react";
import { PostItem } from "./PostItem";
    
export const PostsList = function ({ posts, title, removePost }) {
    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>Постов нет</h1>
        )
    }
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>
                {title}
        </h1>
            {posts.map((post, index) => {
            return <PostItem removePost={removePost} number={index + 1} post={post} key={post.id}></PostItem>
        })}
        </div>
    )
}