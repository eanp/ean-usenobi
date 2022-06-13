import {
  POST_LOGIN_REQUEST,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_ERROR,
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
  GET_LIST_ERROR,
  POST_DASHBOARD_REQUEST,
  POST_DASHBOARD_SUCCESS,
  POST_DASHBOARD_ERROR,
  DELETE_STORE_TOKEN,
} from '@/Storages/actionTypes';
import {base} from '@/Utils/Variable';

export const login = data => {
  return dispatch => {
    dispatch({type: POST_LOGIN_REQUEST});
    let collection = data;
    fetch(base + 'login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(collection),
    })
      .then(response => response.json())
      .then(responJson => {
        if (responJson.status === 'ok') {
          dispatch({type: POST_LOGIN_SUCCESS, payload: responJson});
        } else {
          dispatch({type: POST_LOGIN_ERROR, payload: responJson.message});
        }
      })
      .catch(error => {
        dispatch({type: POST_LOGIN_ERROR, payload: error.toString()});
      });
  };
};

export const getList = () => {
  return dispatch => {
    dispatch({type: GET_LIST_REQUEST});
    fetch(base + 'list', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then(responJson => {
        console.log('res', responJson);
        if (responJson.status === 'ok') {
          dispatch({type: GET_LIST_SUCCESS, payload: responJson});
        } else {
          dispatch({type: GET_LIST_ERROR, payload: responJson.message});
        }
      })
      .catch(error => {
        dispatch({type: GET_LIST_ERROR, payload: error.toString()});
      });
  };
};

export const postDashboard = () => {
  return (dispatch, getState) => {
    let token = getState().Auth.data.token;
    let collection = {};
    collection.token = token;
    dispatch({type: POST_DASHBOARD_REQUEST});
    fetch(base + 'dashboard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(collection),
    })
      .then(response => response.json())
      .then(responJson => {
        if (responJson.status === 'ok') {
          dispatch({type: POST_DASHBOARD_SUCCESS, payload: responJson});
        } else {
          dispatch({type: POST_DASHBOARD_ERROR, payload: responJson.message});
        }
      })
      .catch(error => {
        dispatch({type: POST_DASHBOARD_ERROR, payload: error.toString()});
      });
  };
};

export const logout = () => {
  return dispatch => {
    dispatch({type: DELETE_STORE_TOKEN});
  };
};
