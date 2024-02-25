import React, { useEffect } from "react";
import Header from "./components/Header";
import { Route,Routes } from "react-router-dom";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogDetails from "./components/BlogDetails";
import CreateBlog from "./components/CreateBlog";
import Auth from "./components/Auth";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "./store";
import Details from "./components/Details";



function App() {

  const dispath = useDispatch();
  
  const isLoggedIn = useSelector((state) =>state.isLoggedIn);
  console.log(isLoggedIn);

  useEffect(()=>{
    if(localStorage.getItem("userId")){
      dispath(authAction.login());
    }
  },[dispath]);

  return (
    <React.Fragment>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          { !isLoggedIn ? <Route path="/auth" element = {<Auth/>}/> :
          <>
          
          <Route path="/blogs" element = {<Blogs/>}/>
          <Route path="/myBlogs" element = {<UserBlogs/>}/>
          <Route path="/myBlogs/:id" element = {<BlogDetails/>}/>
          <Route path="/blogs/create" element = {<CreateBlog/>}/>
          <Route path="/blogs/:id" element = {<Details/>}/>
          </>}
        </Routes>
      </main>
      
    </React.Fragment>
  );
}

export default App;
