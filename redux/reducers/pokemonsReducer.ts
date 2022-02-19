import { Pokemon, State } from '../types/commonTypes';

const initialPokemonsState: State = {
    pokemons: [
        {
            id: 1,
            name: 'Bulbasaur',
            type: 'grass',
            imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
            typeTags: [
                {
                    type: 'grass',
                },
                {
                    type: 'poison',
                }
            ],
        },
        {
            id: 2,
            name: 'Bulbasaur',
            type: 'grass',
            imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
            typeTags: [
                {
                    type: 'grass',
                },
                {
                    type: 'poison',
                }
            ],
        },
    ]
}

export function pokemonsReducer(state: State = initialPokemonsState) : State {
    return state;
}