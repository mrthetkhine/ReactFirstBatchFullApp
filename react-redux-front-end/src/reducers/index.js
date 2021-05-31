import { combineReducers } from 'redux';
import postReducer from './PostReducer';
import commentReducer from "./CommentReducer";
export default combineReducers({
    posts:postReducer,
    comments:commentReducer
});