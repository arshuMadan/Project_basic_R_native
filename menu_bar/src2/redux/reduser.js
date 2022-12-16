import {SET_EMAIL_,SET_PASSWORD_} from './actions.js'
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
