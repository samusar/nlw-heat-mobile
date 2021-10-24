import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

const SIZES = {
  SMALL: {
    containerSize: 32,
    avatarSize: 28,
  },
  LARGE: {
    containerSize: 48,
    avatarSize: 42,
  },
}

type ContainerProps = {
  size: 'SMALL' | 'LARGE';
}

export const Container = styled(LinearGradient)<ContainerProps>`
  width: ${({size}) => SIZES[size].containerSize}px;
  height: ${({size}) => SIZES[size].containerSize}px;
  border-radius: ${({size}) => ( SIZES[size].containerSize / 2 )}px;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.Image<ContainerProps>`
  width: ${({size}) => SIZES[size].avatarSize}px;
  height: ${({size}) => SIZES[size].avatarSize}px;
  border-radius: ${({size}) => ( SIZES[size].avatarSize / 2 )}px;

  border-width: 4px;
  border-color: ${({theme}) => theme.colors.black_secondary};
`;