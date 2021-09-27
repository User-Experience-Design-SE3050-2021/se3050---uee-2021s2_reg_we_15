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


export default class SignupScreen extends React.Component {
    static navigationOptions = {
        title: 'Sign Up'
    }

      
    

    render() {
        return (
          <View style={styles.container}>
            <Image style={styles.image} source={{ uri: 'https://pbs.twimg.com/media/D8KaZCUU8AEDl16.jpg' }}/>

            {/* <StatusBar style="auto" /> */}
            <TouchableOpacity>
              <Text style={styles.mobileNotxt}>Login With Your Valid Mobile Number</Text>
            </TouchableOpacity>
            
            <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="+94                            Mobile No*"
                        placeholderTextColor="#003f5c"
                    />
            </View>


            <TouchableOpacity style={styles.submitBtn}>
              <Text style={styles.submitTxt}>SUBMIT</Text>
            </TouchableOpacity>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: '#CCBEBE'}} />
             <View>
                <Text style={{width: 50, textAlign: 'center' , color:"#CCBEBE"}}>OR</Text>
            </View>
                <View style={{flex: 1, height: 1, backgroundColor: '#CCBEBE'}} />
            </View>

            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginText}>Sign Up with Email</Text>
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
            {/* <Image style={styles.fbimage} source={{ uri: 'https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png' }}/> */}
            <Text style={styles.Fbtxt}> Continue with Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.skipLoginBtn}>
              <Text style={styles.skipLoginTxt}>SKIP LOGIN</Text>
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
    marginTop : -20,
    width: 422,
    height: 200
  },

  fbimage:{
    width: 20,
    height: 20,
    flexDirection: 'row',
  },
  TextInput: {
    height: 20,
    flex: 1,
    // marginLeft: 20,
    backgroundColor: '#ffff',
    borderBottomWidth: 1,
    borderColor: '#9B9B9B',
    width: 220
},

  inputView: {
    // backgroundColor: "#E8E8E8",
    // width: "80%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
},

  forgot_button: {
    height: 30,
    marginTop :12,
    marginBottom: 10,
    color:"#006491"
  },
  mobileNotxt:{
    height: 30,
    marginTop :12,
    marginBottom: 10,
    color:"#000000"
  },

  submitBtn: {
    width: "35%",
    borderRadius: 25,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#049C01",
    marginBottom : 15,
  },
  submitTxt:{
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

  skipLoginBtn: {
    width: "30%",
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DADADA",
    marginTop : 30,
  },
  mobileTxt:{
    color:"#0E0D0D"
    
  },
  Fbtxt:{
    color:"#161CA0",
    flexDirection: 'row',

  },

  loginBtn: {
    width: "60%",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E42E4B",
    marginTop : 10,
    marginBottom : 15
  },
  loginText:{
    color:"#f6f6f6"
    
  },
});