import React, { 
  useState,
  createContext,
  useContext,
  ReactNode,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from './auth';

const PREFIX_STORAGE = '@nlwheat:messages:favorites';

type IMessage = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  }
};

type IFavoritesMessageContextData = {
  messages: IMessage[];
  addFavoriteMessage: (data: IMessage) => Promise<void>;
  removeFavoriteMessage: (id: string) => Promise<void>;
};

type IFavoritesMessageProviderProps = {
  children: ReactNode;
};

const FavoriteMessageContext = createContext({} as IFavoritesMessageContextData);

export function FavoriteMessagesProvider({ children }: IFavoritesMessageProviderProps) {
  const { user } = useAuth();
  const [messages, setMessages] = useState<IMessage[]>([]);
  
  async function getStorage() {
    return AsyncStorage.getItem(`${PREFIX_STORAGE}:${user?.id}`); 
  }
  
  async function updateStorage(messages: IMessage[]) {
    await AsyncStorage.setItem(`${PREFIX_STORAGE}:${user?.id}`, JSON.stringify(messages)); 
  }

  useEffect(() => {
    async function loadUserStorageData() {
      const messagesStorage = await getStorage();
      if(messagesStorage) {
        setMessages(JSON.parse(messagesStorage));
      }
    }

    loadUserStorageData();
  }, []);

  async function addFavoriteMessage(message: IMessage) {
    const messagesAll = [...messages, message];
    setMessages(messagesAll);

    updateStorage(messagesAll);
  }

  async function removeFavoriteMessage(id: string) {
    const messagesAll = messages.filter(msg => msg.id !== id);
    setMessages(messagesAll);

    updateStorage(messagesAll);
  }


  return (
    <FavoriteMessageContext.Provider value={{ 
      messages,
      addFavoriteMessage,
      removeFavoriteMessage,
    }}>
      {children}
    </FavoriteMessageContext.Provider>
  );
}

export function useFavoriteMessages() {
  const context = useContext(FavoriteMessageContext);

  return context;
}