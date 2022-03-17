import React from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import {
  Container,
  LeadingContainer,
  LeadingContent,
  InfoContent,
  Title,
  Subitle,
  Leading
} from './styles';

interface ListTileProps {
  title: string;
  subtitle: string;
  leading: string;
  onTap: () => void;
}

export const ListTile = ({ title, subtitle, leading, onTap}: ListTileProps) => {
  return (
    <TouchableOpacity onPress={onTap}>
      <Container>
        <LeadingContainer>
          <LeadingContent>
            <Leading>{leading.length !== 1 ? leading.slice(0, 3) : leading.padEnd(3, '.0')}</Leading>
          </LeadingContent>
        </LeadingContainer>
        <InfoContent>
          <Title numberOfLines={1}>{title}</Title>
          <Subitle>{subtitle}</Subitle>
        </InfoContent>
      </Container>
    </TouchableOpacity>
  );
};

export default ListTile;