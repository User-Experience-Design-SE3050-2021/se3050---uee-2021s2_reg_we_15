import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Icon
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';



export default class UpdateProfile extends Component {
  static navigationOptions = {
    title: 'Profile'
}
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          
        <View style={styles.container4}>
        <View style={styles.containerx}>
          <View style = {{flex : 1, flexDirection : 'column'}}>
          <Image style={styles.image}  source={require('../../images/profile.png')}></Image>
          </View>
          </View>
          
          </View>
        </View>
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
        <TouchableOpacity style={styles.mobileBtn}>
              <Text style={styles.Fbtxt1}>Log Out</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor : '#F1F5FF',
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flexDirection : 'row',
    backgroundColor: "#006491",
    borderColor : "#FDFDFD",
    borderWidth : 1,
    borderRadius : 40,
    width : 400,
    maxHeight: 190,
    marginTop : -100,
  },
  mobileBtn: {
    width: "70%",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E42E4B",
    marginTop : 20,
  },
  container3: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius : 10,
    width : 320,
    height : 50,
    marginTop : 10,
    
  },
  container4: {
    padding : 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius : 100,
    width : 140,
    height : 140,
    marginTop : 110,
    marginLeft: 140
    
  },
  containerx: {
    padding : 10,
    backgroundColor: "#7ABDDB",
    alignItems: "center",
    justifyContent: "center",
    borderRadius : 100,
    width : 120,
    height : 120,
    marginTop : 0,
   
    
  },
  containery: {
    padding : 10,
    backgroundColor: "#fff",
    borderRadius : 100,
    width : 40,
    height : 40,
    marginLeft: 0
    
  },
  container5: {
    padding : 10,
    width : 150,
    height : 180,
    marginTop : 50,
    marginLeft: 40
    
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


  image: {
    marginRight : 0,
    width: 100,
    height: 100,
    marginTop : 0
  },
})