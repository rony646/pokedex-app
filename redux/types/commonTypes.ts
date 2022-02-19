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

export interface State {
    pokemons: Pokemon[];
};
