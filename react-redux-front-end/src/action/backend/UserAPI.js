import {addPost, loadPosts,deletePost} from "../PostActions";
import {API_HOST} from "../../Setting";
import {loadUser} from "../UserActions";
import {useHistory} from 'react-router-dom';
import {apiLoadAllPost} from "./PostAPI";
import {apiLoadAllComments} from "./CommentAPI";

const API_URL = API_HOST+"/auth/login"

export function apiLogin(history,userName,password)
{

    console.log('login  with REST');
    let jsonReq = {
        name: userName,
        password :password
    };
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:JSON.stringify(jsonReq)
    };
    return (dispatch)=>{
        console.log('Run function loadAllPost');
        fetch(API_URL,options)
            .then(response=>response.json())
            .then(user=>{
                dispatch(loadUser(user));
                localStorage.setItem("user",JSON.stringify(user));
                dispatch(apiLoadAllPost());
                dispatch(apiLoadAllComments());
                history.push('/');
            });
        ;
    }
}