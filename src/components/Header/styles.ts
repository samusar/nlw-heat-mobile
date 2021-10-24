import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const SignOutText = styled.Text`
  font-size: 15px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.white};
  margin-right: 20px;
`;

export const SignOutButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;