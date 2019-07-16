import types from './types';

export const setCurrentUserId = id => ({
  type: types.SET_CURRENT_USER_ID,
  payload: {
    id
  }
});

export const dropCurrentUserId = () => ({
  type: types.DROP_CURRENT_USER_ID
});

export const showModal = () => ({
  type: types.SHOW_MODAL
});

export const hideModal = () => ({
  type: types.HIDE_MODAL
});
