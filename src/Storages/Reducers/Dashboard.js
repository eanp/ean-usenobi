import {
  POST_DASHBOARD_REQUEST,
  POST_DASHBOARD_SUCCESS,
  POST_DASHBOARD_ERROR,
} from '@/Storages/actionTypes';

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: true,
};

const Dashboard = (state = initialState, {type, payload}) => {
  switch (type) {
    case POST_DASHBOARD_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case POST_DASHBOARD_SUCCESS:
      return {
        ...state,
        data: payload,
        message: payload.status,
        isLoading: false,
        isError: false,
        isSuccess: true,
      };
    case POST_DASHBOARD_ERROR:
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

export default Dashboard;
