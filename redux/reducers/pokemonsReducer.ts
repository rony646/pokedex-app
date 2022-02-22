import { Pokemon, State } from '../types/commonTypes';
import * as listActions from '../actions/listActions';

const initialPokemonsState: State = {
    pokemons: [],
    loading: false,
}

export function pokemonsReducer(state: State = initialPokemonsState, action: listActions.pokemonListActionsTypes) : State {
    switch(action.type) {
        case listActions.GET_POKEMON_LIST:
            const newState = {
                pokemons: action.payload,
                loading: false,
            };
            return newState;
        default:
            return state;
    };
}