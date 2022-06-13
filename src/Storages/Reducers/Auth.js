import {
  POST_LOGIN_REQUEST,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_ERROR,
  DELETE_STORE_TOKEN,
} from '@/Storages/actionTypes';

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: true,
};

const Auth = (state = initialState, {type, payload}) => {
  switch (type) {
    case POST_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case POST_LOGIN_SUCCESS:
      return {
        ...state,
        data: payload,
        message: payload.message,
        isLoading: false,
        isError: false,
        isSuccess: true,
      };
    case POST_LOGIN_ERROR:
      return {
        ...state,
        data: payload,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    case DELETE_STORE_TOKEN:
      return {
        ...state,
        data: null,
        isLoading: false,
        isError: false,
        isSuccess: true,
      };

    default:
      return state;
  }
};

export default Auth;
