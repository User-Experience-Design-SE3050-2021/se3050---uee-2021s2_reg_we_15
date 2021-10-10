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

export default class AddressScreen extends React.Component {
    static navigationOptions = {
        title: 'Address Details'
    }

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            Address: '',
            number: '',
            city: '',
            streetName: '',
            itemDetails: {}
        };
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.addAddress = this.addAddress.bind(this);
    }

    onChangeAddress = (e) => {
        this.setState({ Address: e });
    }


    addAddress() {
        var url = 'http://192.168.8.105:8080/address/createAddress';
        var data = {
            Address: this.state.data.pizzaImage,
            number: this.state.data.pizzaName,
            city: this.state.data.pizzaPrice,
            streetName: this.state.data.pizzaDescription,
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
                    <TouchableOpacity style={{ backgroundColor: '#006491', height: 40, padding: 10, marginBottom:10 }}>
                        <Text style={styles.forgot_button}>Add Your Address</Text>
                        </TouchableOpacity>
                <Text style={styles.loginText}>Your Location</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Kandy Road, Yakkala"
                        value={this.state.Address}
                        placeholderTextColor="#003f5c"
                        onChangeText={this.onChangeAddress}
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
               <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 1, flexDirection: 'column', width: 10,marginTop:10}}>
                                <Text style={styles.loginText}>City</Text>
                                <View style={styles.inputView}>
                                    <TextInput
                                        style={[styles.TextInput, {width: 165}]}
                                        // placeholder="CVC*"
                                        placeholderTextColor="#003f5c"
                                        secureTextEntry={true}
                                    />
                                </View>
                        </View>
                            <View style={{ flex: 1, flexDirection: 'column', width: 10,marginTop:10}}>
                                <Text style={styles.loginText}>Street Name</Text>
                                <View style={styles.inputView}>
                                    <TextInput
                                        style={[styles.TextInput, {width: 175}]}
                                        // placeholder="Expire Date"
                                        placeholderTextColor="#003f5c"
                                        secureTextEntry={true}
                                    />
                                </View>
                        </View>
                    </View>
                    </View>
                    </View>
                <TouchableOpacity style={styles.loginBtn}
                onPress={() => this.props.navigation.navigate('MyAddressScreen')}>
                    <Text style={styles.pay}>Save</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.loginBtn}
                onPress={() => this.props.navigation.navigate('OffersScreen')}>
                    <Text style={styles.pay}>Offers</Text>
                </TouchableOpacity> */}
            
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
        paddingTop: 20
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
        height: 75,
        marginBottom: 20,
       // alignItems: "center",
        marginLeft: 8
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        // marginLeft: 20,
        backgroundColor: '#ffff',
        borderBottomWidth: 1,
        borderColor: '#9B9B9B',
        width: 370,
    },
    forgot_button: {
        height: 30,
        marginBottom: 30,
        color: "#fff",
        textAlign: 'center',
    },
    loginBtn: {
        width: "60%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 80,
        backgroundColor: "#E42E4B",
        marginLeft:80,
    },
    pay: {
        color: "#fff"
    },
    loginText: {
        textAlign: 'left',
        marginLeft: 8,
    }
});