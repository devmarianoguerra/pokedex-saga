import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import fetchSaga from "../sagas/fetchSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(fetchSaga);

export default store;
