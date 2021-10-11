import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SplashScreen from './src/screens/SplashScreen';
import MainScreen from './src/screens/MainScreen';
import LoginScreen from './src/screens/LoginScreen';
import PaymentScreen from './src/screens/Payment';
import AddressScreen from './src/screens/AddressScreen';
import MenuScreen from './src/screens/Pizza/MenuScreen';
import PizzaDetailScreen from './src/screens/Pizza/PizzaDetails';
import CartScreen from './src/screens/Pizza/CartScreen';
import DeliveryScreen from './src/screens/DeliveryScreen';
import MyAddressScreen from './src/screens/MyAddressScreen';
import OffersScreen from './src/screens/OffersScreen';
import CheckOutScreen from './src/screens/CheckOutScreen';
import ConfirmationScreen from './src/screens/ConfirmationScreen';
import SignupScreen from './src/screens/SignupScreen';
import ProfileScreen from './src/screens/ProfileScreen';

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
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor : '#F1F5FF'}}>
      <Text>Home Screen</Text>
    </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    SplashScreen: { screen: SplashScreen },
    MainScreen: {screen: MainScreen},
    // Maheshi
    LoginScreen: {screen: LoginScreen},
    SignupScreen: {screen: SignupScreen},
    ProfileScreen: { screen: ProfileScreen },
    // Perusha
    DeliveryScreen: {screen: DeliveryScreen},
    PaymentScreen: {screen: PaymentScreen},
    CheckOutScreen: {screen: CheckOutScreen},
    ConfirmationScreen: {screen: ConfirmationScreen},
    // Achini
    AddressScreen: {screen: AddressScreen},
    OffersScreen: {screen: OffersScreen},
    MyAddressScreen: {screen: MyAddressScreen},
    // Dulya
    MenuScreen: {screen: MenuScreen},
    PizzaDetailScreen: {screen: PizzaDetailScreen},
    CartScreen: {screen: CartScreen},
  },
  {
    defaultNavigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#006491',
      },
      headerRight: (
        <Image
          style={{width: 30, height: 30, margin: 20}}
          source={require('./images/cart.png')}
        />
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
