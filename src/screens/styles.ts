import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: 25px 6px;
`;

export const Header = styled.View`
  height: 100px;
  flex-direction: row;
  flex: 1;
`;

export const OrderOption = styled.TouchableOpacity`
  flex: 1;
  margin: 5px;
  background-color: paleturquoise;
`;