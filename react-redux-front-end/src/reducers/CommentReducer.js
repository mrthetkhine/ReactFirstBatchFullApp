import {LOAD_COMMENTS} from "../action/constant/action-type";

const initialState = [];
//state = comments
function commentReducer(state = initialState, action) {
    switch(action.type)
    {
        case LOAD_COMMENTS:
            return action.comments;

        default:
            return state;
    }
    return state;
};

export default commentReducer;