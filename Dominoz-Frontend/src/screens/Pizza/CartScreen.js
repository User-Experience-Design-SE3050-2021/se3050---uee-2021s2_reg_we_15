/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, Dimensions, Button } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class CartScreen extends React.Component {
    static navigationOptions = {
        title: 'Cart',
    }

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    color: '#FF4500',
                    icon: 'https://images3.alphacoders.com/104/1041781.jpg',
                    name: 'Chicken Spicy Pizza',
                    price: 'Rs.1189'
                },
                {
                    id: 2,
                    color: '#87CEEB',
                    icon: 'https://mocah.org/uploads/posts/565777-pizza.jpg',
                    name: 'Detroit Pizza',
                    price: 'Rs.1939'
                },
                {
                    id: 3,
                    color: '#4682B4',
                    icon: 'https://image.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg',
                    name: 'Sicilian Pizza',
                    price: 'Rs.1500'
                },
            ]
        };
    }

    cardClickEventListener = (item) => {
        // Alert.alert(item.name);
        this.props.navigation.navigate('PizzaDetailScreen', { item: item });
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <FlatList
                        style={styles.notificationList}
                        data={this.state.data}
                        keyExtractor={(item) => {
                            return item.id;
                        }}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity
                                    style={[styles.card, { borderColor: '#00BFFF' }]}
                                    onPress={() => { this.cardClickEventListener(item) }}
                                >
                                    {/* Row */}
                                    <View style={styles.cardContent}>
                                        {/* Column for image */}
                                        <View style={styles.imageContainer}>
                                            <Image style={[styles.image, styles.imageContent]} source={{ uri: item.icon }} />
                                        </View>
                                        {/* Column for text */}
                                        <View style={styles.imageContainer}>
                                            <Text style={styles.name}>{item.name}</Text>
                                            <View style={{ flex: 1, flexDirection: 'row', width: 170 }}>
                                                {/* Price button */}
                                                <View style={{ flex: 1, flexDirection: 'column', }}>
                                                    <View style={{ flex: 1, flexDirection: 'row', }}>
                                                        <Text style={styles.price}>{item.price}</Text>
                                                    </View>
                                                    {/* Edit button */}
                                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                                        <TouchableOpacity style={[styles.cartBtn, { backgroundColor: '#0970CE' }]}
                                                            onPress={() => this.props.navigation.navigate('CartScreen')}>
                                                            <Text style={styles.btnText}>Edit</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                                {/* Increment button */}
                                                <View style={{ flex: 1, flexDirection: 'column', }}>
                                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                                        <TouchableOpacity style={[styles.cartBtn, { marginTop: 0, }]}
                                                            onPress={() => this.props.navigation.navigate('CartScreen')}>
                                                            <Text style={styles.btnText}>-   1   +</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                    {/* Delete button */}
                                                    <View style={{ flex: 1, flexDirection: 'row', }}>
                                                        <TouchableOpacity style={[styles.cartBtn, { backgroundColor: '#D70000' }]}
                                                            onPress={() => this.props.navigation.navigate('CartScreen')}>
                                                            <Text style={styles.btnText}>Remove</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                    {/* Total */}
                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row', backgroundColor: '#fff', margin: 10, padding: 10, borderWidth: 0.5 }}
                        activeOpacity={0.5}
                    >
                        <View style={{ width: width * 0.4 }}>
                            <Text style={{ color: 'gray' }}>Sub Total :</Text>
                            <Text style={{ borderBottomWidth: 1, color: 'gray' }}>Discount :</Text>
                            <Text style={{ marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>Grand Total :</Text>

                        </View>
                        <View style={{ width: width * 0.4, alignItems: 'flex-end' }}>
                            <Text style={{ color: 'gray' }}>Rs. 3138.00</Text>
                            <Text style={{ borderBottomWidth: 1, width: 145, textAlign: 'right', color: 'gray' }}>Rs. 0.00</Text>
                            <Text style={{ marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>Rs. 3138.00</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
                <View style={{ padding: 3, alignItems: 'center', backgroundColor: '#006491' }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('DeliveryScreen')}
                        style={styles.btn}>
                        <Text style={styles.btnTxt}>Checkout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 10,
        backgroundColor: '#F1F5FF',
        padding: 8,

    },
    flatList: {
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    notificationList: {
        marginTop: 5,
        padding: 8,
    },
    cardContainer: {
        height: 40,
        width: width * 0.3,
        marginRight: 8,
    },
    tag: {
        height: 40,
        width: width * 0.3,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#E42E4B',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    imageContainer: {
        flexDirection: 'column',
        marginRight: 10,
    },
    card: {
        elevation: 8,
        height: null,
        // paddingTop: 10,
        // paddingBottom: 10,
        padding: 5,
        // marginTop: 5,
        backgroundColor: 'white',
        flexDirection: 'column',
        marginBottom: 15,
        borderRadius: 15,
        shadowColor: '#000000',
        // shadowOffset: {
        // 	width: 10,
        // 	height: 10
        // },
        shadowRadius: 50,
        // shadowOpacity: 5.0
    },
    cardContent: {
        flexDirection: 'row',
        // marginLeft: 10,
    },
    imageContent: {
        // marginTop: -40,
    },
    image: {
        width: 140,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    name: {
        // textAlign: 'left',
        fontSize: 16,
        fontWeight: '500',
        margin: 5,
        // alignSelf: 'left'
    },
    price: {
        fontSize: 15,
        marginLeft: 10,
        color: '#FF5833',
    },
    cartBtn: {
        justifyContent: 'center',
        margin: 5,
        borderRadius: 5,
        // marginHorizontal: 3,
        backgroundColor: '#049C01',
        marginTop: '10%',
        width: 65,
        // marginLeft: '35%'
        // height: 30
    },
    btnText: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
    },
    loginBtn: {
        width: '80%',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        backgroundColor: '#E42E4B',
    },
    loginText: {
        color: '#f6f6f6'
    },
    btn: {
        padding: 0,
        width: 140,
        marginLeft: '10%',
        marginRight: '10%',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#E42E4B'
    },
    btnTxt: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 40,
        textAlign: 'center',
        // backgroundColor: "#000000c0",
        // backgroundColor: '#006491',
        // borderRadius: 50,
    },
});