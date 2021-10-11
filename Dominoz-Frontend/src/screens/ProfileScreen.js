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



export default class Profilescreen extends Component {
  static navigationOptions = {
    title: 'Profile'
}
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
        <View style={styles.container4}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('MenuScreen')}>
            <Text style={[styles.Name, {color: '#fff', fontSize: 15, fontWeight: 'normal', marginLeft: 400, marginTop: -30, marginBottom: 60}]}>Edit</Text>
            </TouchableOpacity>
        <View style={styles.containerx}>
          <View style = {{flex : 1, flexDirection : 'column'}}>
          <Image style={styles.image}  source={require('../../images/profile.png')}></Image>
          </View>
          </View>
          
          </View>
        </View>
        <View style={styles.container5}>
          <View style = {{flex : 1, flexDirection : 'column'}}>
          <Text style={styles.Name}> Jhone Doe</Text>
          <Text style={styles.phone}> +94 071 198 3520</Text>
          <Text style={styles.email}> jhoneDoe@gmail.com</Text>
          </View>
          </View>
          <View style={styles.container6}>
          <TouchableOpacity style={styles.container3} onPress={() => this.props.navigation.navigate('MyAddressScreen')}>
          <Text style={styles.Fbtxt}> My Address</Text>
           <Image style={styles.icon} source={require('../../images/back.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.container3} onPress={() => this.props.navigation.navigate('UpdateProfile')}>
          <Text style={styles.Fbtxt}> Privacy & Safety</Text>
            <Image style={styles.icon} source={require('../../images/back.png')} />
          </TouchableOpacity>
        <TouchableOpacity style={styles.container3}>
          <Text style={styles.Fbtxt}>Support</Text>
            <Image style={styles.icon} source={require('../../images/back.png')} />
          </TouchableOpacity>
        <TouchableOpacity style={styles.container3}>
          <Text style={styles.Fbtxt}> Contact Us</Text>
            <Image style={styles.icon} source={require('../../images/back.png')} />
          </TouchableOpacity>
        
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
    flexDirection: 'row',
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
    marginTop : -50,
   
    
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
  container6: {
    padding : 10,
    marginTop : -50,
    
  },
  Fbtxt:{
    flexDirection: 'row',
    marginRight : 100,
    width : 150,

  },
  Fbtxt1:{
    color: "#fff",

  },
  Name:{
    marginLeft : -10,
    width : 150,
    fontSize: 24,
    fontWeight: "bold",
    color: "#0E0D0D",


  },
  phone:{
    marginRight : 160,
    marginTop : 10,
    width : 150,
    fontSize: 18,
    color: "#0E0D0D",
    marginLeft: -20


  },
  email:{
    marginTop : 10,
    color: "#0E0D0D",
    marginLeft: -15,
    fontSize: 14,

  },
  icon: {
    // marginBottom: 40,
    width: 15,
    height: 15
  },

  image: {
    marginRight : 0,
    width: 100,
    height: 100,
    marginTop : 0
  },
})