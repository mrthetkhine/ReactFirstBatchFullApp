import {LOAD_COMMENTS} from "../action/constant/action-type";

const initialState = [
    /*
    {
    _id: 1,
    text: "Comment Demo"
},
    {
        _id: 2,
        text: "Second comment Demo"
    }
    */
];
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