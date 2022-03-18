import React from 'react';
import { Modal } from 'react-native';
import { OrderBy } from '../../screens/Home';
import {
  ModalView,
  Button,
  CenteredView,
  TextButton
} from './styles';

interface CustomModalProps {
  visible: boolean;
  setVisible: (value: boolean) => void;
  setOrderBy: (value: keyof typeof OrderBy) => void;
}

export const CustomModal = ({ visible, setVisible, setOrderBy }: CustomModalProps) => {

  const onPress = (value: keyof typeof OrderBy) => {
    setOrderBy(value);
    setVisible(false);
  }

  return (
    <Modal
      animationType="slide"
      visible={visible}
      transparent={true}
      onRequestClose={() => {
        setVisible(!visible);
      }}
    >
      <CenteredView>
        <ModalView>
          <Button onPress={() => setVisible(false)} style={{ position: 'absolute', top: 5, right: 5, width: 35, height: 35, alignItems: 'center', paddingTop: 8, borderRadius: 10}}>
            <TextButton style={{textAlign: 'center'}}>X</TextButton>
          </Button>
          <Button onPress={() => onPress('MostRecentDate')} style={{ elevation: 2 }}>
            <TextButton>{'Most\nRecent'}</TextButton>
          </Button>
          <Button onPress={() => onPress('LeastRecentDate')} style={{ elevation: 2 }}>
            <TextButton>{'Least\nRecent'}</TextButton>
          </Button>
          <Button onPress={() => onPress('GreaterMag')} style={{ elevation: 2 }}>
            <TextButton>{'Greater\nMag'}</TextButton>
          </Button>
          <Button onPress={() => onPress('MinorMag')} style={{ elevation: 2 }}>
            <TextButton>{'Minor\nMag'}</TextButton>
          </Button>
        </ModalView>
      </CenteredView>
    </Modal>
  );
};

export default CustomModal;