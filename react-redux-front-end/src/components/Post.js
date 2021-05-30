import React from "react";
const Post = ({post})=> {
    //console.log('Post ',post);
    return( <div key={post._id}>
        <div className="card">
            <div className="card-body">
                <h6 className="card-title"> {post.title}</h6>
                <div>
                    {post.body}
                </div>
            </div>
        </div>


    </div>)
};

export default Post;
