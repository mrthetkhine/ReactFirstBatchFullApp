import React from "react";
import Post from "./Post";
import Comment from "./Comment";
const PostDetail = ({post,comments,deletePost})=> {
    //console.log('PostDetail ',post);


    return( <div key={post._id}>
            <div className="card">
                <div className="card-body">
                    <Post post={post}
                        key={post._id}>
                    </Post>
                    <div className={"comment-section"}>
                        {
                            comments.map(comment=>(
                                <Comment comment={comment}
                                        key={comment._id}></Comment>))
                        }
                    </div>

                </div>
            </div>
    </div>)
}

export default PostDetail;
