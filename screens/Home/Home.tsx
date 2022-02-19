import React from 'react';

import Card from '../../components/Card/Card';
import { Text } from 'react-native';
import { Container, Title, PokeballImage, PokemonList } from './styles';
import { Pokemon } from '../../redux/types/commonTypes';
import { useAppSelector } from '../../redux/hooks';


const Home = () => {

    const pokemons = useAppSelector(state => state.pokemons);

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
            {pokemons.length ? 
                (<PokemonList 
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    data={pokemons} 
                    renderItem={renderCard} 
                    keyExtractor={item => item.id.toString()}
                    numColumns={2}
                />) : 
                (<Text>No pokemons were found to show :(</Text>)
            }
        </Container>
    ) 
};

export default Home;