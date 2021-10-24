import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background: ${({ theme }) => theme.colors.black_secondary};

  padding-top: ${getStatusBarHeight() + 17}px;

  padding-bottom: ${getBottomSpace()}px;
`;
