import styled from 'styled-components/native';
import { MotiView } from 'moti';
import { AntDesign } from '@expo/vector-icons';

type IconFavoriteProps = {
  isFavorite: boolean;
}

export const Container = styled(MotiView)`
  width: 100%;
  margin-bottom: 36px;
  border-top-width: 1;
  border-top-color: ${({theme}) => theme.colors.black_tertiary};
  padding-top: 8px;
`;

export const FavoriteButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const FavoriteIcon = styled(AntDesign)<IconFavoriteProps>`
  color: ${({theme, isFavorite}) => isFavorite ? theme.colors.yellow : theme.colors.white};
  margin-bottom: 8px;
  margin-right: 4px;
`;

export const FavoriteText = styled.Text`
  font-size: 12px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.white};
`;


export const ContentMessageText = styled.Text`
  font-size: 15px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.white};
  line-height: 20px;
  margin-bottom: 12px;
`;

export const ContainerFooter = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const UserName = styled.Text`
  font-size: 15px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.white};
  margin-left: 16px;
`;