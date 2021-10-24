import React from 'react';
import { ActivityIndicator, ColorValue, TouchableOpacityProps } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import { 
  Container,
  Title,
} from './styles';

type IButtonProps = TouchableOpacityProps & {
  title: string;
  color: ColorValue;
  backgroundColor: ColorValue;
  icon?: React.ComponentProps<typeof AntDesign>['name'];
  isLoading?: boolean;
};

export function Button({
  isLoading = false,
  color,
  title,
  backgroundColor,
  icon,
  ...rest
}: IButtonProps) {

  return (
    <Container 
      activeOpacity={0.7} 
      backgroundColor={backgroundColor}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={color} />
      ) : (
        <>
          {icon && (
            <AntDesign name={icon} size={24} style={{ marginRight: 12 }} />
          )}
          <Title color={color}>
            {title}
          </Title>
        </>
      )}
      
    </Container>
  );
}