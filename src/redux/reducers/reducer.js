import { combineReducers } from 'redux';
import authReducer from './authReducer';
import categoryReducer from './categoryReducer';
import productReducer from './productReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  product: productReducer,
  auth: authReducer,
  user: userReducer,
  category: categoryReducer
});

export default rootReducer;