import React from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import Post from "../components/Post";
import {apiLoadAllPost,apiAddPost} from "../action/backend/PostAPI";
import {deletePost} from "../action";
import AddPostForm from "../components/AddPostForm";

/*
const mapStateToProps = state=>{
    return {
        posts : state.posts
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addPost: (title,body) => dispatch(apiAddPost(title,body))
    };
}

 */
const PostListPage = ()=> {
    //console.log('Posts ',posts);
    let posts = useSelector(state=>state.posts);

    let dispatch = useDispatch();
    let addPost = (title,body)=>dispatch(apiAddPost(title,body));
    let deletePost = post=> dispatch(deletePost(post));
    return( <div className={"row"}>
        <AddPostForm addPost={addPost}>

        </AddPostForm>
        {
            posts.map(post=>(
                <Post key={post._id} post={post}>

                </Post>))
        }
    </div>)
};
export default PostListPage;
//export default connect(mapStateToProps,mapDispatchToProps)(PostListPage);
