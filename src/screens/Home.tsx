import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import ListTile from '../components/ListTile';
import { getEarthquakes } from '../services/api';
import { Container, Header, OrderOption, ListView } from './styles';

interface IEarthquake {
  properties: {
    title: string;
    mag: number;
    place: string;
    time: number
  };
  geometry: {
    coordinates: number[]
  };
  id: string;
}

export const Home = () => {
  const [earthquakes, setEartquakes] = useState<IEarthquake[]>([]);
  const [orderBy, setOrderBy] = useState<keyof typeof OrderBy>('MostRecentDate');

  useEffect(() => {
    getEarthquakes().then((eqs: IEarthquake[]) => setEartquakes(eqs));
  }, []);

  const Reorganize = (order: keyof typeof OrderBy) => {

    const greaterMag = [...earthquakes].sort((e1, e2) =>
      e2.properties.mag - e1.properties.mag
    );

    const minorMag = [...earthquakes].sort((e1, e2) =>
      e1.properties.mag - e2.properties.mag
    );

    const mostRecent = [...earthquakes].sort((e1, e2) =>
      e2.properties.time - e1.properties.time
    );

    const leastRecent = [...earthquakes].sort((e1, e2) =>
      e1.properties.time - e2.properties.time
    );

    const organizations = {
      MinorMag: minorMag,
      GreaterMag: greaterMag,
      MostRecentDate: mostRecent,
      LeastRecentDate: leastRecent
    } as { [key in (keyof typeof OrderBy)]: IEarthquake[] };
    return organizations[order];
  }

  useEffect(() => {
    setEartquakes(Reorganize(orderBy));
  }, [orderBy]);

  if (!earthquakes) return null;
  else return (
    <Container>
      <Header>
        <OrderOption onPress={() => setOrderBy('MostRecentDate')}>
          <Text>Most Recent Date</Text>
        </OrderOption>

        <OrderOption onPress={() => setOrderBy('LeastRecentDate')}>
          <Text>Least Recent Date</Text>
        </OrderOption>

        <OrderOption onPress={() => setOrderBy('GreaterMag')}>
          <Text>Greater Mag</Text>
        </OrderOption>

        <OrderOption onPress={() => setOrderBy('MinorMag')}>
          <Text>Minor Mag</Text>
        </OrderOption>
      </Header>
      <ListView>
        {earthquakes.map(eq => <ListTile
          title={eq.properties.place}
          subtitle={new Date(eq.properties.time).toDateString()}
          leading={eq.properties.mag.toString()}
          onTap={() => {
          }}
          key={eq.id}
        />)}
      </ListView>
    </Container>
  );
};

export default Home;

enum OrderBy {
  MostRecentDate,
  LeastRecentDate,
  GreaterMag,
  MinorMag
}