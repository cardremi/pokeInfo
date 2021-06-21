import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {Store} from './Src/Store/Store';
import Nav from './Src/Components/Nav';
import AnimatedSplash from 'react-native-animated-splash-screen';
import { navigationRef } from "./Src/Utils/HelperNav";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 5000);
  }, []);
  return (
    <Provider store={Store}>
      <NavigationContainer ref={navigationRef}>
        <AnimatedSplash
          logoWidht={240}
          logoHeight={240}
          isLoaded={isLoaded}
          backgroundColor={'#ffde03'}
          logoImage={require('./Src/Assets/pokeball.png')}>
          <Nav />
        </AnimatedSplash>
      </NavigationContainer>
    </Provider>
  );
}
