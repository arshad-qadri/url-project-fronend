import { combineReducers } from "redux";
import reducers from "./index";

const rootReducer = combineReducers({ data: reducers });


export default rootReducer
