import React from "react";
import { useHistory } from "react-router-dom";
const Post = ({post,deletePost})=> {
    const history = useHistory();
    const goToPostDetail = ()=>{
        console.log('Go to post detail');
        history.push('/post-list-detail/'+post._id);
    };
    return (
        <div className="card" onClick={()=>goToPostDetail()}>
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

    );
}
export default Post;