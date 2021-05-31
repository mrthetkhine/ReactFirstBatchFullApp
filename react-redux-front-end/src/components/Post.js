import React from "react";
const Post = ({post,deletePost})=> {
    //console.log('Post ',post);


    return( <div key={post._id}>
        <div className="card">
            <div className="card-body">
                <h6 className="card-title"> {post.title}</h6>
                <div className={"post-body"}>
                    {post.body}
                </div>
                <button type="button"
                        className={"btn btn-primary"}
                        onClick={()=>deletePost(post)}>
                    Delete
                </button>
            </div>
        </div>


    </div>)
}

export default Post;
