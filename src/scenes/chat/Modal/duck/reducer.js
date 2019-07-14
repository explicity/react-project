import types from "./types";

const initialState = {
  isShown: false
};

export const modal = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_MODAL: {
      return {
        ...state,
        isShown: true
      };
    }

    case types.HIDE_MODAL: {
      return {
        ...state,
        isShown: false
      };
    }

    default:
      return state;
  }
}
