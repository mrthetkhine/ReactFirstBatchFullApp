import React from "react";

const AddPostForm = ({addPost})=> {
    //console.log('PostDetail ',post);
    const [title, setTitle] = React.useState("");
    const [body, setBody] = React.useState("");

    const handleSubmit = (e) => {
        console.log('Handle submit ',title, body);
        addPost(title,body);
        setTitle("");
        setBody("");
    }
    return( <div >
        <form className={"col-sm-8 add-form"}>
            <div className="row">

                <label htmlFor="title" className={"col-sm-2"}>Title</label>
                <input
                    type="text"
                    id="title"
                    className={"form-control col-sm-4"}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

            </div>
            <div className="form-group row">
                <label htmlFor="body col-sm-2"></label>
                <textarea
                    id="body"
                    value={body}
                    className={"form-control col-sm-4"}
                    onChange={(e) => setBody(e.target.value)}
                />
            </div>
            <div className={"form-group row"}>
                <button type="button"
                        className={"btn btn-primary col-sm-2"}
                        onClick={(e) => handleSubmit(e)}>Add
                </button>
            </div>
        </form>


    </div>)
};

export default AddPostForm;
