import styled from 'styled-components/native';
import { colors } from '../../constants/color';

export const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background: #ccc;
`

export const DetailsBox = styled.View`
  background: ${colors.lightColor};
  width: 100%;
  height: 50%;
  border-radius: 35px;
`;