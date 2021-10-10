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
    ScrollView
} from "react-native";

export default class CheckOutScreen extends React.Component {
    static navigationOptions = {
        title: 'CheckOut'
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{ height: 180 }}>
                        <TouchableOpacity style={{ backgroundColor: '#006491', height: 40, padding: 10 }}>
                            <Text style={styles.forgot_button}>Address Details</Text>
                        </TouchableOpacity>
                        <View style={styles.container2}>
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <Text style={styles.loginText}>Your Location</Text>
                                <View style={styles.inputView}>
                                    <TextInput
                                        style={styles.TextInput}
                                        placeholder="No12, Kandy Road"
                                        placeholderTextColor="gray"
                                    />
                                </View>
                                <View style={styles.inputView}>
                                    <TextInput
                                        style={styles.TextInput}
                                        placeholder="Yakkala"
                                        placeholderTextColor="gray"
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <Image style={styles.image1} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3597/3597088.png' }} />
                            <Image style={styles.image2} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/216/216658.png' }} />
                        </View>
                    </View>
                    <View style={{ height: 150 }}>
                        <TouchableOpacity style={{ backgroundColor: '#006491', height: 40, padding: 10 }}>
                            <Text style={styles.forgot_button}>Contact Details</Text>
                        </TouchableOpacity>
                        <View style={styles.container2}>
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <View style={styles.inputView}>
                                    <TextInput
                                        style={styles.TextInput}
                                        placeholder="+94 712345678"
                                        placeholderTextColor="gray"
                                    />
                                </View>
                                <View style={styles.inputView}>
                                    <TextInput
                                        style={styles.TextInput}
                                        placeholder="Anne Amanda"
                                        placeholderTextColor="gray"
                                    />
                                </View>
                                <View style={styles.inputView}>
                                    <TextInput
                                        style={styles.TextInput}
                                        placeholder="Anne123@gmail.com"
                                        placeholderTextColor="gray"
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <Image style={styles.image3} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3597/3597088.png' }} />
                            <Image style={styles.image4} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/216/216658.png' }} />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.loginBtn}
                        onPress={() => this.props.navigation.navigate('ConfirmationScreen')}>
                        <Text style={styles.pay}>Continue to CheckOut</Text>
                    </TouchableOpacity>

                    <Image style={styles.image} source={{ uri: 'https://th.bing.com/th/id/R.f65a581e23bedcc409ee2fac9654449e?rik=toJUzk5Cfz5QaA&pid=ImgRaw&r=0' }} />

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
    container2: {
        flex: 0.35,
        flexDirection: 'row',
        padding: 10,
        backgroundColor: "#fff",
        borderColor: "#FDFDFD",
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: 15,
        height: 0,
        width: 320,


    },
    image: {
        marginBottom: 10,
        width: 300,
        height: 200,
        marginLeft: 20,
        marginRight: 5

    },
    image1: {
        width: 30,
        height: 30,
        marginTop: -50,
        marginLeft: 250
    },
    image2: {
        width: 30,
        height: 30,
        marginTop: 10,
        marginLeft: 250
    },
    image3: {
        width: 30,
        height: 30,
        marginTop: -40,
        marginLeft: 250
    },
    image4: {
        width: 40,
        height: 40,
        marginTop: 20,
        marginLeft: 250
    },
    inputView: {
        // backgroundColor: "#E8E8E8",
        // width: "80%",
        height: 40,
        marginBottom: 3,
        alignItems: "center",
        marginTop: 3
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 5,
        // marginLeft: 20,
        backgroundColor: '#ffff',
        // borderBottomWidth: 1,
        // borderColor: '#9B9B9B',
        width: 300
    },
    TextInput1: {
        height: 50,
        flex: 1,
        padding: 10,
        // marginLeft: 20,
        backgroundColor: '#ffff',
        //borderBottomWidth: 1,
        //borderColor: '#9B9B9B',
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
        marginTop: 80,
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