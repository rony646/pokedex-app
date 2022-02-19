import { createStore } from 'redux';

import { pokemonsReducer } from './reducers/pokemonsReducer';

export const store = createStore(pokemonsReducer);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
