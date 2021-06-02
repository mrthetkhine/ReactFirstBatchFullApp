import {LOAD_USER, LOGOUT_USER} from "./constant/action-type";

export function loadUser(user) {
    return {
        type: LOAD_USER,
        user: user
    }
}
export  function logoutUser()
{
    return {
        type: LOGOUT_USER
    }
}