import React, { useEffect, useState, useCallback, memo } from 'react';

import { 
    Text, 
    View, 
    TouchableNativeFeedback,
    TouchableOpacity,
    Platform 
} from 'react-native';
import { 
    Container, 
    Title, 
    Tag, 
    PokeballBackground, 
    PokemonImage
} from './styles';
import { colors, getPokemonTypeColor } from '../../constants/color';
import { pokemonTypeNames } from '../../redux/types/commonTypes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';

interface CardProps {
    name: string;
    url: string;
    navigation?: NavigationProp<RootStackParamList>;
};    

interface PokemonInfo {
    type: pokemonTypeNames[] | string[];
    imgUrl: string;
}

interface PokemonApiResponse {
    types: {
        slot: number;
        type: {
            name: string;
            url: string;
        }
    }[];
    sprites: {
        other: {
            home: {
                front_default: string;
            }
        }
    }
}


const Card = ({ name, url, navigation } : CardProps) => {

    const [pokemonInfo, setPokemonInfo] = useState<PokemonInfo | null>(null);

    const TouchableComponent = Platform.OS === 'ios' ?  TouchableOpacity : TouchableNativeFeedback;

    const fetchPokemonInfo = useCallback(async () => {
        const response = await fetch(url);
        const data: PokemonApiResponse = await response.json();

        const pokemonData: PokemonInfo = {
            type: data.types.map((type) => type.type.name),
            imgUrl: data.sprites.other.home.front_default,
        }

        setPokemonInfo(pokemonData);
    }, [pokemonInfo])

    useEffect(() => {
        fetchPokemonInfo();
    }, [])

    const typeColor = getPokemonTypeColor(pokemonInfo?.type[0] as string);


    return pokemonInfo ? (
        <TouchableComponent onPress={() => navigation?.navigate('PokemonDetail')}>
            <Container color={typeColor} style={{width: Platform.OS === 'ios' ? 170 : 180}}>
                <Title>{name}</Title>
                <View style={{marginTop: '5%',}}>
                    {pokemonInfo.type.map(type => 
                        <Tag color={typeColor} key={type}>
                            <Text 
                                style={{
                                    color: colors.lightColor,
                                    fontWeight: 'bold',
                                }}
                            >
                                {type}
                            </Text>
                        </Tag>)
                    }
                </View>
                <PokeballBackground source={require('../../assets/pokeball.png')}/>
                <PokemonImage 
                    source={{uri: `${pokemonInfo.imgUrl}`}}
                />
            </Container>
        </TouchableComponent>
    ) : null;
}

export default memo(Card);