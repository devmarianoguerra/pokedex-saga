import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import fetchSaga from "../sagas/fetchSaga";
import logger from "redux-logger";

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleWare, logger));

sagaMiddleWare.run(fetchSaga);

export default store;
