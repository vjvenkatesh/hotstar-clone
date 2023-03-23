import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import movieReducers from '../features/movie/movieSlice';

export const store = configureStore({
  reducer: {
    movie: movieReducers,
  },
});
