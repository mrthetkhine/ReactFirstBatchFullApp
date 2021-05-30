import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import {loadAllPost} from "./action/backend/PostAPI";
import Posts from "./components/Posts";
import {connect} from "react-redux";

let store = window.store;

function mapDispatchToProps(dispatch) {
  return {
    loadPosts: () => dispatch(loadAllPost())
  };
}

function App({loadPosts}) {

  useEffect(()=>{
    console.log("load data");
    loadPosts();
  },[])

  console.log("Store ", window.store);
  console.log("Store ",window.store.getState());
  return (
    <div className="App">
      <Posts></Posts>
    </div>
  );
}

export default connect(null,mapDispatchToProps)(App);
