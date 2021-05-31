import {loadComments} from "../CommentActions";
import {API_HOST} from "../../Setting";

const API_URL = API_HOST+"/comments";

export function apiLoadAllComments()
{
    console.log('Load all comment with REST');
    return (dispatch)=>{
        console.log('Run function loadAllComments');
        fetch(API_URL)
            .then(response=>response.json())
            .then(comments=>dispatch(loadComments(comments)));
        ;
    }
}