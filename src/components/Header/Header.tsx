import React from 'react';
import {
  HamburgerIcon,
  HStack,
  Image,
  Pressable,
  View,
  Text,
  Avatar,
  Badge,
  Center,
} from 'native-base';
import {StyleSheet} from 'react-native';
import BellIcon from '../../components/Icons/BellIcon';

const Header = () => {
  return (
    <View
      width={600}
      height={200}
      position="relative"
      left={-100}
      bg="primary.500"
      paddingLeft={115}
      paddingRight={130}
      paddingY={2}
      display="flex"
      flexDir="row"
      style={styles.container}>
      <View width="100%" position="relative">
        <View
          width={200}
          height={200}
          borderRadius={500}
          position="absolute"
          left={-90}
          top={-100}
          background="primary.700"
          opacity={0.1}
        />
        <HStack width="100%" justifyContent="space-between" alignItems="center">
          <Pressable>
            <HamburgerIcon color="white" size={6} />
          </Pressable>
          <View>
            <Image
              source={{
                uri: 'https://www.fibextelecom.net/assets/images/Fibex/Fibex.png',
              }}
              alt="Logo Fibex"
              size="xs"
              width={100}
            />
          </View>
          <Pressable>
            <View position="relative">
              <Badge
                bg="danger.500"
                borderRadius={30}
                position="absolute"
                bottom={3}
                left={2}
                width={5}
                height={5}
                padding={0}
                zIndex={10}>
                <Center>
                  <Text color="white" fontSize="xs">
                    5
                  </Text>
                </Center>
              </Badge>
              <BellIcon color="white" />
            </View>
          </Pressable>
        </HStack>
        <HStack space={10} justifyContent="space-between" my={5}>
          <View>
            <Text color="white" fontSize="2xl">
              Jose Alvarado
            </Text>
            <Text color="white" my={-2} opacity={0.5}>
              CI: 24.348.030
            </Text>
          </View>
          <Avatar
            source={{
              uri: 'https://instagram.fccs9-1.fna.fbcdn.net/v/t51.2885-19/120129427_686281135311132_4210782460105742139_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fccs9-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=EbhkCim7LX0AX8EVmP7&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfA9Gx5wv8ulYC-Tgz0bua0Jbvv-GAX9oCi1gZ6lfTR6Kw&oe=63915A3B&_nc_sid=8fd12b',
            }}
            bg="white"
            padding={0.5}
          />
        </HStack>
        <View
          width={200}
          height={200}
          borderRadius={500}
          position="absolute"
          right={-100}
          bottom={-70}
          background="primary.700"
          opacity={0.1}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomEndRadius: 1000,
    borderBottomStartRadius: 1000,
    overflow: 'hidden',
  },
});

export default Header;
