import {ADD_POST, LOAD_POSTS} from "../action/constant/action-type";

const initialState = {
    posts: [],
    users: [],
};

function rootReducer(state = initialState, action) {
    switch(action.type)
    {
        case LOAD_POSTS:
            return {...initialState, posts:action.posts};
        case ADD_POST:
            return {...initialState, posts:[...state.posts,action.post]};
    }


    return state;
};

export default rootReducer;