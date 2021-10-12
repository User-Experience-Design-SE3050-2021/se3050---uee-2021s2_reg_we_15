/* eslint-disable prettier/prettier */
import React from 'react';
import axios from 'axios';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    ScrollView
} from "react-native";

export default class PaymentScreen extends React.Component {
    static navigationOptions = {
        title: 'Payment'
    }

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            itemDetails: {}
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                <View style={styles.container1}>
                <TouchableOpacity style={{ backgroundColor: '#006491', height: 40, width: 334, padding: 10, marginLeft: -10, marginTop:-10 }}>
                        <Text style={styles.forgot_button}>Payment gateway</Text>
                    </TouchableOpacity>

                <Text style={styles.loginText}>Card Holder’s Name*</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        // placeholder="Kandy Road, Yakkala"
                        placeholderTextColor="#003f5c"
                    />
                </View>
                <Text style={styles.loginText}>Card Number*</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        // placeholder="Card Number*"
                        placeholderTextColor="#003f5c"
                         
                    />
                </View>
                <Text style={styles.loginText}>CVC*</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        // placeholder="CVC*"
                        placeholderTextColor="#003f5c"
                         
                    />
                </View>
                <Text style={styles.loginText}>Expire Date</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        // placeholder="Expire Date"
                        placeholderTextColor="#003f5c"
                         
                    />
                </View>
                </View>
                    <Text style={styles.title}>Terms and Conditions are considered</Text>
                <TouchableOpacity style={styles.loginBtn} onPress={() => this.props.navigation.navigate('ConfirmationScreen')}>
                    <Text style={styles.pay}>Pay Now</Text>
                </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#F1F5FF",
        backgroundColor : '#F1F5FF',
        padding: 10,
        paddingTop: 30
        // alignItems: "center",
        // justifyContent: "center",
    },
    container1: {
        backgroundColor: "#ffff",
        padding: 10,
        borderColor : "#000",
        borderWidth : 3,
        elevation: 10,
    },
    image: {
        marginBottom: 40,
        width: 200,
        height: 200
    },
    title: {
        fontSize: 14,
        textAlign: 'center',
        color: 'gray',
        marginTop: 30
    },
    inputView: {
        // backgroundColor: "#E8E8E8",
        width: "80%",
        height: 35,
        marginBottom: 20,
        marginLeft: 20,
        alignItems: "center",
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        // marginLeft: 20,
        backgroundColor: '#ffff',
        borderBottomWidth: 1,
        borderColor: '#9B9B9B',
        width: 300
    },
    // forgot_button: {
    //     height: 30,
    //     marginBottom: 30,
    //     color: "#006491"
    // },
    loginBtn: {
        width: 240,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#E42E4B",
        marginLeft: 45
    },
    pay: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 40,
        textAlign: 'center',
    },
    loginText: {
        marginTop: 20,
        textAlign: 'left',
        marginLeft: 8
    },
    container2: {
        backgroundColor: "#006491",
        borderColor : "#FDFDFD",
        borderWidth : 1,
        borderRadius : 40,
        width : 400,
        maxHeight: 290,
        marginTop : 100,
      },
      forgot_button: {
        height: 30,
        marginBottom: 30,
        fontSize: 16,
        color: "#fff"
    },
});