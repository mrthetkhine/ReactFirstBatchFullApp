import React from "react";
import {useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom';
import {apiLogin} from "../action/backend/UserAPI";

const LoginPage = ()=>{
    const dispatch = useDispatch();
    const history = useHistory();

    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = (e) => {
        console.log('Handle submit ',userName, password);
        dispatch(apiLogin(history,userName,password));

    }
    return(
        <div>
            <form className={"col-sm-8 add-form"}>
                <div className="form-group row mt-1">

                    <label htmlFor="title" className={"form-label col-sm-3"}>User Name</label>
                    <div className={"col-sm-8"}>

                        <input
                            type="text"
                            id="title"
                            className={"form-control"}
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>

                </div>
                <div className="form-group row mt-1">

                    <label htmlFor="title" className={"form-label col-sm-3"}>Password</label>
                    <div className={"col-sm-8"}>

                        <input
                            type="password"
                            id="title"
                            className={"form-control"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                </div>
                <div className={"form-group row mt-1"}>
                    <label className={"form-label col-sm-3"}></label>
                    <div className={"col-sm-8 text-start"}>
                        <button type="button"
                                className={"btn btn-primary"}
                                onClick={(e) => handleSubmit(e)}>Login
                        </button>
                    </div>

                </div>
            </form>
        </div>
    )
}
export default LoginPage;