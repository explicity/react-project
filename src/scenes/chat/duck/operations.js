import axios from 'axios';

import {
  fetchMessagesPending,
  fetchMessagesSuccess,
  fetchMessagesError
} from './actions/fetch.actions';

export function fetchMessages() {
  return (dispatch) => {
    dispatch(fetchMessagesPending());
    axios
      .get('https://api.myjson.com/bins/1hiqin')
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchMessagesSuccess(res.data));
        return res.data;
      })
      .catch((err) => {
        dispatch(fetchMessagesError(err));
      });
  };
}
