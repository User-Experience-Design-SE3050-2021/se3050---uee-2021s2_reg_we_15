import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class SplashScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('LoginScreen')}
          style={styles.btn}
          activeOpacity={0.5}>
          <Text style={styles.btnTxt}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('PaymentScreen')}
          style={styles.btn}
          activeOpacity={0.5}>
          <Text style={styles.btnTxt}>Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('AddressScreen')}
          style={styles.btn}
          activeOpacity={0.5}>
          <Text style={styles.btnTxt}>Address</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('MenuScreen')}
          style={styles.btn}
          activeOpacity={0.5}>
          <Text style={styles.btnTxt}>Menu</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  backBtn: {
    width: '30%',
    height: '20%',
  },
  backImage: {
    width: '20%',
    height: '20%',
    padding: '10%',
    margin: '10%',
    marginTop: '90%',
    marginLeft: '10%',
  },
  image: {
    width: '35%',
    height: '23%',
    marginLeft: '30%',
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '75%',
  },
  btn: {
    marginTop: '0%',
    marginBottom: '35%',
    marginLeft: '10%',
    marginRight: '10%',
  },
  btnTxt: {
    color: 'white',
    fontSize: 20,
    lineHeight: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    // backgroundColor: "#000000c0",
    backgroundColor: '#4682b4',
    borderRadius: 50,
  },
});
