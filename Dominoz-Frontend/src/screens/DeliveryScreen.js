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
            itemDetails: {},
            Address: '',
            number: '',
            city: '',
            streetName: '',
            mobileNo: '',
            fName: '',
            lName: '',
            email: '',
        };
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeStreetName = this.onChangeStreetName.bind(this);
        this.onChangeMobileNo = this.onChangeMobileNo.bind(this);
        this.onChangeFName = this.onChangeFName.bind(this);
        this.onChangeLName = this.onChangeLName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.addDelivery = this.addDelivery.bind(this);
    }

onChangeAddress = (e) => {
    this.setState({ Address: e });
}

onChangeNumber = (e) => {
    this.setState({ number: e });
}

onChangeCity = (e) => {
    this.setState({ city: e });
}

onChangeStreetName = (e) => {
    this.setState({ streetName: e });
}

    onChangeMobileNo = (e) => {
        this.setState({ mobileNo: e });
    }

    onChangeFName = (e) => {
        this.setState({ fName: e });
    }

    onChangeLName = (e) => {
        this.setState({ lName: e });
    }

    onChangeEmail = (e) => {
        this.setState({ email: e });
    }

    addDelivery() {
        this.props.navigation.navigate('CheckOutScreen');
        // var url = 'http://192.168.1.102:8080/delivery/createDelivery';
        // var data = {
        //     Address: this.state.Address,
        //     number: this.state.number,
        //     city: this.state.city,
        //     streetName: this.state.streetName,
        //     mobileNo: this.state.mobileNo,
        //     fName: this.state.fName,
        //     lName: this.state.lName,
        //     email: this.state.email,
        // };
        // axios.post(url, data)
        //     .then(response => {
        //         this.setState({
        //             itemDetails: response.data,
        //         });
        //         this.props.navigation.navigate('CheckOutScreen');
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
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
                                value={this.state.Address}
                                onChangeText={this.onChangeAddress}
                            placeholder="Kandy Road, Yakkala"
                            placeholderTextColor="gray"
                        />
                    </View>
                    <Text style={styles.loginText}>House No / Flat No / Floor</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                                value={this.state.number}
                                onChangeText={this.onChangeNumber}
                            // placeholder="Card Number*"
                            placeholderTextColor="#003f5c"
                             
                        />
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 1, flexDirection: 'column', width: 10}}>
                                <Text style={styles.loginText}>City</Text>
                                <View style={styles.inputView}>
                                    <TextInput
                                        style={[styles.TextInput, {width: 120}]}
                                        value={this.state.city}
                                        onChangeText={this.onChangeCity}
                                        // placeholder="CVC*"
                                        placeholderTextColor="#003f5c"
                                         
                                    />
                                </View>
                        </View>
                            <View style={{ flex: 1, flexDirection: 'column', width: 10}}>
                                <Text style={styles.loginText}>Street Name</Text>
                                <View style={styles.inputView}>
                                    <TextInput
                                        style={[styles.TextInput, {width: 120}]}
                                        value={this.state.streetName}
                                        onChangeText={this.onChangeStreetName}
                                        // placeholder="Expire Date"
                                        placeholderTextColor="#003f5c"
                                         
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
                                value={this.state.mobileNo}
                                onChangeText={this.onChangeMobileNo}
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
                                        value={this.state.fName}
                                        onChangeText={this.onChangeFName}
                                        // placeholder="CVC*"
                                        placeholderTextColor="#003f5c"
                                         
                                    />
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column', width: 10 }}>
                                <Text style={styles.loginText}>Last Name</Text>
                                <View style={styles.inputView}>
                                    <TextInput
                                        style={[styles.TextInput, { width: 120 }]}
                                        value={this.state.lName}
                                        onChangeText={this.onChangeLName}
                                        // placeholder="Expire Date"
                                        placeholderTextColor="#003f5c"
                                         
                                    />
                                </View>
                            </View>
                        </View>
                    <Text style={styles.loginText}>Email ID</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                                value={this.state.email}
                                onChangeText={this.onChangeEmail}
                            // placeholder="Expire Date"
                            placeholderTextColor="#003f5c"
                             
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
                            onPress={this.addDelivery}>
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
        width: 250,
        borderRadius: 100,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 170,
        backgroundColor: "#E42E4B",
        marginLeft: 55,
        
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