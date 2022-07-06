import React, { useState } from 'react';
import { PostsList } from './components/PostsList';
import { PostForm } from './components/PostForm';
function App() {
  
  const [posts, setPosts] = useState(
    [
      {
        id: 1,
        title: 'hellow orold',
        body: 'lorem ipsum asdlkasof',
      },
      {
        id: 2,
        title: 'hellow orold2',
        body: 'lorem ipsum asdlkasof',
      },
      {
        id: 3,
        title: 'hellow orold3',
        body: 'lorem ipsum asdlkasof',
      },
    ]
  );


  
  const addNewPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  }


  return (
    <div className="App">
      <PostForm create={addNewPost} />
      {posts.length !== 0
        ? <PostsList removePost={removePost} posts={posts} title={'My blog'} />
        : <h1 style={{textAlign: 'center'}}>Постов нет</h1>
      }
    </div>
  );
}

export default App;
