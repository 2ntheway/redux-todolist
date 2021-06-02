import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import todosagas from "./sagas";
// reducer 负责存储项目数据，把reducer传给store就知道当面项目中的数据有多少
// createStore用于创建store
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    })
  : compose;
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
  // other store enhancers if any
);
const store = createStore(reducer, enhancer);
sagaMiddleware.run(todosagas);
export default store;
