import { configureStore } from '@reduxjs/toolkit';
import postReducer from './Reducer'; 

export default configureStore({
  reducer: {
    posts: postReducer
  }
});
