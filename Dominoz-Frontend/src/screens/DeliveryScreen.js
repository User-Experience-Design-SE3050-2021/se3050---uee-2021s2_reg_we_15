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

export default class DeliveryScreen extends React.Component {
    static navigationOptions = {
        title: 'Delivery'
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{ backgroundColor: '#006491', height: 40, padding: 10}}>
                    <Text style={styles.forgot_button}>Edit Address</Text>
                </TouchableOpacity>
                <Text style={styles.loginText}>Your Location</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Kandy Road, Yakkala"
                        placeholderTextColor="#003f5c"
                    />
                </View>
                <Text style={styles.loginText}>House No / Flat No / Floor</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        // placeholder="Card Number*"
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                    />
                </View>
                <Text style={styles.loginText}>City</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        // placeholder="CVC*"
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                    />
                </View>
                <Text style={styles.loginText}>Street Name</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        // placeholder="Expire Date"
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                    />
                </View>

                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.pay}>Save</Text>
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
        color: "#fff"
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#049C01",
    },
    pay: {
        color: "#fff"
    },
    loginText: {
        textAlign: 'left',
        marginLeft: 8
    }
});