import React from "react";
import AddPostForm from "../components/AddPostForm";
import {apiAddPost} from "../action/backend/PostAPI";
import {useDispatch} from "react-redux";

const NewPostPage = ()=>{
    let dispatch =useDispatch();
    let addPost = (title,body)=>dispatch(apiAddPost(title,body));
    return (
        <AddPostForm addPost={addPost}>

        </AddPostForm>
    )
};
export default NewPostPage;