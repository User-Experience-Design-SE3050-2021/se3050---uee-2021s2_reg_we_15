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

export default class CheckOutScreen extends React.Component {
    static navigationOptions = {
        title: 'CheckOut'
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{height: 150}}>
                <TouchableOpacity style={{ backgroundColor: '#006491', height: 40, padding: 10}}>
                    <Text style={styles.forgot_button}>Address</Text>
                </TouchableOpacity>
                <Text style={styles.loginText}>Your Location</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Kandy Road, Yakkala"
                        placeholderTextColor="#003f5c"
                    />
                </View>
                </View>
                <View style={{height: 150}}>
                <TouchableOpacity style={{ backgroundColor: '#006491', height: 40, padding: 10}}>
                    <Text style={styles.forgot_button}>Contact Details</Text>
                </TouchableOpacity>
                <Text style={styles.loginText}>Mobile Number</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="+94                            Mobile No*"
                        placeholderTextColor="#003f5c"
                    />
            </View>
            <Text style={styles.loginText}>First Name</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        // placeholder="Expire Date"
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                    />
                </View>
                <Text style={styles.loginText}>Last Name</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        // placeholder="Expire Date"
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                    />
                </View>
                </View>
                <TouchableOpacity style={styles.loginBtn}
                 onPress={() => this.props.navigation.navigate('ConfirmationScreen')}>
                    <Text style={styles.pay}>Continue to CheckOut</Text>
                </TouchableOpacity>

                <Image style={styles.image} source={{ uri: 'https://th.bing.com/th/id/R.f65a581e23bedcc409ee2fac9654449e?rik=toJUzk5Cfz5QaA&pid=ImgRaw&r=0' }}/>
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
        paddingTop: 10
        // alignItems: "center",
        // justifyContent: "center",
    },
    image: {
        marginBottom: 50,
        width: 300,
        height: 200,
        marginLeft:25
    },
    inputView: {
        // backgroundColor: "#E8E8E8",
        // width: "80%",
        height:5,
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
        width: "60%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#049C01",
        marginLeft:55
    },
    pay: {
        color: "#fff"
    },
    loginText: {
        textAlign: 'left',
        marginLeft: 8
    }
});