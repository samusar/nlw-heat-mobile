import React from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import { Header } from '../../components/Header';
import { MessageList } from '../../components/MessageList';
import { Navbar } from '../../components/Navbar';
import { SendMessageForm } from '../../components/SendMessageForm';
import { SignInBox } from '../../components/SignInBox';
import { useAuth } from '../../hooks/auth';

import { 
  Container,
} from './styles';

type HomeProps = {
  navigation: NavigationProp<ParamListBase>;
}

export function Home({ navigation }: HomeProps) {
  const { user } = useAuth();

  return (
    <Container>
      <Header />
      { !!user && (
        <Navbar navigation={navigation} />
      )}
      
      <MessageList />
      {!!user ? (
        <SendMessageForm />
      ) : (
        <SignInBox />
      )}
    </Container>
  );
}