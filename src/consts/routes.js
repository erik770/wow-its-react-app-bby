import Posts from "../pages/Posts";
import About from "../pages/About";
import SinglePost from "../pages/SinglePost";
import Error from "../pages/Error";

export const ROUTES = [
  { path: '/posts', component: Posts },
  { path: '/', component: Posts },
  { path: '/posts/:id', component: SinglePost },
  { path: '/about', component: About },
  { path: '/*', component: Error },
]