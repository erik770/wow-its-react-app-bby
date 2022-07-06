import React, { useMemo, useState } from 'react';
import { PostsList } from './components/PostsList';
import { PostForm } from './components/PostForm';
import { PostFilter } from './components/PostFilter';
import { MyModal } from './components/UI/MyModal/MyModal';
import { MyButton } from './components/UI/button/MyButton';
function App() {
  
  const [posts, setPosts] = useState(
    [
      {
        id: 1,
        title: 'bbb',
        body: 'a',
      },
      {
        id: 2,
        title: 'aaa',
        body: 'c',
      },
      {
        id: 3,
        title: 'cc',
        body: 'b',
      },
    ]
  );
  const [filter, setFilter] = useState({ sort: '', search: '' });
  const [visibleCreatePost, setVisibilityCreatePost] = useState(false);

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.search.toLowerCase()));
  }, [filter.search, sortedPosts])

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
      <PostsList removePost={removePost} posts={sortedAndSearchedPosts} title={'My blog'} />
    </div>
  );
}

export default App;
