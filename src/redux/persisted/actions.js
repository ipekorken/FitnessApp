import {SET_USER_TOKEN, SET_USER_INFO, SET_HIDE_BOARDINGS} from './types';

export const setUserToken = userToken => ({
  type: SET_USER_TOKEN,
  payload: userToken,
});

export const setUserInfo = userInfo => ({
  type: SET_USER_INFO,
  payload: userInfo,
});

export const setHideBoardings = hideBoardings => ({
  type: SET_HIDE_BOARDINGS,
  payload: hideBoardings,
});
