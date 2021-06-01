import React from "react";
import { useHistory } from "react-router-dom";
const Post = ({post,deletePost})=> {
    const history = useHistory();
    const goToPostDetail = ()=>{
        console.log('Go to post detail');
        history.push('/post-list-detail/'+post._id);
    };
    return (
        <div className="post col-sm-8"
            onClick={()=>goToPostDetail()}>
            <div className={"post-title row"}>
                <div className={"col-sm-8"}>
                {post.title}
                </div>
                <div className={"col-sm-4 text-end"}>
                    <button type="button"
                            className={"btn btn-primary"}
                            onClick={()=>deletePost(post)}>
                        Delete
                    </button>
                </div>
            </div>
            <div className={"post-body"}>
                {post.body}

            </div>

        </div>

    );
}
export default Post;