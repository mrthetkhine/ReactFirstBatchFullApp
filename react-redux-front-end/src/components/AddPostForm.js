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
    return( <div className="mb-3">
        <form className={"col-sm-8 add-form"}>
            <div className="form-group row mt-1">

                <label htmlFor="title" className={"form-label col-sm-3"}>Title</label>
                <div className={"col-sm-8"}>

                <input
                    type="text"
                    id="title"
                    className={"form-control"}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                 </div>

            </div>
            <div className="form-group row mt-1">
                <label htmlFor="body" className={"form-label col-sm-3"}>Body</label>
                <div className={"col-sm-8"}>
                    <textarea
                        id="body"
                        value={body}
                        className={"form-control "}
                        rows={10}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>

            </div>
            <div className={"form-group row mt-1"}>
                <label className={"form-label col-sm-3"}></label>
                <div className={"col-sm-8 text-start"}>
                    <button type="button"
                            className={"btn btn-primary"}
                            onClick={(e) => handleSubmit(e)}>Add
                    </button>
                </div>

            </div>
        </form>


    </div>)
};

export default AddPostForm;
