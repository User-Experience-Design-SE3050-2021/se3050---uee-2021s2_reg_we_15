import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from './src/screens/MainScreen';
import LoginScreen from './src/screens/LoginScreen';
import PaymentScreen from './src/screens/Payment';
import AddressScreen from './src/screens/AddressScreen';
import MenuScreen from './src/screens/Pizza/MenuScreen';
import PizzaDetailScreen from './src/screens/Pizza/PizzaDetails';
import CartScreen from './src/screens/Pizza/CartScreen';
import DeliveryScreen from './src/screens/DeliveryScreen';
import CheckOutScreen from './src/screens/CheckOutScreen';
import ConfirmationScreen from './src/screens/ConfirmationScreen';
import SignupScreen from './src/screens/SignupScreen';

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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    MainScreen: { screen: MainScreen },
    // Maheshi
    LoginScreen: { screen: LoginScreen },
    SignupScreen: { screen: SignupScreen },
    // Perusha
    DeliveryScreen: { screen: DeliveryScreen },
    PaymentScreen: { screen: PaymentScreen },
    CheckOutScreen: { screen: CheckOutScreen },
    ConfirmationScreen: { screen: ConfirmationScreen },
    // Achini
    AddressScreen: { screen: AddressScreen },
    // Dulya
    MenuScreen: { screen: MenuScreen },
    PizzaDetailScreen: { screen: PizzaDetailScreen },
    CartScreen: { screen: CartScreen },
  },
  {
    defaultNavigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#006491',
      },
      headerRight: (
        <Image
          style={{ width: 30, height: 30, margin: 20 }}
          source={require("./images/cart.png")} />

      ),
    },
    // navigationOptions: {
    //   tabBarLabel: 'Home!!!!',
    // },
  },
);

const styles = StyleSheet.create({
  imageForButtonInfo: {
    width: 28,
    height: 28,
  },
});

export default createAppContainer(AppNavigator);
