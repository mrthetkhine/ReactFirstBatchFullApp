import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import {connect, useDispatch} from "react-redux";

import { BrowserRouter as Router,Route,Link } from "react-router-dom";

import NewPostPage from "./pages/NewPostPage";
import PostListPage from "./pages/PostListPage";

import {apiLoadAllPost} from "./action/backend/PostAPI";
import Posts from "./components/PostDetail";

import {apiLoadAllComments} from "./action/backend/CommentAPI";
import PostListDetailPage from "./pages/PostListDetailPage";

let store = window.store;

function mapDispatchToProps(dispatch) {
  return {
    loadPosts: () => dispatch(apiLoadAllPost())
  };
}

function App({loadPosts}) {

  let dispatch = useDispatch();
  useEffect(()=>{
    loadPosts();
    dispatch(apiLoadAllComments());
  },[])

  return (
      <Router>
        <div className="App">
          <nav className="navbar" >
            <div className="navbar-nav " id="navbarNav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="/new-post">New Post</Link></li>
                <li className="nav-item"><Link to="/post-list">Post List</Link></li>
              </ul>
            </div>

          </nav>
         {/* <Route path="/" component={App} />*/}
          <Route path="/new-post" component={NewPostPage} />
          <Route path="/post-list" component={PostListPage} />
          <Route path="/post-list-detail/:id" component={PostListDetailPage} />
        </div>
      </Router>

  );
}

export default connect(null,mapDispatchToProps)(App);
