/* eslint-disable prettier/prettier */
import React from 'react';
import axios from 'axios';
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
                    icon: 'https://image.freepik.com/free-photo/pizza-with-fresh-champignons-bacon-smoked-chicken-fillet-mozzarella-cheese-sliced-tomato-green-onions-piece-is-cut-off-from-pizza-white-background-isolated-closeup_323569-268.jpg',
                    name: 'Chicken Spicy Pizza',
                    price: 'Rs.1189',
                },
                {
                    id: 2,
                    color: '#87CEEB',
                    icon: 'https://previews.123rf.com/images/gbh007/gbh0071806/gbh007180600466/103181956-pizza-with-chicken-and-vegetables-on-white-background.jpg',
                    name: 'Detroit Pizza',
                    price: 'Rs.1939',
                },
                {
                    id: 3,
                    color: '#4682B4',
                    icon: 'https://previews.123rf.com/images/sacura123/sacura1231703/sacura123170300159/74828679-pepperoni-pizza-isolated-on-white-background.jpg',
                    name: 'Sicilian Pizza',
                    price: 'Rs.1500',
                },
            ],
            cart: [],
            total: 0,
        };
        this.getCart = this.getCart.bind(this);
        this.getTotal = this.getTotal.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    componentDidMount = () => {
        this.getCart();
        this.getTotal();
    }

    getCart = () => {
        var url = 'http://192.168.8.105:8080/cart/';
        axios.get(url)
            .then(response => {
                this.setState({ cart: response.data.data });
            })
            .catch(error => {
                console.log(error);
                alert(error.message);
            });
    }

    getTotal = () => {
        var url = 'http://192.168.8.105:8080/cart/getTotal';
        axios.get(url)
            .then(response => {
                this.setState({ total: response.data.totalAmount });
            })
            .catch(error => {
                console.log(error);
                alert(error.message);
            });
    }

    deleteItem = (item) => {
        var url = `http://192.168.8.105:8080/cart/delete/${item._id}`;
        axios.delete(url)
            .then(response => {
                console.log(response.data);
                alert(response.data);
            })
            .catch(error => {
                console.log(error);
                alert(error.message);
            });
    }

    cardClickEventListener = (item) => {
        // Alert.alert(item.name);
        this.props.navigation.navigate('PizzaDetailScreen', { item: item });
    }

    render() {
        console.log("cart", this.state.cart)
        return (
            <View style={styles.container}>
                <ScrollView>
                    <FlatList
                        style={styles.flatList}
                        data={this.state.cart}
                        keyExtractor={(item) => { return item.id; }}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity
                                    style={styles.card}
                                    // TODO: update this to edit
                                    onPress={() => { this.cardClickEventListener(item) }}>
                                    {/* Row */}
                                    <View style={styles.cardContent}>
                                        {/* Column for image */}
                                        <View style={styles.imageContainer}>
                                            <Image style={styles.image} source={{ uri: item.pizzaImage }} />
                                        </View>
                                        {/* Column for text */}
                                        <View style={[styles.imageContainer, { marginLeft: 10 }]}>
                                            <Text style={styles.name}>{item.pizzaName}</Text>
                                            <Text style={styles.price}>Rs.{item.pizzaPrice}/=</Text>
                                            <View style={{ flex: 1, flexDirection: 'row', margin: 5 }}>
                                                <Text>Ingredients: </Text>
                                                {item.pizzaToppings.map((item) => (
                                                    <Text>{item},</Text>
                                                ))}
                                            </View>
                                            <TouchableOpacity style={styles.incrementBtn}
                                                onPress={() => this.props.navigation.navigate('CartScreen')}>
                                                <Text style={styles.incrementBtnTxt}>-   1   +</Text>
                                            </TouchableOpacity>
                                            <View style={styles.inlineView} />
                                        </View>
                                        {/* Column for bin */}
                                        <View style={[styles.imageContainer, { marginLeft: -40, }]}>
                                            <TouchableOpacity style={styles.deleteBtn}
                                                onPress={() => { this.deleteItem(item) }}>
                                                {/* <Image
                                                    style={styles.binImage}
                                                    source={require('../../../images/trash.png')}
                                                /> */}
                                                <Image style={styles.binImage} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/216/216658.png' }} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            );
                        }}
                    />
                </ScrollView>
                {/* Total */}
                <TouchableOpacity style={styles.priceCard} activeOpacity={0.5}>
                    <View style={styles.priceLabel}>
                        <Text style={styles.priceLabelText}>Sub Total :</Text>
                        <Text style={[styles.priceLabelText, { borderBottomWidth: 1 }]}>Discount :</Text>
                        <Text style={styles.totalPrice}>Grand Total :</Text>
                    </View>
                    <View style={[styles.priceLabel, { alignItems: 'flex-end' }]}>
                        <Text style={{ color: 'gray', padding: 5 }}>Rs. {this.state.total}.00</Text>
                        <Text style={[styles.priceLabelText, { borderBottomWidth: 1, width: 145, textAlign: 'right' }]}>Rs. 0.00</Text>
                        <Text style={styles.totalPrice}>Rs. {this.state.total}.00</Text>
                    </View>
                </TouchableOpacity>
                {/* Checkout button */}
                <View style={styles.btnView}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('DeliveryScreen')}
                        style={styles.btn}>
                        <Text style={styles.btnTxt}>Checkout</Text>
                    </TouchableOpacity>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F1F5FF',
    },
    flatList: {
        marginTop: 5,
        padding: 8,
    },
    imageContainer: {
        flexDirection: 'column',
        marginRight: 10,
    },
    card: {
        flexDirection: 'column',
        height: null,
        margin: 5,
        marginBottom: 15,
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 15,
    },
    cardContent: {
        flexDirection: 'row',
    },
    image: {
        width: 100,
        height: 120,
        resizeMode: 'contain',
        borderRadius: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: '500',
        margin: 5,
        color: '#e51837',
    },
    price: {
        fontSize: 15,
        marginLeft: 10,
        color: '#0078ad',
    },
    incrementBtn: {
        width: 65,
        justifyContent: 'center',
        margin: 5,
        marginTop: 10,
        borderRadius: 5,
        backgroundColor: '#049C01',
    },
    inlineView: {
        flex: 1,
        flexDirection: 'row',
        width: 170,
    },
    deleteBtn: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        marginTop: '10%',
        borderWidth: 1.5,
        borderColor: '#E10032',
        borderRadius: 5,
        // backgroundColor: '#E10032',
        backgroundColor: '#fff',
    },
    incrementBtnTxt: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
    },
    binImage: {
        width: 20,
        height: 20,
    },
    priceCard: {
        flexDirection: 'row',
        height: 150,
        justifyContent: 'center',
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    priceLabel: {
        width: width * 0.4,
    },
    priceLabelText: {
        color: 'gray',
        padding: 5,
    },
    totalPrice: {
        padding: 5,
        marginTop: 5,
        fontSize: 15,
        fontWeight: 'bold',
    },
    btnView: {
        padding: 3,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    btn: {
        padding: 0,
        width: 240,
        borderRadius: 10,
        backgroundColor: '#E42E4B',
    },
    btnTxt: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 40,
        textAlign: 'center',
    },
});
