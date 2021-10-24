import React from 'react';
import { Text } from 'react-native';
import { FavoriteMessageList } from '../../components/FavoriteMessageList';

import { 
  Container,
} from './styles';

export function Favorites() {
  return (
    <Container>
      <FavoriteMessageList />
    </Container>
  );
}