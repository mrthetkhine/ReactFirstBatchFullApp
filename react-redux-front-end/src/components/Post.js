import React from "react";
const Post = ({post})=> {
    //console.log('Post ',post);
    return( <div key={post._id}>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title"> {post.title}</h5>
                {post.body}
            </div>
        </div>


    </div>)
};

export default Post;
