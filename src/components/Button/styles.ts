import { ColorValue, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

type IContainerProps = {
  backgroundColor: ColorValue;
}

type ITitleProps = {
  color: ColorValue;
}

export const Container = styled(TouchableOpacity)<IContainerProps>`
  background-color: ${({backgroundColor}) => String(backgroundColor)};
  height: 48px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<ITitleProps>`
  color: ${({ color }) => String(color)};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 14px;
`;