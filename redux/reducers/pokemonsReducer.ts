import { Pokemon, State } from '../types/commonTypes';
import * as listActions from '../actions/listActions';

const initialPokemonsState: State = {
    pokemons: [],
    listUrl: 'https://pokeapi.co/api/v2/pokemon/?limit=8',
    loading: false,
}

export function pokemonsReducer(state: State = initialPokemonsState, action: listActions.pokemonListActionsTypes) : State {
    switch(action.type) {
        case listActions.GET_POKEMON_LIST:
            const newState = {
                pokemons: action.payload.initial ? action.payload.list : [...state.pokemons, ...action.payload.list],
                listUrl: action.payload.fetchUrl,
                loading: false,
            };
            return newState;
        case listActions.SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        default:
            return state;
    };
}