import styled from 'styled-components/native';

export const ModalView = styled.View`
  margin: 20px;
  background-color: white;
  border-radius: 20px;
  padding: 35px;
  align-items: center;
  position: relative;
  flex-direction: row;
`;

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  border-radius: 20px;
  padding: 10px;
  background-color: #2196F3;
  margin-right: 4px;
`;

export const TextButton = styled.Text`
  color: white;
  text-align: center;
  padding: 0 4px;
`;