import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import {loadAllPost} from "./action/backend/PostAPI";
import Posts from "./components/Post";
import {connect} from "react-redux";
import PostListPage from "./pages/PostListPage";

let store = window.store;

function mapDispatchToProps(dispatch) {
  return {
    loadPosts: () => dispatch(loadAllPost())
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
