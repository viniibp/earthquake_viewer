import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { getEarthquakes } from '../services/api';
import { Container } from './styles';

interface IEarthquake {
  properties: {
    title: string;
    mag: string;
    place: string;
  }
}

export const Home = () => {
  const [earthquakes, setEartquakes] = useState<IEarthquake[]>([]);

  useEffect(() => {
    getEarthquakes().then(setEartquakes);
  }, [])

  return (
    <Container>
      {earthquakes.map(eq => {
        return <Text>{eq.properties.place}</Text>
      })}
    </Container>
  );
};

export default Home;