import { combineReducers, createStore } from 'redux';
import * as reducers from './ducks';

const rootReducer = combineReducers(reducers)
export const store = createStore(rootReducer)
