import React from 'react';
import { useTheme } from 'styled-components';
import { useAuth } from '../../hooks/auth';
import { Button } from '../Button';

import { 
  Container,
} from './styles';

export function SignInBox() {
  const { signIn, isSignIn } = useAuth();

  const { colors } = useTheme();

  return (
    <Container>
      <Button
        title="Entrar com o Github"
        backgroundColor={colors.yellow}
        color={colors.black_primary}
        icon="github"
        onPress={signIn}
        isLoading={isSignIn}
      />
    </Container>
  );
}