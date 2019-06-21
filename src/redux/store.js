import { createStore, applyMiddleware } from "redux";
import markdownReducer from "./markdownReducer";

import logger from "redux-logger";
import thunk from "redux-thunk";

export default createStore(markdownReducer, applyMiddleware(logger, thunk));
