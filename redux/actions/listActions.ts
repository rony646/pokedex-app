import { Dispatch } from "redux";
import { PokemonResume } from "../types/commonTypes";

export const GET_POKEMON_LIST = "GET_POKEMON_LIST";
export const SET_LOADING = "SET_LOADING";

interface GetPokemonListAction {
    type: typeof GET_POKEMON_LIST;
    payload: {
        fetchUrl: string;
        list: PokemonResume[],
        initial: boolean;
    };
};

interface SetLoadingAction {
    type: typeof SET_LOADING;
    payload: boolean;
}



export const getPokemons = (fetchUrl: string, initial = false) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: SET_LOADING,
                payload: true,
            })
            const response = await fetch(fetchUrl);
            
            if(!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();

            dispatch({
                type: GET_POKEMON_LIST,
                payload: {
                    fetchUrl: data.next,
                    list: data.results,
                    initial: initial,
                },
            })

        } catch (err) {
            throw err;
        }
    }
};


export type pokemonListActionsTypes = GetPokemonListAction | SetLoadingAction;