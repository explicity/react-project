import types from "./types";

export default function(state = [], action) {
  console.log('action: ', action);

  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return { ...state };
    case types.LOGIN_FAILURE:
      return { ...state };
    default:
      return state;
  }
}
