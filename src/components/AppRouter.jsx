import React from 'react';
import {Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts";
import About from "../pages/About";
import Error from "../pages/Error";
import SinglePost from "../pages/SinglePost";

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Posts />}/>
      <Route path='/posts' element={<Posts />}/>
      <Route path='/posts/:id' element={<SinglePost />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/*' element={<Error />}/>
    </Routes>
  );
};

export default AppRouter;