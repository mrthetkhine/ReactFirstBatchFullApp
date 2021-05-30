import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import {apiLoadAllPost} from "./action/backend/PostAPI";
import Posts from "./components/Post";
import {connect} from "react-redux";
import PostListPage from "./pages/PostListPage";

let store = window.store;

function mapDispatchToProps(dispatch) {
  return {
    loadPosts: () => dispatch(apiLoadAllPost())
  };
}

function App({loadPosts}) {

  useEffect(()=>{
    loadPosts();
  },[])

  return (
    <div className="App">
      {/*<Posts></Posts>*/}
      <PostListPage/>
    </div>
  );
}

export default connect(null,mapDispatchToProps)(App);
