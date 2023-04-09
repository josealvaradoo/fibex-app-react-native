import React, {ReactElement} from 'react';
import {FlatList, Text, View} from 'native-base';
import {SafeAreaView} from 'react-native';
import Header from '../components/Header/Header';
import UploadCloudIcon from '../components/Icons/UploadCloudIcon';
import CreditCardIcon from '../components/Icons/CreditCardIcon';
import ArchiveIcon from '../components/Icons/ArchiveIcon';

type Data = {
  name: string;
  icon: ReactElement;
};

const data: Data[] = [
  {
    name: 'Reportar pago',
    icon: <UploadCloudIcon />,
  },
  {
    name: 'Pagar online',
    icon: <CreditCardIcon />,
  },
  {
    name: 'Historial de pagos',
    icon: <ArchiveIcon />,
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

const PaymentScreen = () => {
  return (
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
};

export default PaymentScreen;
