import {
  SET_USER_TOKEN,
  SET_USER_INFO,
  SET_HIDE_INFO,
  SET_HIDE_BOARDINGS,
} from './types';

const initialState = {
  userToken: '',
  userInfo: {},
  hideInfo: false,
  hideBoardings: false,
};

const reducers = (state = initialState, action) => {
  const {type} = action;

  switch (type) {
    case SET_USER_TOKEN:
      return {...state, userToken: action.payload};
    case SET_USER_INFO:
      return {...state, userInfo: action.payload};
    case SET_HIDE_INFO:
      return {...state, hideInfo: action.payload};
    case SET_HIDE_BOARDINGS:
      return {...state, hideBoardings: action.payload};
    default:
      return state;
  }
};

export default reducers;
