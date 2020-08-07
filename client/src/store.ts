import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";
import rootSaga from "./middleware/saga";

import AppEnv from "./utils/AppEnv";

const sagaMiddleWare = createSagaMiddleware();

/**
 * configureStore() creates store and
 *  used to set dev/production middleWares.
 */
const configureStore = () => {
  const middleWares = [sagaMiddleWare];
  const devMiddleWares = [...middleWares];

  const appliedMiddleWares = AppEnv.isDev() ? devMiddleWares : middleWares;

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...appliedMiddleWares))
  );

  return store;
};

const store = configureStore();

sagaMiddleWare.run(rootSaga);

export default store;
