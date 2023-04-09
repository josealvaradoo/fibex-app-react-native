import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import UserIcon from '../../components/Icons/UserIcon';
import HomeIcon from '../../components/Icons/HomeIcon';
import {Center, useTheme, View} from 'native-base';
import DollarIcon from '../../components/Icons/DollarIcon';
import PaymentScreen from '../../screens/PaymentScreen';

const Tab = createBottomTabNavigator();

const MainTapBarButton = (props: any) => (
  <TouchableOpacity style={styles.mainButton} onPress={props.onPress}>
    <View bg="primary.500" padding={10} borderRadius={100}>
      {props.children}
    </View>
  </TouchableOpacity>
);

const Footer = () => {
  const {colors} = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          height: 80,
          borderRadius: 15,
          paddingBottom: 0,
          backgroundColor: '#ffffff',
          shadowColor: colors.primary[500],
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Center>
                <HomeIcon color={focused ? 'primary.400' : 'gray.500'} />
              </Center>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="chat"
        component={PaymentScreen}
        options={{
          tabBarIcon: () => (
            <Center>
              <DollarIcon color="white" />
            </Center>
          ),
          tabBarButton: props => <MainTapBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Center>
                <UserIcon color={focused ? 'primary.400' : 'gray.500'} />
              </Center>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const shadowStyle = {
  shadowOffset: {
    width: 0,
    height: 10,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.5,
  elevation: 5,
};

const styles = StyleSheet.create({
  shadow: shadowStyle,
  mainButton: {
    top: -15,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadowStyle,
  },
});

export default Footer;
