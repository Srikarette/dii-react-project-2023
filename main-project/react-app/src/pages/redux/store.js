import { configureStore } from '@reduxjs/toolkit';
import postReducer from './Reducer'; 
import authReducer from './authReducer';

export default configureStore({
  reducer: {
    posts: postReducer,
    users: authReducer
  }
});
