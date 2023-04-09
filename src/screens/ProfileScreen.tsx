import React, {ReactElement} from 'react';
import {FlatList, Text, View} from 'native-base';
import {SafeAreaView} from 'react-native';
import Header from '../components/Header/Header';
import UserIcon from '../components/Icons/UserIcon';
import MapIcon from '../components/Icons/MapIcon';
import ShieldIcon from '../components/Icons/ShieldIcon';
import LogOutIcon from '../components/Icons/LogOutIcon';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

type Data = {
  name: string;
  icon: ReactElement;
};

const data: Data[] = [
  {
    name: 'Datos personales',
    icon: <UserIcon />,
  },
  {
    name: 'Dirección',
    icon: <MapIcon />,
  },
  {
    name: 'Seguridad',
    icon: <ShieldIcon />,
  },
  {
    name: 'Cerrar sesión',
    icon: <LogOutIcon />,
  },
];

const renderItems = (item: Data, index: number) => (
  <View
    key={index}
    display="flex"
    justifyContent="flex-start"
    alignItems="center"
    flexDirection="row"
    paddingY={5}
    paddingX={2}
    marginBottom={2}
    borderBottomWidth={1}
    borderBottomColor="gray.200">
    {item.icon}
    <Text marginLeft={4}>{item.name}</Text>
  </View>
);

// const Stack = createNativeStackNavigator()

const ProfileScreen = () => (
  <SafeAreaView>
    <Header />
    <View margin={4}>
      <FlatList
        data={data}
        numColumns={1}
        renderItem={({item, index}) => renderItems(item, index)}
      />
    </View>
  </SafeAreaView>
);

export default ProfileScreen;
