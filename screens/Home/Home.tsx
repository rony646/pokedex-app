import React, { useEffect } from 'react';

import Card from '../../components/Card/Card';
import { Text } from 'react-native';
import { Container, Title, PokeballImage, PokemonList } from './styles';

import { getAllPokemons } from '../../redux/actions/listActions';
import { useDispatch } from 'react-redux';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';


const Home = () => {
    const dispatch = useDispatch();

    const pokemons = useAppSelector(state => state.pokemons);

    const renderCard = (item: any) => (
        <Card
            name={item.item.name}
            url={item.item.url}
        />
    );

    useEffect(() => {
        dispatch(getAllPokemons());
    }, []);

    return(
        <Container>
            <PokeballImage source={require('../../assets/pokeball.png')}/>
            <Title>Pokedex</Title>
            {pokemons.length ? 
                (<PokemonList 
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    data={pokemons} 
                    renderItem={renderCard} 
                    keyExtractor={item => item.name}
                    numColumns={2}
                    onEndReached={() => console.log('end reached')}
                />) : 
                (<Text>No pokemons were found to show :(</Text>)
            }
        </Container>
    ) 
};

export default Home;