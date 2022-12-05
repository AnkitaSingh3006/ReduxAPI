import { combineReducers } from "redux";
import userReducer from "./userReducer";

const mainReducers = combineReducers({
    userData : userReducer
});

export default mainReducers;