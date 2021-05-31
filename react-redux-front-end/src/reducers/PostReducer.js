import {ADD_POST, DELETE_POST, LOAD_POSTS} from "../action/constant/action-type";

const initialState = [];
//state = posts
function postReducer(state = initialState, action) {
    switch(action.type)
    {
        case LOAD_POSTS:
            return action.posts;
        case ADD_POST:
            return [...state,action.post];
        case DELETE_POST:
            return state.filter(post=>post._id != action.post._id);
        default:
            return state;
    }
    return state;
};

export default postReducer;