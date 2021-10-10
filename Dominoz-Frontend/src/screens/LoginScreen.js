/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default class SplashScreen extends React.Component {
    static navigationOptions = {
        title: 'Log In'
    }

    render() {
        return (
          <View style={styles.container}>
            <Image style={styles.image} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp2yTAc1YP2wYzjJ7PecdHCWhEyeJkkfKpVw&usqp=CAU' }}/>

            {/* <StatusBar style="auto" /> */}
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Email Address"
                placeholderTextColor="#003f5c"
                // onChangeText={(email) => setEmail(email)}
              />
            </View>

            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Password"
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                // onChangeText={(password) => setPassword(password)}
              />
            </View>

            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: '#CCBEBE'}} />
             <View>
                <Text style={{width: 50, textAlign: 'center' , color:"#CCBEBE"}}>OR</Text>
            </View>
                <View style={{flex: 1, height: 1, backgroundColor: '#CCBEBE'}} />
            </View>

            <TouchableOpacity style={styles.mobileBtn}>
              <Text style={styles.mobileTxt}>Continue with your mobile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.mobileBtn}>
              <Text style={styles.Fbtxt}>Continue with Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              {/* <Text style={styles.forgot_button}>We will never post anything without your permission</Text> */}
            </TouchableOpacity>
            {/* <Text style={styles.forgot_button}>We will never post anything without your permission</Text> */}
          </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 200,
    height: 160,
    marginTop : -30,
    marginBottom : 30
  },

  inputView: {
    backgroundColor: "#E8E8E8",
    borderRadius: 15,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 15,
    color:"#000000"
  },

  forgot_button: {
    height: 30,
    marginTop :12,
    marginBottom: 10,
    color:"#006491"
  },

  loginBtn: {
    width: "70%",
    borderRadius: 25,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E42E4B",
  },
  loginText:{
    color:"#f6f6f6"
    
  },

  mobileBtn: {
    width: "70%",
    borderRadius: 25,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DADADA",
    marginTop : 20,
  },
  mobileTxt:{
    color:"#0E0D0D"
    
  },
  Fbtxt:{
    color:"#161CA0"
  }
});