import { useEffect } from 'react';

import Card from '../../components/Card/Card';
import { Text, StyleSheet, View } from 'react-native';
import { 
    Container, 
    Title, 
    PokeballImage, 
    PokemonList, 
    LoadingMsgContainer,
    LoadMoreButton
 } from './styles';
import { colors } from '../../constants/color';

import { getPokemons } from '../../redux/actions/listActions';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/hooks';


const Home = () => {
    const dispatch = useDispatch();

    const pokemons = useAppSelector(state => state.pokemons);
    const fetchUrl = useAppSelector(state => state.listUrl);
    const isLoading = useAppSelector(state => state.loading);

    const renderCard = (item: any) => (
        <Card
            name={item.item.name}
            url={item.item.url}
        />
    );

    useEffect( () => {
        dispatch(getPokemons('https://pokeapi.co/api/v2/pokemon/?limit=8', true));
    }, []);

    return(
        <View style={styles.wrapper}>
            <Container>
                <PokeballImage source={require('../../assets/pokeball.png')}/>
                <Title>Pokedex</Title>
                {pokemons.length ? 
                    (<PokemonList 
                        columnWrapperStyle={{justifyContent: 'space-between'}}
                        data={pokemons} 
                        renderItem={renderCard} 
                        keyExtractor={item => item.url}
                        numColumns={2}
                    />) : 
                    (<Text>No pokemons were found to show :(</Text>)
                }
                <LoadingMsgContainer>
                    <LoadMoreButton 
                        title={isLoading ? 'Loading...' : 'Load More'}
                        color={colors.buttonColor}
                        disabled={isLoading}
                        onPress={() => {
                            dispatch(getPokemons(fetchUrl))
                        }}
                    />
                </LoadingMsgContainer>
            </Container>
        </View>
    ) 
};

const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default Home;