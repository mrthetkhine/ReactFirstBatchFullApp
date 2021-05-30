import React from "react";
import {connect} from "react-redux";
import Post from "../components/Post";
import {apiLoadAllPost,apiAddPost} from "../action/backend/PostAPI";
import AddPostForm from "../components/AddPostForm";

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
const PostListPage = ({posts,addPost})=> {
    //console.log('Posts ',posts);

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

export default connect(mapStateToProps,mapDispatchToProps)(PostListPage);
