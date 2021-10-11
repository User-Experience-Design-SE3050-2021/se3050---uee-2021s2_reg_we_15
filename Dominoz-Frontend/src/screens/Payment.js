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
                        secureTextEntry={true}
                    />
                </View>
                <Text style={styles.loginText}>CVC*</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        // placeholder="CVC*"
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                    />
                </View>
                <Text style={styles.loginText}>Expire Date</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        // placeholder="Expire Date"
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                    />
                </View>

                <TouchableOpacity style={styles.loginBtn} onPress={() => this.props.navigation.navigate('ConfirmationScreen')}>
                    <Text style={styles.pay}>Pay Now</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#F1F5FF",
        backgroundColor: "#ffff",
        padding: 10,
        paddingTop: 30
        // alignItems: "center",
        // justifyContent: "center",
    },
    image: {
        marginBottom: 40,
        width: 200,
        height: 200
    },
    inputView: {
        // backgroundColor: "#E8E8E8",
        // width: "80%",
        height: 45,
        marginBottom: 20,
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
    forgot_button: {
        height: 30,
        marginBottom: 30,
        color: "#006491"
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
    pay: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 40,
        textAlign: 'center',
    },
    loginText: {
        textAlign: 'left',
        marginLeft: 8
    }
});