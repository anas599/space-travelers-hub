import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    books: rocketsReducer,
  },
});
export default store;
