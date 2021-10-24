import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { useFavoriteMessages } from '../../hooks/favorites';

import { api } from '../../services/api';
import { Message, IMessageProps } from '../Message';

import { 
  Container,
} from './styles';

const messagesQueue: IMessageProps[] = [];

const socket = io(String(api.defaults.baseURL));

socket.on('new_message', (newMessage) => {
  messagesQueue.push(newMessage);
});

export function FavoriteMessageList() {
  const { messages } = useFavoriteMessages();

  return (
    <Container keyboardShouldPersistTaps="never" >
      {messages.map((message) => (
        <Message key={message.id} data={message} />
      ))}
    </Container>
  );
}