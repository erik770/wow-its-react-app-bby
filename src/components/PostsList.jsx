import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
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
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition key={post.id} timeout={300} classNames="post">
                        <PostItem removePost={removePost} number={post.id} post={post} key={post.id}></PostItem>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
}