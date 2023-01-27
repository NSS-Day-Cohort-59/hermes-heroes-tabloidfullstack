import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import UserProfileList from "./UserProfileList";
import PostList from "./PostList";


import CategoryList from "./CategoryList";
import TagList from "./TagList";
//  import TagForm from "./TagForm";

export default function ApplicationViews({ isLoggedIn }) {
  return (
    <main>
      <Routes>
        <Route path="/">
          <Route path="tags">
            <Route index element={<TagList/>}/>
          </Route>
          <Route path="categories">
            <Route index element={<CategoryList/>}/>
          </Route>
          <Route path="posts">
            <Route index element={<PostList/>}/>
          </Route>
          <Route path="comments">
            <Route index element={<PostList/> }/>
          </Route>
          <Route
            index
            element={isLoggedIn ? <Hello /> : <Navigate to="/login" />}/>
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<UserProfileList/>} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<p>Whoops, nothing here...</p>} />
        </Route>
      </Routes>
    </main>
  );
};  
          
          