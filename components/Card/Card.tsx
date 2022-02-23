import React, { useEffect, useState } from 'react';

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

interface CardProps {
    name: string;
    url: string;
}

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


const Card = ({ name, url } : CardProps) => {

    const [pokemonInfo, setPokemonInfo] = useState<PokemonInfo | null>(null);

    const TouchableComponent = Platform.OS === 'ios' ?  TouchableOpacity : TouchableNativeFeedback;

    const fetchPokemonInfo = async () => {
        const response = await fetch(url);
        const data: PokemonApiResponse = await response.json();

        const pokemonData: PokemonInfo = {
            type: data.types.map((type) => type.type.name),
            imgUrl: data.sprites.other.home.front_default,
        }

        setPokemonInfo(pokemonData);
    }

    useEffect(() => {
        fetchPokemonInfo();
    }, [])

    const typeColor = getPokemonTypeColor(pokemonInfo?.type[0] as string);

    return pokemonInfo ? (
        <TouchableComponent>
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

export default Card;