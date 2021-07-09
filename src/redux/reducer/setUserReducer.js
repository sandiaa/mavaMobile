import { constants } from "../constants/constants";

const user = {};
function setUserReducer(state = user, action) {
  switch (action.type) {
    case constants.setUser:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
export default setUserReducer;
