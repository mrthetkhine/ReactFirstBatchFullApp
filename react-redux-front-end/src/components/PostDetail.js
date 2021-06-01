import React from "react";
import Post from "./Post";
import Comment from "./Comment";
const PostDetail = ({post,comments,deletePost})=> {
    //console.log('PostDetail ',post);


    return( <div key={post._id} className={"row justify-content-center"}>
                <Post post={post}
                      key={post._id}>
                </Post>
                <div className="row justify-content-center">
                    <div className={"comment-section col-sm-8"}>
                        {
                            comments.map(comment=>(
                                <Comment comment={comment}
                                         key={comment._id}></Comment>))
                        }
                    </div>
                </div>
    </div>)
}

export default PostDetail;
