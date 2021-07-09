import { constants } from "../constants/constants";

export const setUserAction = (user) => {
  return {
    type: constants.setUser,
    payload: user,
  };
};
