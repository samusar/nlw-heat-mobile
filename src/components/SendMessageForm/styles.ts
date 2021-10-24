import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 184px;
  background-color: ${({theme}) => theme.colors.black_tertiary};
  padding: 16px 24px;
`;

export const FieldInput = styled(TextInput)`
  width: 100%;
  height: 88px;
  color: ${({theme}) => theme.colors.white};
`;