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

export const ListTile = ({ title, subtitle, leading, onTap }: ListTileProps) => {

  const colorMag = () => {

    const mag = parseFloat(leading);
    if (mag <= 1) return '#2AAD73';
    if (mag > 1 && mag <= 3) return '#E6D468';
    if (mag > 3 && mag < 5) return '#E07639';
    else return '#D2383F';
  };

  return (
    <TouchableOpacity onPress={onTap}>
      <Container>
        <LeadingContainer>
          <LeadingContent style={{ backgroundColor: colorMag() }}>
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