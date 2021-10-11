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
    Dimensions,
} from "react-native";
const { width } = Dimensions.get('window');

export default class MyAddressScreen extends React.Component {
    static navigationOptions = {
        title: 'Addresses'
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <TouchableOpacity style={{ backgroundColor: '#006491', height: 40, padding: 10 }}>
                        <Text style={styles.forgot_button}>My Addresses</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.card, { borderColor: '#00BFFF' }]}>
                        {/* Row */}
                        <View style={styles.cardContent}>
                            {/* column */}
                            <View style={styles.imageContainer}>
                                <Text style={styles.name}>Home</Text>
                                <Text style={styles.det}>139/9,Kurunegala Rd,</Text>
                                <Text style={styles.det}>Kegalle</Text>
                            </View>
                            {/* Column */}
                            <View style={styles.imageContainer}>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={styles.Btn}
                                        onPress={() => this.props.navigation.navigate('AddressScreen')}>
                                        <Image style={styles.image} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3597/3597088.png' }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.Btn}
                                        onPress={() => this.props.navigation.navigate('AddressScreen')}>
                                        <Image style={styles.image} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/216/216658.png' }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: '#CCBEBE' }} />
                        {/* <View>
                <Text style={{width: 50, textAlign: 'center' , color:"#CCBEBE"}}></Text>
            </View> */}
                        <View style={{ flex: 1, height: 1, backgroundColor: '#CCBEBE' }} />
                    </View>

                    <TouchableOpacity style={[styles.card, { borderColor: '#00BFFF' }]}>
                        {/* Row */}
                        <View style={styles.cardContent}>
                            {/* column */}
                            <View style={styles.imageContainer}>
                                <Text style={styles.name}>Work</Text>
                                <Text style={styles.det}>247/A,H Rd,Koswatte</Text>
                                <Text style={styles.det}>Malabe</Text>
                            </View>
                            {/* Column */}
                            <View style={styles.imageContainer}>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={styles.Btn}
                                        onPress={() => this.props.navigation.navigate('AddressScreen')}>
                                        <Image style={styles.image} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3597/3597088.png' }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.Btn}
                                        onPress={() => this.props.navigation.navigate('AddressScreen')}>
                                        <Image style={styles.image} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/216/216658.png' }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: '#CCBEBE' }} />
                        {/* <View>
                <Text style={{width: 50, textAlign: 'center' , color:"#CCBEBE"}}></Text>
            </View> */}
                        <View style={{ flex: 1, height: 1, backgroundColor: '#CCBEBE' }} />
                    </View>

                    {/* <Text style={styles.loginText}>Your Location</Text>
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
                         
                    />
                </View>
                <Text style={styles.loginText}>City</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        // placeholder="CVC*"
                        placeholderTextColor="#003f5c"
                         
                    />
                </View>
                <Text style={styles.loginText}>Street Name</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        // placeholder="Expire Date"
                        placeholderTextColor="#003f5c"
                         
                    />
                </View>

                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.pay}>Save</Text>
                </TouchableOpacity> */}
                    <TouchableOpacity style={styles.loginBtn}
                        onPress={() => this.props.navigation.navigate('AddressScreen')}>
                        <Text style={styles.pay}>Add New Address</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F1F5FF",
        // backgroundColor: "#000",
        padding: 10,
        paddingTop: 30,
        // alignItems: "center",
        // justifyContent: "center",
    },
    image: {
        width: 30,
        height: 30
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
        color: "#fff",
        textAlign: 'center',
        fontSize: 17
    },
    loginBtn: {
        width: 240,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 80,
        backgroundColor: "#E42E4B",
        marginLeft: 45,
    },
    Btn: {
        // width: "60%",
        // borderRadius: 25,
        // height: 50,
        // marginTop: 80,
        backgroundColor: "#fff",
        marginRight: 20,
    },
    pay: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 40,
        textAlign: 'center',
    },
    loginText: {
        textAlign: 'left',
        marginLeft: 8
    },
    cardContainer: {
        height: 40,
        width: width * 0.3,
        marginRight: 8,
        borderRadius: 25,
        borderBottomWidth: 1,
        borderColor: '#E42E4B',
    },
    imageContainer: {
        flexDirection: 'column',
        marginRight: 50,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    card: {
        height: null,
        // paddingTop: 10,
        // paddingBottom: 10,
        padding: 10,
        // marginTop: 5,
        backgroundColor: 'white',
        flexDirection: 'column',
        // marginBottom: 20,
        // borderRadius: 15,
    },
    cardContent: {
        flexDirection: 'row',
        // marginLeft: 10,
    },
    name: {
        // textAlign: 'left',
        fontSize: 18,
        fontWeight: '500',
        margin: 5,
        // alignSelf: 'left'
    },
    det: {
        // textAlign: 'left',
        fontSize: 15,
        fontWeight: '400',
        margin: 5,
        // alignSelf: 'left'
    },
    price: {
        fontSize: 20,
        marginLeft: 10,
        color: '#FF5833',
    },
});