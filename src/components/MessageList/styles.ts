import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 105,
    paddingBottom: Platform.OS === 'android' ? 184 : 8,
  },
})`
  flex: 1;
  padding: 0 20px;
`;