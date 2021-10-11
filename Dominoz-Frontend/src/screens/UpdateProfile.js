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
          <Text style={styles.Name}> update Image</Text>
          </View>
          </View>
          
          </View>
        </View>
        <Text style={styles.name1}> Full Name</Text>
        <View style={styles.inputView}>
          
              <TextInput
                style={styles.TextInput}
                placeholder=""
                placeholderTextColor="#003f5c"
                // onChangeText={(email) => setEmail(email)}
              />
            </View>
            <Text style={styles.name1}> Email</Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholderTextColor="#003f5c"
                // onChangeText={(password) => setPassword(password)}
              />
            </View>
            <Text style={styles.name1}> Phone Number</Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholderTextColor="#003f5c"
                // onChangeText={(password) => setPassword(password)}
              />
            </View>

            <TouchableOpacity style={styles.mobileBtn}>
              <Text style={styles.Fbtxt1}>Update</Text>
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
  container1: {
    marginTop: 200
  },
  container2: {
    flexDirection : 'row',
    backgroundColor: "#006491",
    borderColor : "#FDFDFD",
    borderWidth : 1,
    borderRadius : 40,
    width : 400,
    maxHeight: 190,
    marginTop : -150,
    marginBottom: 130

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
    width: "80%",
    height: 45,
    marginBottom: 20,

  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 15,
    color:"#000000"
  },


  image: {
    marginLeft : 35,
    width: 100,
    height: 100,
    marginTop : 0
  },
  Name:{
    width : 150,
    fontSize: 18,
    color: "#0E0D0D",
    marginTop: 15,
    marginLeft: 20


  },
  name1:{
    width : 150,
    fontSize: 16,
    color: "#0E0D0D",
    marginRight: 140,
    marginBottom: 5

  },
  Fbtxt1:{
    color: "#fff",

  },
  loginBtn: {
    width: 240,
    borderRadius: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 120,
    backgroundColor: "#E42E4B",
    marginLeft: 35
},
})