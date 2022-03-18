import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #3160AD;
`;

export const Header = styled.View`
  height: 80px;
  flex-direction: row-reverse;
  align-items: center;
  background-color: #1A57AD;
  margin-bottom: 7px;
  padding-top: 24px;
`;

export const OrderOption = styled.TouchableOpacity`
  margin: 7px;
  background-color: #386BE0;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 40px;
  height: 40px;
`;

export const ListView = styled.ScrollView`
  flex: 7;
  padding: 0 7px;
`;
