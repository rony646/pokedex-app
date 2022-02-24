export type pokemonTypeNames = 'normal' | 'fighting' | 'flying' | 'ground' | 'poison' | 'rock' | 'bug' | 'ghost' | 'steel' | 'fire' | 'water' | 'grass' | 'eletric' | 'psychic' | 'ice' | 'dragon' | 'dark' | 'fairy';

export type Pokemon = {
    id: number;
    name: string;
    type: pokemonTypeNames;
    imgUrl: string;
    typeTags: {
        type: pokemonTypeNames;
    }[];
};

export type PokemonResume = {
    name: string;
    url: string;
}

export interface State {
    pokemons: PokemonResume[];
    listUrl: string;
    loading: boolean;
};
