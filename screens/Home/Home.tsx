import React from 'react';

import { FlatList, View } from 'react-native';
import { Container, Title, PokeballImage, PokemonList } from './styles';
import Card, { pokemonTypeNames } from '../../components/Card/Card';

interface PokemonData {
    id: number;
    name: string;
    type: pokemonTypeNames;
    imgUrl: string;
    typeTags: {
        type: pokemonTypeNames;
    }[];
}

const pokemons: PokemonData[] = [
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
    {
        id: 3,
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
        id: 4,
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

const Home = () => {

    const renderCard = (item: any) => (
        <Card
            pokemonName={item.item.name}
            pokemonType={item.item.type}
            pokemonImgUrl={item.item.imgUrl}
            typeTags={item.item.typeTags}
        />
    );

    return(
        <Container>
            <PokeballImage source={require('../../assets/pokeball.png')}/>
            <Title>Pokedex</Title>
            <PokemonList 
                columnWrapperStyle={{justifyContent: 'space-between'}}
                data={pokemons} 
                renderItem={renderCard} 
                keyExtractor={item => item.id.toString()}
                numColumns={2}
            />
        </Container>
    ) 
};

export default Home;