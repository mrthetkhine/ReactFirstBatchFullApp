import React from "react";
import {useDispatch} from "react-redux";
import {logoutUser} from "../action/UserActions";
import { useHistory} from "react-router-dom";
const LogoutPage = ()=>{
    const dispatch = useDispatch();
    const history = useHistory();
    const logout=()=>{
        console.log("Logout");
        localStorage.clear();
        dispatch(logoutUser());
        history.push('/');
    };
    return (
        <div>
            <h1>Click to logout</h1>
            <button type="button" className={"btn btn-primary"}
                onClick={()=>logout()}>Logout</button>
        </div>
    )
};
export default LogoutPage;
