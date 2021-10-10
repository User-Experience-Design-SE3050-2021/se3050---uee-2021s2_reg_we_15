/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';

export default class SplashScreen extends React.Component {
    static navigationOptions = {
        headerShown: false,
    };

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={require('../../images/logo.png')} />
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('SignupScreen')}
                    style={styles.btn}
                    activeOpacity={0.5}>
                    <Text style={styles.btnTxt}>Get Started</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Copyright @Jubiliant works your permission</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#006491',
        alignContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    image: {
        marginTop: '35%',
        width: 150,
        height: 150,
    },
    title: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
        marginTop: '25%',
    },
    btn: {
        width: 240,
        margin: '20%',
        marginTop: '25%',
    },
    btnTxt: {
        color: 'white',
        fontSize: 20,
        lineHeight: 45,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#E42E4B',
        borderRadius: 50,
        elevation: 10,
    },
});
