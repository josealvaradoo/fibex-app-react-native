import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import Footer from './src/components/Footer/Footer';
import theme from './theme';
import StatusBar from './src/components/StatusBar/StatusBar';

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <StatusBar />
        <Footer />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
