import {ADD_POST, DELETE_POST, LOAD_POSTS} from "../action/constant/action-type";

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
        case DELETE_POST:
            return {...initialState, posts:state.posts.filter(post=>post._id != action.post._id)};


    }


    return state;
};

export default rootReducer;