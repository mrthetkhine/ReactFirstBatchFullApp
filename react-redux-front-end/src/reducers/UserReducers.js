import {LOAD_USER, LOGOUT_USER} from "../action/constant/action-type";

/*user = {
    token : 'eageage'
}

 */
const initialState = {

};
//state = posts
function userReducer(state = initialState, action) {
    switch(action.type)
    {
        case LOAD_USER:
            return action.user;
        case LOGOUT_USER:
            return {
                
            };
    }
    return state;
};

export default userReducer;