import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas';
import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

export function configureStore() {
  const middleware = [sagaMiddleware];
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
