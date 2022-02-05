import React from 'react';

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
import { colors } from '../../constants/color';

export type pokemonTypeNames = 'normal' | 'fighting' | 'flying' | 'ground' | 'poison' | 'rock' | 'bug' | 'ghost' | 'steel' | 'fire' | 'water' | 'grass' | 'eletric' | 'psychic' | 'ice' | 'dragon' | 'dark' | 'fairy'

interface CardProps {
    pokemonType: pokemonTypeNames;
    pokemonName: string;
    pokemonImgUrl: string;
    typeTags: {
        type: pokemonTypeNames;
    }[];
}


const Card = ({ pokemonType, pokemonName, pokemonImgUrl, typeTags } : CardProps) => {
    const pokemonTypeColor = colors[pokemonType];

    const TouchableComponent = Platform.OS === 'ios' ?  TouchableOpacity : TouchableNativeFeedback;

    return(
        <TouchableComponent>
            <Container color={pokemonTypeColor} style={{width: Platform.OS === 'ios' ? 170 : 180}}>
                <Title>{pokemonName}</Title>
                <View style={{marginTop: '5%',}}>
                    {typeTags.map(tag => 
                        <Tag color={pokemonTypeColor} key={tag.type}>
                            <Text 
                                style={{
                                    color: colors.lightColor,
                                    fontWeight: 'bold',
                                }}
                            >
                                {tag.type}
                            </Text>
                        </Tag>)
                    }
                </View>
                <PokeballBackground source={require('../../assets/pokeball.png')}/>
                <PokemonImage 
                    source={{uri: `${pokemonImgUrl}`}}
                />
            </Container>
        </TouchableComponent>
    )
}

export default Card;