import styled from 'styled-components/native';
import { colors } from '../../constants/color';

export const Container = styled.View`
    display: flex;
    margin-top: 20%;
    width: 100%;
    height: 100%;
    background: ${colors.lightColor};
    padding: 0 20px;
`;

export const Title = styled.Text`
    color: ${colors.textDarkTitle};
    font-weight: 900;
    font-size: 30px;
    margin-bottom: 20px;
`;

export const PokeballImage = styled.Image`
    width: 220px;
    height: 220px;
    margin-left: 50%;
    margin-top: -23%;
    opacity: 0.2;
`;

export const PokemonList = styled.FlatList`
    margin-bottom: 50px;
`;