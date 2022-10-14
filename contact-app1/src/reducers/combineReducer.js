import { combineReducers } from "redux";
import indexReducers from "./indexReducers";

const rootReducer = combineReducers({
  indexReducers,
});

export default rootReducer;
