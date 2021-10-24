import React from 'react';

import {NavigationProp, ParamListBase} from '@react-navigation/native';

import { 
  Container, 
  Icon,
  FavoritesButton, 
  FavoritesText,
} from './styles';

type NavbarProps = {
  navigation: NavigationProp<ParamListBase>;
}

export function Navbar({ navigation }: NavbarProps) {
  const handleNavigateFavorites = () => {
    navigation.navigate('Favorites');
  };

  return (
    <Container>
      <FavoritesButton onPress={handleNavigateFavorites}>
        <Icon name="star" size={16} />
        <FavoritesText>
          Ver Favoritos
        </FavoritesText>
      </FavoritesButton>
    </Container>
  );
}