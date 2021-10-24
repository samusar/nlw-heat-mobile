import React from 'react';
import { Image } from 'react-native';
import { useTheme } from 'styled-components';
import avatarDefault from '../../assets/avatar.png';

import { 
  Container,
  Avatar,
} from './styles';


type UserPhotoProps = {
  imageUri: string | undefined;
  size?: 'SMALL' | 'LARGE';
}

const AVATAR_DEFAULT = Image.resolveAssetSource(avatarDefault).uri;

export function UserPhoto({ imageUri, size = 'LARGE' }: UserPhotoProps) {
  const { colors } = useTheme();
  return (
    <Container
      start={{
        x: 0,
        y: 0.8,
      }}
      end={{
        x: 0.9,
        y: 1,
      }}
      colors={[
        colors.pink,
        colors.yellow,
      ]}
      size={size}
    >
      <Avatar 
        size={size}
        source={{ uri: imageUri  || AVATAR_DEFAULT }} 
      />
    </Container>
  );
}