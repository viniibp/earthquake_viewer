import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  margin: 3px 5px;
  background-color: ${({ theme }) => theme.COLORS.ALERT};
  border-radius: 4px;
`;

export const LeadingContainer = styled.View`
  flex:1;
  align-items: center;
  justify-content: center;
  padding: 2px;
`;

export const LeadingContent = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  padding: 8px;
  width: 49px;
  height: 49px;
  border: 1px solid #07090D;
  background-color: ${({ theme }) => theme.COLORS.ALERT};
`;

export const InfoContent = styled.View`
  flex: 4;
  padding: 14px 10px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color:  ${({ theme }) => theme.COLORS.TEXT};
`;

export const Subitle = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const Leading = styled.Text`
  font-size: 22px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;