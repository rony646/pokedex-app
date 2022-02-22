import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import { pokemonsReducer } from './reducers/pokemonsReducer';

export const store = createStore(pokemonsReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
