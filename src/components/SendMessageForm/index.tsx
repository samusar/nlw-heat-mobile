import React, { useState } from 'react';
import { Alert, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import { useTheme } from 'styled-components';
import { api } from '../../services/api';
import { Button } from '../Button';

import { 
  Container,
  FieldInput,
} from './styles';

export function SendMessageForm() {
  const { colors } = useTheme();

  const [message, setMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);

  async function handleSendMessage() {
    const messageFormatted = message.trim();

    if(messageFormatted.length > 0) {
      setSendingMessage(true);

      await api.post('/messages', { message: messageFormatted });
      setMessage('');
      Keyboard.dismiss();
      setSendingMessage(false);
      Alert.alert('Mensagem enviada com sucesso!');
    }
  }
  
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container>
        <FieldInput
          keyboardAppearance="dark"
          placeholder="Qual sua expectativa para o DoWhile?"
          placeholderTextColor={colors.gray_primary}
          style={{ textAlignVertical: 'top' }}
          maxLength={140}
          multiline
          value={message}
          onChangeText={setMessage}
          editable={!sendingMessage}
        />

        <Button
          title="ENVIAR MESAGEM"
          backgroundColor={colors.pink}
          color={colors.white}
          isLoading={sendingMessage}
          onPress={handleSendMessage}
        />
      </Container>
    </KeyboardAvoidingView>
  );
}