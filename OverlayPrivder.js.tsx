import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const OverlayContext = React.createContext(false);
const OverlayProvider = ({children}) => {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  return (
    <OverlayContext.Provider value={{setOverlayVisible}}>
      <View>
        <View style={overlayVisible ? overlayStyle : defaultStyle} />
        {children}
      </View>
    </OverlayContext.Provider>
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
