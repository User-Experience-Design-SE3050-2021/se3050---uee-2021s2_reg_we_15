import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainScreen from './src/screens/MainScreen';
import LoginScreen from './src/screens/LoginScreen';
import PaymentScreen from './src/screens/Payment';
import AddressScreen from './src/screens/AddressScreen';
import MenuScreen from './src/screens/MenuScreen';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    MainScreen: {screen: MainScreen},
    LoginScreen: {screen: LoginScreen},
    PaymentScreen: {screen: PaymentScreen},
    AddressScreen: { screen: AddressScreen },
    MenuScreen: { screen: MenuScreen },
  },
  {
    defaultNavigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#006491',
      },
    },
    // navigationOptions: {
    //   tabBarLabel: 'Home!!!!',
    // },
  },
);

export default createAppContainer(AppNavigator);
