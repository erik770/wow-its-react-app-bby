import React, {useEffect, useState} from 'react';
import {PostsList} from '../components/PostsList';
import {PostForm} from '../components/PostForm';
import {PostFilter} from '../components/PostFilter';
import {MyModal} from '../components/UI/myModal/MyModal';
import {MyButton} from '../components/UI/button/MyButton';
import {Loader} from '../components/UI/loader/Loader';
import {usePosts} from '../hooks/usePosts';
import {PostService} from '../API/PostService';
import {useFetching} from '../hooks/useFetching';
import {getPagesCount} from "../utils/pages";
import {Pagination} from "../components/UI/pagination/Pagination";
import {MySelect} from "../components/UI/select/MySelect";

function Pages() {

  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.GetAll(limit, page);
    setPosts(response.data);
    setTotalPages(getPagesCount(response.headers['x-total-count'], limit));
  })

  useEffect(() => {
    fetchPosts()
  }, [page, limit])

  const [filter, setFilter] = useState({sort: '', search: ''});
  const [visibleCreatePost, setVisibilityCreatePost] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.search);

  const addNewPost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisibilityCreatePost(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  const changePage = async (page) => {
    setPage(page);
  }

  return (
    <div className="App">
      <MyButton onClick={(e) => setVisibilityCreatePost(true)}>Create new post</MyButton>
      <MyModal visible={visibleCreatePost} setVisibility={setVisibilityCreatePost}>
        <PostForm create={addNewPost}/>
      </MyModal>
      <hr style={{margin: "15px 0"}}></hr>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue='Number of posts'
        options={[
          {value: 5, name: '5'},
          {value: 10, name: '10'},
          {value: 25, name: '25'},
          {value: -1, name: 'All'},
        ]}
      />
      {postError &&
        <h1>Error:{postError}</h1>
      }
      {isPostsLoading
        ? <div style={{display: "flex", justifyContent: "center", marginTop: "150px"}}><Loader/></div>
        : <PostsList removePost={removePost} posts={sortedAndSearchedPosts} title={'My blog'}/>
      }
      <Pagination
        totalPages={totalPages}
        onPageClick={changePage}
        currentPage={page}
      />
    </div>
  );
}

export default Pages;
