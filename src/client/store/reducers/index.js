/* eslint-disable import/no-named-default */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { default as toastr } from './toastr';
import { default as auth } from './auth';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    toastr,
    auth
  });

export default rootReducer;
