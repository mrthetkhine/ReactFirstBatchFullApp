import {ADD_POST, DELETE_POST, LOAD_POSTS} from './constant/action-type';

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
export function deletePost(post) {
    return {
        type: DELETE_POST,
        post: post
    }
}