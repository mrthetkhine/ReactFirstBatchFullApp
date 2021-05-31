import {LOAD_COMMENTS} from "./constant/action-type";

export function loadComments(comments)
{
    return {
        type: LOAD_COMMENTS,
        comments: comments
    }
}