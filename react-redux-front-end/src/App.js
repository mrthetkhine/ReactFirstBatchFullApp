import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import {connect, useDispatch, useSelector} from "react-redux";

import { BrowserRouter as Router,Route,Link ,Redirect} from "react-router-dom";

import NewPostPage from "./pages/NewPostPage";
import PostListPage from "./pages/PostListPage";

import {apiLoadAllPost} from "./action/backend/PostAPI";
import Posts from "./components/PostDetail";

import {apiLoadAllComments} from "./action/backend/CommentAPI";
import PostListDetailPage from "./pages/PostListDetailPage";
import LoginPage from "./pages/LoginPage";
import GuardRoute from './components/GuardRoute';
let store = window.store;

function mapDispatchToProps(dispatch) {
  return {
    loadPosts: () => dispatch(apiLoadAllPost())
  };
}

function App({loadPosts}) {

  let dispatch = useDispatch();
  let user = useSelector(state=>state.user);

  console.log("User ",user.token);
  useEffect(()=>{
    //loadPosts();
    //dispatch(apiLoadAllComments());
  },[])

  return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="nav navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link"to="/new-post">New Post</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/post-list">Post List</Link>
                  </li>

                </ul>
              </div>
            </div>

          </nav>
         {/* <Route path="/" component={App} />*/}
          <GuardRoute path="/new-post" component={NewPostPage} auth={user.token} />
          <GuardRoute path="/post-list" component={PostListPage} auth={user.token} />
          <GuardRoute path="/post-list-detail/:id" component={PostListDetailPage} auth={user.token} />
          <Route path="/login" component={LoginPage} />
          {
            !user.token? <Redirect to='/login'/> : null

          }
        </div>
      </Router>

  );
}

export default connect(null,mapDispatchToProps)(App);
