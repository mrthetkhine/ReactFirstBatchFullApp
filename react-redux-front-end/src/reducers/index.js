import {LOAD_POSTS} from "../action/constant/action-type";

const initialState = {
    posts: [],
    users: [],
};

function rootReducer(state = initialState, action) {
    switch(action.type)
    {
        case LOAD_POSTS:
            return {...initialState, posts:action.posts};
    }


    return state;
};

export default rootReducer;