import React from "react";
import {connect} from "react-redux";
import Post from "../components/Post";

const mapStateToProps = state=>{
    return {
        posts : state.posts
    }
}
const PostListPage = ({posts})=> {
    console.log('Posts ',posts);
    return( <div>
        {
            posts.map(post=>(
                <Post key={post._id} post={post}>

                </Post>))
        }
    </div>)
};

export default connect(mapStateToProps)(PostListPage);
