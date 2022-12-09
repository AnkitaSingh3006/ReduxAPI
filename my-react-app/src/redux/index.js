import { combineReducers } from "redux";
import loginReducer from "./loginReducer";

const mainReducers = combineReducers({
    loginData : loginReducer
});

export default mainReducers;