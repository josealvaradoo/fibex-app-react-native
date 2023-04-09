import React, {FC, useState} from 'react';
import {
  Actionsheet,
  Box,
  Center,
  FlatList,
  Image,
  Text,
  useDisclose,
  View,
} from 'native-base';
import {SafeAreaView} from 'react-native';
import Header from '../components/Header/Header';
import Card from '../components/Card/Card';
import ShieldIcon from '../components/Icons/ShieldIcon';

type Data = {
  name: string;
};

const data: Data[] = [
  {
    name: 'Soporte',
  },
  {
    name: 'Fibex Play',
  },
  {
    name: 'Promociones',
  },
  {
    name: 'Servicios',
  },
  {
    name: 'Planes',
  },
  {
    name: 'Mi Equipo',
  },
  {
    name: 'Abonado',
  },
  {
    name: 'Referidos',
  },
  {
    name: 'Guías',
  },
];

type ItemProps = {
  name: string;
};

const Item: FC<ItemProps> = (item, i) => (
  <View
    key={i}
    flex={1}
    padding={2}
    margin={2}
    height={100}
    justifyContent="center"
    alignContent="center"
    bg="blueGray.200"
    borderRadius={10}>
    <Center>
      <ShieldIcon color="primary.400" size="lg" />
      <Text color="primary.400">{item.name}</Text>
    </Center>
  </View>
);

const FibexPlayAd = () => (
  <View width="100%" mb={2}>
    <Image
      source={{
        uri: 'https://sandyaveledo.com/wp-content/uploads/2022/09/Nota-de-Prensa-FIBEX-PLAY.png',
      }}
      alt="Fibex Play"
      size="md"
      width="100%"
      borderRadius={10}
    />
  </View>
);

const HomeScreen = () => {
  const [contract, setContact] = useState<string>('H2302');
  const {isOpen, onOpen, onClose} = useDisclose(false);

  const selectContract = (contractName: string) => {
    setContact(contractName);
    onClose();
  };

  return (
    <SafeAreaView>
      <Header />
      <Card contract={contract} onOpen={onOpen} />
      <View mx={4} position="relative" top={-60}>
        <FlatList
          paddingTop={4}
          data={data}
          numColumns={3}
          renderItem={({item, index}) => Item(item, index)}
          ListHeaderComponent={<FibexPlayAd />}
        />
      </View>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Box>
            <Text color="black" fontSize="lg">
              Contrato
            </Text>
          </Box>
          <Actionsheet.Item onPress={() => selectContract('H2302')}>
            H2302
          </Actionsheet.Item>
          <Actionsheet.Item onPress={() => selectContract('P3401')}>
            P3401
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </SafeAreaView>
  );
};

export default HomeScreen;
