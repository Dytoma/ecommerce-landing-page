import { configureStore } from '@reduxjs/toolkit';

import counterSlice from '../features/counterSlice';
import addSlice from '../features/addSlice';
import darkModeSlice from '../features/darkModeSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    addItem: addSlice,
    darkMode: darkModeSlice
  },
});
