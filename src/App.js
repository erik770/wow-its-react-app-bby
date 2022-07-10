import React, { useEffect, useState } from 'react';
import { PostsList } from './components/PostsList';
import { PostForm } from './components/PostForm';
import { PostFilter } from './components/PostFilter';
import { MyModal } from './components/UI/MyModal/MyModal';
import { MyButton } from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
import { PostService } from './API/PostService';
function App() {
  
  const [posts, setPosts] = useState([]);
  const [isPostsLoading, setIsPostsLoading] = useState(true);

  const getPosts = async function () {
    setIsPostsLoading(true)
    const posts = await PostService.GetAll();
    setPosts(posts);
    setIsPostsLoading(false);
  } 
  
  useEffect(() => {
    getPosts()
  } , [])
  
  const [filter, setFilter] = useState({ sort: '', search: '' });
  const [visibleCreatePost, setVisibilityCreatePost] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.search);

  const addNewPost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisibilityCreatePost(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  return (
    <div className="App">
      <MyButton onClick={(e) => setVisibilityCreatePost(true)}>Create new post</MyButton>
      <MyModal visible={visibleCreatePost} setVisibility={setVisibilityCreatePost}>
        <PostForm create={addNewPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }}></hr>
      <PostFilter 
        filter={filter}
        setFilter={setFilter}
      />
      {isPostsLoading
        ? <h1> Loading.. </h1>
        : <PostsList removePost={removePost} posts={sortedAndSearchedPosts} title={'My blog'} /> 
      }
    </div>
  );
}

export default App;
