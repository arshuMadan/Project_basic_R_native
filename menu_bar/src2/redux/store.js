import { createStore} from 'redux';
import {reducer} from './reduser.js';

 

export const Store = createStore(reducer);