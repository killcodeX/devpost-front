import {
  CHANGETHEME,
  OPENSIDE,
  GETGLOBAL,
  GETCATEGORY,
  GETSEO,
  GETARTICLES,
} from "./actionConstant";

export const getThemeChange = () => {
  return {
    type: CHANGETHEME,
  };
};

export const getSideOpen = () => {
  return {
    type: OPENSIDE,
  };
};

export const getGlobal = (payload) => (dispatch) => {
  dispatch({
    type: GETGLOBAL,
    payload: payload,
  });
};

export const getCategory = (payload) => (dispatch) => {
  dispatch({
    type: GETCATEGORY,
    payload: payload,
  });
};

export const getSeo = (payload) => (dispatch) => {
  dispatch({
    type: GETSEO,
    payload: payload,
  });
};

export const getArticles = (payload) => (dispatch) => {
  dispatch({
    type: GETARTICLES,
    payload: payload,
  });
};
