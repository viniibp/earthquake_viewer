import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: 25px 6px;
  flex: 1;
`;

export const Header = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const OrderOption = styled.TouchableOpacity`
  flex: 1;
  margin: 5px;
  background-color: paleturquoise;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const ListView = styled.ScrollView`
  flex: 7;
`;
