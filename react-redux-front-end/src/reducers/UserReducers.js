import {LOAD_USER} from "../action/constant/action-type";

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

    }
    return state;
};

export default userReducer;