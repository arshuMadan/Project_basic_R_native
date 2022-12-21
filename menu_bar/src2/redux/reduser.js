/*import {SET_EMAIL_,SET_PASSWORD_} from './actions.js'
const initialState = {
    email: 'empty',
    password:'empty'
  };
   
export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_EMAIL_:
        return {
          ...state,
          email: action.email,
        };
      case SET_PASSWORD_:
        return {
          ...state,
          password: action.password,
        };
      default:
        return state;
    }
  };
*/
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: 'empty',
  password:'empty'
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    set_email: (state,val1) => {
      state.email = val1
    },
    set_password: (state,val1) => {
      state.password = val1
    },
  },
})

export const { set_email, set_password } = counterSlice.actions

export default counterSlice.reducer