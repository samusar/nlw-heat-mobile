import React, {useMemo} from 'react';
import { useAuth } from '../../hooks/auth';
import { useFavoriteMessages } from '../../hooks/favorites';
import { UserPhoto } from '../UserPhoto';

import { 
  Container,
  ContainerFooter,
  ContentMessageText,
  UserName,
  FavoriteButton,
  FavoriteIcon,
  FavoriteText,
} from './styles';

export type IMessageProps = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  }
}

type Props = {
  data: IMessageProps;
}

export function Message({ data: { id, text, user } }: Props) {
  const { user: userAuth } = useAuth();
  const { addFavoriteMessage, messages, removeFavoriteMessage } = useFavoriteMessages();


  const isFavorite = useMemo(() => {
    if (!messages) {
      return false;
    }
    console.log('messages', messages, messages.findIndex(message => message.id === id));

    return messages.findIndex(message => message.id === id) >= 0;
  }, [messages]);


  function handleFavoriteMessage() {
    if (isFavorite) {
      removeFavoriteMessage(id);

      return;
    }

    addFavoriteMessage({
      id,
      text,
      user,
    });
  }

  return (
    <Container
      from={{
        opacity: 0,
        translateY: -50,
      }}
      animate={{
        opacity: 1,
        translateY: 0,
      }}
      transition={{
        type: 'timing',
        duration: 700,
      }}
    >
      {!!userAuth && (
        <FavoriteButton onPress={handleFavoriteMessage}>
          <FavoriteIcon 
            isFavorite={isFavorite} 
            name={ isFavorite ? 'star' : 'staro' } 
            size={18} 
          />
          <FavoriteText>
            {isFavorite ? 'Remover' : 'Favoritar'}
          </FavoriteText>
        </FavoriteButton>
      )}

      <ContentMessageText>
        { text }
      </ContentMessageText>

      <ContainerFooter>
        <UserPhoto 
          size="SMALL"
          imageUri={ user.avatar_url }
        />

        <UserName>
          { user.name }
        </UserName>

      </ContainerFooter>

    </Container>
  );
}