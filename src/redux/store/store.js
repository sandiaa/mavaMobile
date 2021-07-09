import { combineReducers } from "redux";

import setUserReducer from "../reducer/setUserReducer";

const appReducer = combineReducers({
  user: setUserReducer,
});

export default appReducer;
