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

export default class DeliveryScreen extends React.Component {
    static navigationOptions = {
        title: 'Delivery'
    }

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            itemDetails: {}
        };
        this.addDelivery = this.addDelivery.bind(this);
    }

    addDelivery() {
        var url = 'http://192.168.8.105:8080/delivery/createDelivery';
        var data = {
            Address: this.state.data.pizzaImage,
            number: this.state.data.pizzaName,
            city: this.state.data.pizzaPrice,
            streetName: this.state.data.pizzaDescription,
            mobileNo: this.state.selectedSize,
            fName: this.state.selectedSize,
            lName: this.state.selectedSize,
            email: this.state.selectedSize,
        };
        axios.post(url, data)
            .then(response => {
                this.setState({
                    itemDetails: response.data,
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                                 <ScrollView>
                <View style={styles.container}>
                    <TouchableOpacity style={{ backgroundColor: '#006491', height: 40, padding: 10 }}>
                        <Text style={styles.forgot_button}>Address Details</Text>
                    </TouchableOpacity>
                    <Text style={styles.loginText}>Your Location</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Kandy Road, Yakkala"
                            placeholderTextColor="gray"
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
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 1, flexDirection: 'column', width: 10}}>
                                <Text style={styles.loginText}>City</Text>
                                <View style={styles.inputView}>
                                    <TextInput
                                        style={[styles.TextInput, {width: 120}]}
                                        // placeholder="CVC*"
                                        placeholderTextColor="#003f5c"
                                        secureTextEntry={true}
                                    />
                                </View>
                        </View>
                            <View style={{ flex: 1, flexDirection: 'column', width: 10}}>
                                <Text style={styles.loginText}>Street Name</Text>
                                <View style={styles.inputView}>
                                    <TextInput
                                        style={[styles.TextInput, {width: 120}]}
                                        // placeholder="Expire Date"
                                        placeholderTextColor="#003f5c"
                                        secureTextEntry={true}
                                    />
                                </View>
                        </View>
                    </View>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity style={{ backgroundColor: '#006491', height: 40, padding: 10 }}>
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
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1, flexDirection: 'column', width: 10 }}>
                                <Text style={styles.loginText}>First Name</Text>
                                <View style={styles.inputView}>
                                    <TextInput
                                        style={[styles.TextInput, { width: 120 }]}
                                        // placeholder="CVC*"
                                        placeholderTextColor="#003f5c"
                                        secureTextEntry={true}
                                    />
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column', width: 10 }}>
                                <Text style={styles.loginText}>Last Name</Text>
                                <View style={styles.inputView}>
                                    <TextInput
                                        style={[styles.TextInput, { width: 120 }]}
                                        // placeholder="Expire Date"
                                        placeholderTextColor="#003f5c"
                                        secureTextEntry={true}
                                    />
                                </View>
                            </View>
                        </View>
                    <Text style={styles.loginText}>Email ID</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            // placeholder="Expire Date"
                            placeholderTextColor="#003f5c"
                            secureTextEntry={true}
                            />
                        </View>

                        <View style={styles.container2}>
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <Image style={styles.image} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/217/217425.png' }} />

                            </View>
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <Image style={styles.image} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/888/888870.png' }} />

                            </View>
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <Image style={styles.image} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/1019/1019607.png' }} />

                            </View>
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <Image style={styles.image} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/825/825539.png' }} />

                            </View>
                        </View>
                        <TouchableOpacity style={styles.loginBtn}
                            onPress={() => this.props.navigation.navigate('CheckOutScreen')}>
                            <Text style={styles.pay}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
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
    container2:{
        flex : 0.35,
        flexDirection : 'row',
        padding : 10,
        backgroundColor: "#fff",
        borderColor : "#FDFDFD",
        borderWidth : 1,
        borderRadius : 20,
        marginBottom : 15,
        height : 0,
        width : 320,
        marginTop : -110,
    },
    image: {
        width: 50,
        height: 50,
        marginTop:130
    },
    inputView: {
        // backgroundColor: "#E8E8E8",
        // width: "80%",
        height: 40,
        marginBottom: 10,
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
        marginTop: 170,
        backgroundColor: "#E42E4B",
        marginLeft: 55,
        
    },
    pay: {
        color: "#fff"
    },
    loginText: {
        textAlign: 'left',
        marginLeft: 8
    }
});