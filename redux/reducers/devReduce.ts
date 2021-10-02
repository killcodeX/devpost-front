import { HYDRATE } from "next-redux-wrapper";
import {
  CHANGETHEME,
  OPENSIDE,
  GETGLOBAL,
  GETCATEGORY,
  GETSEO,
} from "../actions/actionConstant";

const initialState = {
  theme: false,
  side: false,
  seo: {},
  global: {},
  categories: [],
};

// Reducers
export const DevReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state, // use previous state
        ...action.payload, // apply delta from hydration
      };
    case CHANGETHEME:
      return {
        ...state,
        theme: !state.theme,
      };
    case OPENSIDE:
      return {
        ...state,
        side: !state.side,
      };
    case GETGLOBAL:
      return {
        ...state,
        global: action.payload,
      };
    case GETCATEGORY:
      return {
        ...state,
        categories: action.payload,
      };
    case GETSEO:
      return {
        ...state,
        seo: action.payload,
      };
    default:
      return state;
  }
};
