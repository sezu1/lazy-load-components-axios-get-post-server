import './App.css';
import {lazy} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/hoc/Layout";
import {PostsDetailPage} from "./pages/postsPage/PostsDetailPage";

const PostsPage = lazy(() => import('./pages/postsPage/PostsPage'));
const CreatePostPage = lazy(() => import('./pages/createPostPage/CreatePostPage'));


function App() {
  return (
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout/>} >
          <Route index element={<PostsPage />}/>
            <Route path="posts/:id" element={<PostsDetailPage/>}/>
            <Route path="createPostPage" element={<CreatePostPage/>}/>
          </Route>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
