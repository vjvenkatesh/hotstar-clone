import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import movieReducers from '../features/movie/movieSlice';
import userSlice from '../features/user/userSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    movie: movieReducers,
    user: userSlice,
  },
});
