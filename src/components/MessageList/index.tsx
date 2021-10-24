import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

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

export function MessageList() {
  const [currentMessages, setCurrentMessages] = useState<IMessageProps[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      if(messagesQueue.length > 0) {
        setCurrentMessages(prevState => [messagesQueue[0], prevState[0], prevState[1]]);
        messagesQueue.shift();
      }
    }, 3000);

    return () => {
      clearInterval(timer);
    }
  }, []);

  useEffect(() => {
    async function fecthMessages() {
      const messagesReponse = await api.get<IMessageProps[]>('/messages/last3');
      console.log('messages', messagesReponse.data);
      setCurrentMessages(messagesReponse.data);
    }
    fecthMessages();
  }, []);

  return (
    <Container keyboardShouldPersistTaps="never" >
      {currentMessages.map((message) => (
        <Message key={message.id} data={message} />
      ))}
    </Container>
  );
}