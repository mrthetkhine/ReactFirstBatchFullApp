import React from "react";
import {connect} from "react-redux";

const mapStateToProps = state=>{
    return {
        posts : state.posts
    }
}
const Posts = ({posts})=> {
    console.log('Posts ',posts);
    return( <div>
        {
            posts.map(post=>(
                <div key={post._id}>{post.title}</div>))
        }
    </div>)
};

export default connect(mapStateToProps)(Posts);
