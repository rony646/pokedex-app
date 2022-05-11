import React, { useEffect, useState } from 'react';

import { RouteType } from '../../navigation/types';
import { View, Text, Modal } from 'react-native';
import { Container, DetailsBox } from './styles';

interface PokemonDetailProps {
    route: RouteType,
}

const PokemonDetail = ({ route }: PokemonDetailProps) => {
    const { params } = route;
    const { pokemonName } = params;


    const [detailData, setDetailData] = useState<any>();

    const fetchPokemDetailData = async () => {
        if(!pokemonName) {
            return;
        }

        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            const data = await response.json();
            console.log('Detail: ', data);
            setDetailData(data);
        } catch {
            console.log('Something went wrong');
        }
    
    };

    useEffect(() => {
        fetchPokemDetailData();
    }, [pokemonName])
    

    return(
        <Container>
            {/* <Text>The pokemon detail screen</Text>
            {detailData && <Text>{detailData.name}</Text>} */}
            <View style={{backgroundColor: 'green', height: '50%', width: '100%'}}>
                <Text>image here</Text>
            </View>
            <DetailsBox>
                <Text>here goes some data</Text>
            </DetailsBox>
        </Container>
    );
};

export default PokemonDetail;