import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import userReducer from "./userReducer";

const mainReducers = combineReducers({
    loginData : loginReducer,
    userData : userReducer
});

export default mainReducers;