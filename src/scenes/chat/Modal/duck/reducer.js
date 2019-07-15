import types from "./types";

const initialState = {
  userId: "",
  isShown: false
};

export const modal = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CURRENT_USER_ID: {
      const { id } = action.payload;
      return {
        ...state,
        userId: id
      };
    }
    case types.DROP_CURRENT_USER_ID: {
      return {
        ...state,
        userId: ""
      };
    }

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
};
