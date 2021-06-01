import React from "react";
const Comment = ({comment})=> {
    return (
        <div key={comment._id}
             className={"comment"}
        >
            {comment.text}
        </div>

    );
}
export default Comment;