import {View, Text} from 'react-native';
import {useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const OverlayProvider = ({children}) => {
  const [overlayVisible, setOverlayVisible] = useState(true);
  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  return (
    <View>
      <View style={overlayVisible ? overlayStyle : defaultStyle} />
      {children}
    </View>
  );
};

const defaultStyle = {
  display: 'none',
};

const overlayStyle = {
  width: '100%',
  height: '100%',
  backgroundColor: 'black',
  opacity: 0.8,
  zIndex: 100,
  position: 'absolute',
};

export default OverlayProvider;
