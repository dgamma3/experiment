import {Text} from 'react-native';
import {useContext} from 'react';
import {OverlayContext} from './OverlayPrivder.js';

const Test = () => {
  const {setOverlayVisible} = useContext(OverlayContext);

  setOverlayVisible(false);
  return (
    <>
      {' '}
      <Text>sdfs</Text>
    </>
  );
};

export default Test;
