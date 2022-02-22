import { Dispatch } from "redux";
import { PokemonResume } from "../types/commonTypes";

export const GET_POKEMON_LIST = "GET_POKEMON_LIST";
export const SET_LOADING = "SET_LOADING";

interface GetPokemonListAction {
    type: typeof GET_POKEMON_LIST;
    payload: PokemonResume[];
};

export const getAllPokemons = () => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=30');
            
            if(!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();

            dispatch({
                type: GET_POKEMON_LIST,
                payload: data.results,
            })

        } catch (err) {
            throw err;
        }
    }
};

export type pokemonListActionsTypes = GetPokemonListAction;