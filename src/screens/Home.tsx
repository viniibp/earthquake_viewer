import React, { useEffect, useState } from 'react';
import { Modal, Pressable, Text } from 'react-native';
import ListTile from '../components/ListTile';
import CustomModal from '../components/Modal';
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
  const [modalVisible, setModalVisible] = useState(false);


  useEffect(() => {
    getEarthquakes().then(setEartquakes);
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
      <CustomModal visible={modalVisible} setVisible={setModalVisible} setOrderBy={setOrderBy} />
      <Header>
        <OrderOption onPress={() => setModalVisible(true)}>
          <Text>🎃</Text>
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

export enum OrderBy {
  MostRecentDate,
  LeastRecentDate,
  GreaterMag,
  MinorMag
}