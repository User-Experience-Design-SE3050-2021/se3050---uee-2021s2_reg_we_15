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

export default class PaymentScreen extends React.Component {
    static navigationOptions = {
        title: 'Payment'
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.loginText}>Card Holder’s Name*</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        // placeholder="Card Holder’s Name*"
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

                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.pay}>Pay Now</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10,
        paddingLeft: 30,
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
        backgroundColor: "#E8E8E8",
        width: "80%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        color: "#000000"
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
        color: "#006491"
    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#E42E4B",
    },
    pay: {
        color: "#fff"
    },
    loginText:{
        textAlign: 'left'
    }
});