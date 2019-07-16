import types from "./types";

export const loginUserAction = (user) => {
  return {
    type: types.LOGIN_REQUEST,
    user
  };
};
