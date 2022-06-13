import {combineReducers} from 'redux';

import Auth from './Auth';
import List from './List';
import Dashboard from './Dashboard';

const appReducer = combineReducers({
  Auth,
  List,
  Dashboard,
});

export default appReducer;
