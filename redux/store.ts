import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { DevReducer } from "./reducers/devReduce";
import thunkMiddleware from 'redux-thunk'
import { createWrapper } from "next-redux-wrapper";

const makeStore = () => createStore(DevReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export const wrapper = createWrapper(makeStore)
