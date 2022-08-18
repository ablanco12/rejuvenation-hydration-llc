import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/products/productSlice';
// import userSlice from '../features/user/userSlice';
// import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    movie: productReducer
    // user: userSlice
  },
});
