import {
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
  GET_LIST_ERROR,
} from '@/Storages/actionTypes';

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: true,
};

const List = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case GET_LIST_SUCCESS:
      return {
        ...state,
        data: payload,
        message: payload.status,
        isLoading: false,
        isError: false,
        isSuccess: true,
      };
    case GET_LIST_ERROR:
      return {
        ...state,
        data: payload,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };

    default:
      return state;
  }
};

export default List;
