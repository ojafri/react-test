import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import reducer from "../reducers";

//More about thunk here https://github.com/gaearon/redux-thunk
const middleware = applyMiddleware(promise, thunk, logger);

export default createStore(reducer, middleware);