import React from 'react';
import {Platform} from 'react-native';
import {StatusBar as NativeStatusBar} from 'react-native';
import {View, StatusBar as NativeBaseStatusBar} from 'native-base';

const StatusBar = () => {
  const STATUS_BAR_HEIGHT =
    Platform.OS === 'ios' ? 12 : NativeStatusBar.currentHeight;
  return (
    <View height={STATUS_BAR_HEIGHT} bg="primary.600" color="white">
      <NativeBaseStatusBar
        translucent
        barStyle="light-content"
        backgroundColor="primary.600"
      />
    </View>
  );
};

export default StatusBar;
