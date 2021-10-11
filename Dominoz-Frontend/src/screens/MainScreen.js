/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class MainScreen extends React.Component {
    static navigationOptions = {
        title: 'Site Dashboard',
        headerShown: false,
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 0.5, flexDirection: 'row', width: '100%',justifyContent:'center' }}>
                    <Image
                        style={styles.backImage}
                        source={require('../../images/logo.png')} />
                </View>
                <Text style={[styles.btnTxt, { color: '#fff', marginTop: -90, marginBottom: 40, fontSize: 26, fontWeight: 'bold' }]}>Choose & Customize Your Pizza</Text>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('MenuScreen')}
                            style={styles.btn}
                            activeOpacity={0.5}>
                            <Image
                                style={{ width: 70, height: 70, marginTop: 5 }}
                                source={{ uri: 'https://cdn-icons.flaticon.com/png/512/706/premium/706918.png?token=exp=1633972533~hmac=0d3f89de85f06c3f26b7ea2a32c8b13f' }} />
                            <Text style={styles.btnTxt}>Menu</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.column}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('OffersScreen')}
                            style={styles.btn}
                            activeOpacity={0.5}>
                            <Image
                                style={{ width: 70, height: 70, marginTop: 5 }}
                                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/726/726476.png'}} />
                            <Text style={styles.btnTxt}>Offers</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('CartScreen')}
                            style={styles.btn}
                            activeOpacity={0.5}>
                            <Image
                                style={{ width: 70, height: 70, marginTop: 5 }}
                                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/891/891462.png'}} />
                            <Text style={styles.btnTxt}>Cart</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.column}>
                        <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('ProfileScreen')}
                            style={styles.btn}
                            activeOpacity={0.5}>
                            <Image
                                style={{ width: 70, height: 70, marginTop: 5 }}
                                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} />
                            <Text style={styles.btnTxt}>Profile</Text>
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
        padding: 5,
        backgroundColor: '#006491',
        justifyContent: 'center',
        alignItems: 'center'
    },
    backImage: {
        width: 100,
        height: 100,
    },
    row: {
        flex: 0.5,
        flexDirection: 'row',
    },
    column: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
    },
    btn: {
        margin: 10,
        padding: 5,
        width: 150,
        height: 120,
        marginRight: 5,
        backgroundColor: '#fff',
        borderRadius: 20,
        alignSelf: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#E42E4B'
    },
    btnTxt: {
        padding: 5,
        color: '#000',
        fontSize: 16,
        textAlign: 'center',
    },
});
