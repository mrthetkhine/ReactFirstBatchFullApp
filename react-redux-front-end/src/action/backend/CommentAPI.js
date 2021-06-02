import {loadComments} from "../CommentActions";
import {API_HOST} from "../../Setting";
import axios from "./interceptor";
const API_URL = API_HOST+"/comments";

export function apiLoadAllComments()
{
    console.log('Load all comment with REST');
    return (dispatch)=>{
        console.log('Run function loadAllComments');
        axios.get(API_URL)
            .then(response=>response.data)
            .then(comments=>dispatch(loadComments(comments)));
        ;
    }
}