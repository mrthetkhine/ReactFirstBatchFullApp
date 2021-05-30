import {loadPosts} from "../index";

export function loadAllPost()
{
    console.log('Load all post with REST');
    return (dispatch)=>{
        console.log('Run function loadAllPost');
        fetch('http://localhost:8080/api/posts')
            .then(response=>response.json())
            .then(posts=>dispatch(loadPosts(posts)));
        ;
    }
}