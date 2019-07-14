import reduceReducers from "reduce-reducers";

const initialState = {
  messages: [],
  loading: false,
  error: null
};

import { fetching } from "./reducers/fetch.reducer";
import { messaging } from "./reducers/message.reducer";

export { fetchMessages as fetchOperations } from "./operations";

export { default as fetchTypes } from "./constants/fetch.types";
export { default as messagesTypes } from "./constants/messages.types";

export const chat = reduceReducers(initialState, fetching, messaging);
