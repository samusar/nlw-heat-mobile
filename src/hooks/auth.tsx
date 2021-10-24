import React, { 
  useState,
  createContext,
  useContext,
  ReactNode,
  useEffect,
} from 'react';
import * as AuthSessions from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../services/api';

const CLIENT_ID = '216292d0e49cefa38298';
const SCOPE = 'read:user';
const USER_STORAGE = '@nlwheat:user';
const TOKEN_STORAGE = '@nlwheat:token';

type IUser = {
  id: string;
  avatar_url: string;
  name: string;
  login: string;
};

type IAuthContextData = {
  user: IUser | null;
  isSignIn: boolean;
  signIn: () => Promise<void>;
  singOut: () => Promise<void>;
};

type IAuthProviderProps = {
  children: ReactNode;
};

type IAuthResponse = {
  token: string;
  user: IUser;
}

type IAuthorizationResponse = {
  params: {
    code?:string;
    error?: string
  },
  type?:string;
}

const AuthContext = createContext({} as IAuthContextData);

export function AuthProvider({ children }: IAuthProviderProps) {
  const [user, setUser] = useState<IUser | null>(null);
  const [isSignIn, setIsSignIn] = useState(true);
  
  useEffect(() => {
    async function loadUserStorageData() {
      const userStorage = await AsyncStorage.getItem(USER_STORAGE);
      const tokenStorage = await AsyncStorage.getItem(TOKEN_STORAGE);
      if (userStorage && tokenStorage) {
        setUser(JSON.parse(userStorage));
        api.defaults.headers.common['authorization'] = `Bearer ${tokenStorage}`;
      }
      setIsSignIn(false);
    }

    loadUserStorageData();
  }, []);

  async function signIn() {
    setIsSignIn(true);

    try {
      const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`;
      const authSessionResponse = await AuthSessions.startAsync({ authUrl }) as IAuthorizationResponse;
  
      if (
        authSessionResponse.type === 'success' && 
        authSessionResponse.params.error !== 'access_denied'
      ) {
        const authResponse = await api.post<IAuthResponse>(
          '/authenticate', { code: authSessionResponse.params.code }
        );
        const { user: UserData, token } = authResponse.data;
  
        api.defaults.headers.common['authorization'] = `Bearer ${token}`;
        await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(UserData));
        await AsyncStorage.setItem(TOKEN_STORAGE, token);
  
        setUser(UserData);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsSignIn(false);
    }
    

  }

  async function singOut() {
    await AsyncStorage.removeItem(USER_STORAGE);
    await AsyncStorage.removeItem(TOKEN_STORAGE);
    setUser(null);
    api.defaults.headers.common['authorization'] = '';
  }


  return (
    <AuthContext.Provider value={{ 
      user,
      isSignIn,
      signIn,
      singOut,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}