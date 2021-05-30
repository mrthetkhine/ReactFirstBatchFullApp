import React from "react";
import {connect} from "react-redux";


const Post = ({post})=> {
    console.log('Post ',post);
    return( <div key={post._id}>
        {post.title}
    </div>)
};

export default Post;
