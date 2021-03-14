import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes'

// https://api.hgbrasil.com/weather?key=a973bdd3
// https://api.hgbrasil.com/weather?key=a973bdd3&lat=-23.682&lon=-46.875
// https://api.hgbrasil.com/weather?key=a973bdd3&city_name=Campinas,SP

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Routes />
    </NavigationContainer>
  );
}

export default App;