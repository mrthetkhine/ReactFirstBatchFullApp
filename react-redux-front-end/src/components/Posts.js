import React from "react";
import {connect} from "react-redux";

const mapStateToProps = state=>{
    return {
        posts : state.posts
    }
}
const Posts = ({posts})=> {
    console.log('Posts ',posts);
    return( <ul>
        {
            posts.map(post=>(
                <li key={post.id}>{post.title}</li>))
        }
    </ul>)
};

export default connect(mapStateToProps)(Posts);
