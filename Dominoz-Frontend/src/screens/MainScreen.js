/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class MainScreen extends React.Component {
    static navigationOptions = {
        title: 'Main',
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('LoginScreen')}
                            style={styles.btn}
                            activeOpacity={0.5}>
                            <Text style={styles.btnTxt}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.column}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('PaymentScreen')}
                            style={styles.btn}
                            activeOpacity={0.5}>
                            <Text style={styles.btnTxt}>Payment</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('AddressScreen')}
                            style={styles.btn}
                            activeOpacity={0.5}>
                            <Text style={styles.btnTxt}>Address</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.column}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('MenuScreen')}
                            style={styles.btn}
                            activeOpacity={0.5}>
                            <Text style={styles.btnTxt}>Menu</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('SignupScreen')}
                            style={styles.btn}
                            activeOpacity={0.5}>
                            <Text style={styles.btnTxt}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.column}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('OffersScreen')}
                            style={styles.btn}
                            activeOpacity={0.5}>
                            <Text style={styles.btnTxt}>Offers</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginTop: 200,
    },
    row: {
        flex: 0.2,
        flexDirection: 'row',
    },
    column: {
        flex: 1,
        flexDirection: 'column',
        // width: '50%'
    },
    btn: {
        marginRight: 5,

    },
    btnTxt: {
        color: 'white',
        fontSize: 18,
        lineHeight: 60,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#006491',
        borderRadius: 20,
    },
});
