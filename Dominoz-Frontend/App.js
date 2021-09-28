import React from 'react';
import {View, Text, Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainScreen from './src/screens/MainScreen';
import LoginScreen from './src/screens/LoginScreen';
import PaymentScreen from './src/screens/Payment';
import AddressScreen from './src/screens/AddressScreen';
import MenuScreen from './src/screens/MenuScreen';
import CartScreen from './src/screens/CartScreen';
import DeliveryScreen from './src/screens/DeliveryScreen';
import MyAddressScreen from './src/screens/MyAddressScreen';
import OffersScreen from './src/screens/OffersScreen';

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
    AddressScreen: {screen: AddressScreen},
    MenuScreen: {screen: MenuScreen},
    CartScreen: {screen: CartScreen},
    DeliveryScreen: {screen: DeliveryScreen},
    MyAddressScreen:{screen: MyAddressScreen},
    OffersScreen:{screen:OffersScreen}
    },
  {
    defaultNavigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#006491',
      },
      headerRight: (
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Button
            onPress={() => alert('This is a button!')}
            title="Cart"
            color="#0000"
          />
          <Button
            onPress={() => alert('This is a button!')}
            title="Profile"
            color="#0000"
          />
        </View>
      ),
    },
    // navigationOptions: {
    //   tabBarLabel: 'Home!!!!',
    // },
  },
);

export default createAppContainer(AppNavigator);
