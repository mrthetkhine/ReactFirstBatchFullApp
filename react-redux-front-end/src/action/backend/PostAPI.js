import {addPost, loadPosts} from "../index";
import {API_HOST} from "../../Setting";
const API_URL = API_HOST+"/posts"
export function loadAllPost()
{
    console.log('Load all post with REST');
    return (dispatch)=>{
        console.log('Run function loadAllPost');
        fetch(API_URL)
            .then(response=>response.json())
            .then(posts=>dispatch(loadPosts(posts)));
        ;
    }
}

export function apiAddPost(title,body)
{
    let jsonReq = {
        title,
        body
    };
    let options = {
        method: 'POST',
        body:JSON.stringify(jsonReq)
    };
    return (dispatch)=>{
        console.log('Run function loadAllPost');
        fetch(API_URL,options)
            .then(response=>response.json())
            .then(post=>dispatch(addPost(post)));
        ;
    }
}