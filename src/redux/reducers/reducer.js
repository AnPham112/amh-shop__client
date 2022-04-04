import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productReducer from './productReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  product: productReducer,
  auth: authReducer,
  user: userReducer
});

export default rootReducer;