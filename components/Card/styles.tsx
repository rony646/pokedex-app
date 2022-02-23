import styled from 'styled-components/native';
import { colors } from '../../constants/color';

interface CardProps {
    color: string;
}

export const Container = styled.View<CardProps>`
    overflow: hidden;
    background: ${props => props.color};
    height: 140px;
    border-radius: 10px;
    padding: 20px 15px;
    margin-bottom: 10px;
    elevation: 5;
`;

export const Title = styled.Text`
    color: ${colors.lightColor};
    font-weight: bold;
    font-size: 20px;
    text-transform: capitalize;
`;

export const Tag = styled.View<CardProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    margin-top: 3%;
    background: #ffffff2d;
    padding: 5px;
    width: 65px;
`;

export const PokeballBackground = styled.Image`
    position: absolute;
    height: 90px;
    width: 90px;
    right: -5px;
    bottom: -22px;
    opacity: 0.1;
`;

export const PokemonImage = styled.Image`
    position: absolute;
    height: 95px;
    width: 95px;
    bottom: 8px;
    right: 5px;
`;