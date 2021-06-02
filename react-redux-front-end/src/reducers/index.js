import { combineReducers } from 'redux';
import postReducer from './PostReducer';
import commentReducer from "./CommentReducer";
import userReducer from "./UserReducers";
export default combineReducers({
    posts:postReducer,
    comments:commentReducer,
    user: userReducer
});