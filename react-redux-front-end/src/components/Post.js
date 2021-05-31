import React from "react";
const Post = ({post,comments,deletePost})=> {
    //console.log('Post ',post);


    return( <div key={post._id}>
        <div className="card">
            <div className="card-body">
                <h6 className="card-title"> {post.title}</h6>
                <div className={"post-body"}>
                    {post.body}
                </div>
                <div className={"comment-section"}>
                    {
                        comments.map(comment=>(
                            <div key={comment._id}
                                 className={"comment"}
                            >
                                {comment.text}
                            </div>))
                    }
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
