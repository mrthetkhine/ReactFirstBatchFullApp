import {LOAD_POSTS} from './constant/action-type';

export function loadPosts(posts)
{
    return {
        type: LOAD_POSTS,
        posts: posts
    }
}