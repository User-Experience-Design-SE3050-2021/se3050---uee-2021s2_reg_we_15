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

export default class SplashScreen extends React.Component {
    static navigationOptions = {
        title: 'Confirmation'
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={require('../../images/confirm.png')} />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 250,
        height: 250,
        marginTop: -30,
        marginBottom: 30,
    },
});