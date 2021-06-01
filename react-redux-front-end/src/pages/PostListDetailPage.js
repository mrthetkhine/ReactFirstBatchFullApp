import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {apiDeletePost} from "../action/backend/PostAPI";
import Post from "../components/Post";
import PostDetail from "../components/PostDetail";
function getCommentForPost(comments,post)
{
    return comments.filter(comment=>comment.post== post._id);
}
const PostListDetailPage = (props)=>{
    const { id } = props.match.params;
    console.log('Post id  ',id);

    let posts = useSelector(state=>state.posts);
    let post = posts.filter(post=>post._id==id)[0];
    console.log('Post ',post);
    let comments = useSelector(state=>state.comments);

    console.log('Comments ',comments);

    let dispatch = useDispatch();
    //let addPost = (title,body)=>dispatch(apiAddPost(title,body));
    let deletePostFunc = post=> dispatch(apiDeletePost(post));
    return (
        <div>

            <PostDetail key={post._id}
                  post={post}
                  deletePost={deletePostFunc}
                  comments={getCommentForPost(comments,post)}>

            </PostDetail>
        </div>
    )
}
export default PostListDetailPage;