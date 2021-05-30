import {ADD_POST, LOAD_POSTS} from './constant/action-type';

export function loadPosts(posts)
{
    return {
        type: LOAD_POSTS,
        posts: posts
    }
}
export function addPost(post)
{
    return {
        type: ADD_POST,
        post: post
    }
}