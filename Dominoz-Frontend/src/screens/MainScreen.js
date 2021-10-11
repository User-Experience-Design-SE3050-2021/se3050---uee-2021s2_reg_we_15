/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class SiteDashboardScreen extends React.Component {
    static navigationOptions = {
        title: 'Site Dashboard',
        headerShown: false,
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 0.5, flexDirection: 'row', width: '100%', }}>
                    {/* <Image
                        style={styles.backImage}
                        source={require('../../images/logo.png')} /> */}
                </View>
                <Text style={[styles.btnTxt, { color: '#0C1446', marginTop: -90, marginBottom: 40, fontSize: 26, fontWeight: 'bold' }]}>Choose & Customize Your Pizza</Text>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('MenuScreen')}
                            style={styles.btn}
                            activeOpacity={0.5}>
                            <Image
                                style={{ width: 70, height: 70 }}
                                source={{ uri: 'https://cdn-icons.flaticon.com/png/512/706/premium/706918.png?token=exp=1633931712~hmac=5c5593ba9e01790fd1a954589bec3a97' }} />
                            <Text style={styles.btnTxt}>Menu</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.column}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('OffersScreen')}
                            style={styles.btn}
                            activeOpacity={0.5}>
                            <Image
                                style={{ width: 70, height: 70 }}
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
                                style={{ width: 70, height: 70 }}
                                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/891/891462.png'}} />
                            <Text style={styles.btnTxt}>Cart</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.column}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('PaymentScreen')}
                            style={styles.btn}
                            activeOpacity={0.5}>
                            <Image
                                style={{ width: 70, height: 70 }}
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
        backgroundColor: '#F1F5FF',
    },
    backImage: {
        width: '100%',
        height: '70%',
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
        backgroundColor: '#11A7BB',
        borderRadius: 20,
        alignSelf: 'center',
        alignItems: 'center'
    },
    btnTxt: {
        padding: 5,
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
});
// import React from 'react';
// import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

// export default class MainScreen extends React.Component {
//     static navigationOptions = {
//         title: 'Main',
//     };

//     render() {
//         return (
//             <View style={styles.container}>
//                 <View style={styles.row}>
//                     <View style={styles.column}>
//                         <TouchableOpacity
//                             onPress={() => this.props.navigation.navigate('LoginScreen')}
//                             style={styles.btn}
//                             activeOpacity={0.5}>
//                             <Text style={styles.btnTxt}>Login</Text>
//                         </TouchableOpacity>
//                     </View>
//                     <View style={styles.column}>
//                         <TouchableOpacity
//                             onPress={() => this.props.navigation.navigate('PaymentScreen')}
//                             style={styles.btn}
//                             activeOpacity={0.5}>
//                             <Text style={styles.btnTxt}>Payment</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//                 <View style={styles.row}>
//                     <View style={styles.column}>
//                         <TouchableOpacity
//                             onPress={() => this.props.navigation.navigate('AddressScreen')}
//                             style={styles.btn}
//                             activeOpacity={0.5}>
//                             <Text style={styles.btnTxt}>Address</Text>
//                         </TouchableOpacity>
//                     </View>

//                     <View style={styles.column}>
//                         <TouchableOpacity
//                             onPress={() => this.props.navigation.navigate('MenuScreen')}
//                             style={styles.btn}
//                             activeOpacity={0.5}>
//                             <Text style={styles.btnTxt}>Menu</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//                 <View style={styles.row}>
//                     <View style={styles.column}>
//                         <TouchableOpacity
//                             onPress={() => this.props.navigation.navigate('SignupScreen')}
//                             style={styles.btn}
//                             activeOpacity={0.5}>
//                             <Text style={styles.btnTxt}>Sign Up</Text>
//                         </TouchableOpacity>
//                     </View>
//                     <View style={styles.column}>
//                         <TouchableOpacity
//                             onPress={() => this.props.navigation.navigate('OffersScreen')}
//                             style={styles.btn}
//                             activeOpacity={0.5}>
//                             <Text style={styles.btnTxt}>Offers</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         margin: 10,
//         marginTop: 200,
//     },
//     row: {
//         flex: 0.2,
//         flexDirection: 'row',
//     },
//     column: {
//         flex: 1,
//         flexDirection: 'column',
//         // width: '50%'
//     },
//     btn: {
//         marginRight: 5,

//     },
//     btnTxt: {
//         color: 'white',
//         fontSize: 18,
//         lineHeight: 60,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         backgroundColor: '#006491',
//         borderRadius: 20,
//     },
// });
