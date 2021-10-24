import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;

  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  margin-top: 8px;
  background-color: ${({ theme }) => theme.colors.black_tertiary};
`;

export const Icon = styled(AntDesign)`
  color: ${({ theme }) => theme.colors.white};
  margin-right: 4px;
`;

export const FavoritesButton = styled.TouchableOpacity`
  padding: 0 4px;
  flex-direction: row;
`;

export const FavoritesText = styled.Text`
  font-size: 15px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.white};
  margin-right: 20px;
`;