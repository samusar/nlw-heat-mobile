import React from 'react';

import LogoSvg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';
import { UserPhoto } from '../UserPhoto';

import { 
  Container, 
  SignOutButton, 
  SignOutText,
} from './styles';

export function Header() {
  const { user, singOut } = useAuth();

  return (
    <Container>
      <LogoSvg />
      
      <SignOutButton disabled={!user} onPress={singOut}>
        {!!user && (
          <SignOutText>
            Sair
          </SignOutText>
        )}
        <UserPhoto imageUri={!!user ? user.avatar_url : undefined} />
      </SignOutButton>
    </Container>
  );
}