/*import { createStore} from 'redux';
import {reducer} from './reduser.js';

 

export const Store = createStore(reducer);
*/
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './reduser.js'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
})