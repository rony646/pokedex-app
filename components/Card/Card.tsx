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
import { pokemonTypeNames } from '../../redux/types/commonTypes';

interface CardProps {
    name: string;
    url: string;
}


const Card = ({ name, url } : CardProps) => {
    const pokemonTypeColor = colors.grass;

    const TouchableComponent = Platform.OS === 'ios' ?  TouchableOpacity : TouchableNativeFeedback;

    return(
        <TouchableComponent>
            <Container color={pokemonTypeColor} style={{width: Platform.OS === 'ios' ? 170 : 180}}>
                <Title>{name}</Title>
                {/* <View style={{marginTop: '5%',}}>
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
                </View> */}
                <PokeballBackground source={require('../../assets/pokeball.png')}/>
                {/* <PokemonImage 
                    source={{uri: `${pokemonImgUrl}`}}
                /> */}
            </Container>
        </TouchableComponent>
    )
}

export default Card;