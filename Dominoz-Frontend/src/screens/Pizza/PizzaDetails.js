/* eslint-disable prettier/prettier */
import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, ScrollView, FlatList, Dimensions } from 'react-native';
import pizza_s from '../../../images/pizzaSize/pizza_s.png';
import pizza_m from '../../../images/pizzaSize/pizza_m.png';
import pizza_l from '../../../images/pizzaSize/pizza_l.png';
import cheese from '../../../images/toppings/cheese.png';
import onion from '../../../images/toppings/onion.png';
import tomato from '../../../images/toppings/tomato.png';
import pineapple from '../../../images/toppings/pineapple.png';
import capsicum from '../../../images/toppings/capsicum.png';

const { width, height } = Dimensions.get('window');

const size = [
    {
        id: 1,
        name: 'Regular',
        icon: pizza_s,
    },
    {
        id: 2,
        name: 'Medium',
        icon: pizza_m,
    },
    {
        id: 3,
        name: 'Large',
        icon: pizza_l,
    },
];

const toppings = [
    {
        id: 1,
        name: 'Cheese',
        icon: cheese,
    },
    {
        id: 2,
        name: 'Onion',
        icon: onion,
    },
    {
        id: 3,
        name: 'Tomato',
        icon: tomato,
    },
    {
        id: 4,
        name: 'Pineapple',
        icon: pineapple,
    },
    {
        id: 5,
        name: 'Capsicum',
        icon: capsicum,
    },
];

export default class PizzaDetailScreen extends React.Component {
    static navigationOptions = {
        title: 'Details',
        // headerShown: false,
    };

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            selectedSize: 0,
            toppingsData: toppings,
            selectedToppings: [],
            itemDetails:{}
        };
        this.addToCart = this.addToCart.bind(this);
    }

    componentDidMount = () => {
        const { navigation } = this.props;
        const param = navigation.getParam('item');
        this.setState({
            data: param,
        });
    }

    onSizeSelect = (item) => {
        console.log('onTabItemSelect :: item', item);
        this.setState({ selectedSize: item.id });
    };

    onPressHandler(id) {
        let toppingsData = [...this.state.toppingsData];
        let selectedToppings = [...this.state.selectedToppings];

        for (let data of toppingsData) {
            if (data.id == id) {

                data.selected = (data.selected == null) ? true : !data.selected;

                if (data.selected) {
                    selectedToppings.push(data.name);
                } else {
                    selectedToppings = this.arrayRemove(this.state.selectedToppings, data.name);
                }
                break;
            }
        }

        this.setState({ toppingsData });
        this.setState({ selectedToppings });
    }

    arrayRemove(arr, value) {
        return arr.filter(function (geeks) {
            return geeks !== value;
        });
    }

    addToCart() {
        var url = 'http://192.168.1.102:8080/cart/createOrder';
        var data = {
            pizzaImage: this.state.data.pizzaImage,
            pizzaName: this.state.data.pizzaName,
            pizzaPrice: this.state.data.pizzaPrice,
            pizzaDescription: this.state.data.pizzaDescription,
            pizzaSize: this.state.selectedSize,
            pizzaToppings: this.state.selectedToppings,
        };
        axios.post(url, data)
            .then(response => {
                this.setState({
                    itemDetails: response.data,
                });
                Alert.alert(
                    'Success ✔',
                    'Your order has been placed successfully!!',
                    [
                        { text: 'OK', onPress: () => this.props.navigation.navigate('') },
                    ],
                    { cancelable: false },
                );
            })
            .catch(error => {
                console.log(error);
                Alert.alert(
                    'Error ❌',
                    'Your order has been placed unsuccessfully!!',
                    [
                        { text: 'Check Again?', onPress: () => this.props.navigation.navigate('') },
                    ],
                    { cancelable: false },
                );
            });
    }

    render() {

        console.log('item details', this.state.data);

        return (
            <View style={styles.container}>
                <ScrollView>
                    {/* Image of Pizza */}
                    <Image style={styles.pizzaImage} source={{ uri: this.state.data.pizzaImage }} />
                    {/* Pizza Details Card */}
                    <TouchableOpacity
                        style={styles.pizzaCard}
                        activeOpacity={1}>
                        {/* Row for pizza details */}
                        <View style={styles.cardRow}>
                            <Text style={styles.pizzaName}>{this.state.data.pizzaName}</Text>
                        </View>
                        <View style={styles.cardRow}>
                            <Text style={styles.pizzaPrize}>Rs. {this.state.data.pizzaPrice}/=</Text>
                        </View>
                        {/* Row for Description */}
                        <Text style={styles.selectionTxt}>Description</Text>
                        <View style={styles.cardRow}>
                            <Text style={styles.pizzaDescription}>{this.state.data.pizzaDescription}</Text>
                        </View>
                        {/* Size Row */}
                        <Text style={styles.selectionTxt}>Size</Text>
                        <View style={[styles.cardRow, { marginLeft: 25, marginRight: 25 }]}>
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={styles.selectionFlatlist}
                                horizontal={true}
                                data={size}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({ item }) => {
                                    return (
                                        <TouchableOpacity style={styles.cardContainer} onPress={() => this.onSizeSelect(item)}>
                                            <View style={[styles.sizeList, this.state.selectedSize === item.id ? styles.sizeSelected : {}]}>
                                                <View style={styles.iconContainer}>
                                                    <Image style={styles.icon} source={item.icon} />
                                                </View>
                                                <View style={styles.iconContainer}>
                                                    <Text style={[styles.sizeTxt, this.state.selectedSize === item.id ? styles.sizeSelectedTxt : {}]}>{item.name}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    );
                                }}
                            />
                        </View>
                        {/* Toppings */}
                        <Text style={styles.selectionTxt}>Toppings</Text>
                        <View style={[styles.cardRow, { marginLeft: 25, marginRight: 25 }]}>
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={styles.selectionFlatlist}
                                horizontal={true}
                                data={toppings}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({ item }) => {
                                    return (
                                        <TouchableOpacity style={[styles.cardContainer, { width: width * 0.24 }]} onPress={() => this.onPressHandler(item.id)}>
                                            <View style={[styles.toppingList, item.selected === true ? styles.toppingSelected : {}]}>
                                                <View style={styles.topIconContainer}>
                                                    <Image style={styles.icon} source={item.icon} />
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    );
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                </ScrollView>
                {/* Cart button */}
                <View style={styles.btnView}>
                    <TouchableOpacity
                        onPress={this.addToCart}
                        // onPress={() => this.props.navigation.navigate('CartScreen')}
                        style={styles.btn}>
                        <Text style={styles.btnTxt}>Add To Cart</Text>
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
    },
    pizzaImage: {
        width: width,
        height: width * 0.7,
        resizeMode: 'cover',
    },
    pizzaCard: {
        flexDirection: 'column',
        height: null,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 0,
        marginTop: -20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#fff',
        shadowColor: '#000000',
        shadowRadius: 50,
    },
    cardRow: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    imageContainer: {
        flexDirection: 'column',
        width: width * 0.5,
    },
    pizzaName: {
        color: '#e51837',
        fontSize: 24,
        padding: 5,
    },
    pizzaPrize: {
        padding: 5,
        paddingTop: -3,
        fontSize: 17,
        color: '#0078ad',
    },
    pizzaDescription: {
        fontSize: 14,
        textAlign: 'justify',
        color: 'gray',
        padding: 10,
        paddingTop: 10,
        marginBottom: 5,
    },
    selectionTxt: {
        color: '#000',
        padding: 5,
        fontSize: 15,
        paddingLeft: 20,
    },
    selectionFlatlist: {
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    cardContainer: {
        height: 45,
        width: width * 0.34,
        marginRight: 0,
    },
    iconContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    icon: {
        padding: 5,
        width: 25,
        height: 25,
    },
    sizeTxt: {
        color: '#000',
        marginLeft: '-35%',
    },
    sizeSelectedTxt: {
        color: '#fff',
        marginLeft: '-35%',
    },
    sizeList: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.3,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#A3ABB0',
        padding: 8,
    },
    sizeSelected: {
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#0E86D4',
        padding: 8,
        backgroundColor: '#0E86D4',
    },
    toppingList: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        width: width * 0.20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#D9E4EC',
        padding: 8,
        backgroundColor: '#fff',
    },
    toppingSelected: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#D9E4EC',
        padding: 8,
        backgroundColor: '#0E86D4',
    },
    topIconContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    tag: {
        height: 50,
        width: width * 0.3,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#006341',
    },
    btnView: {
        paddingTop: 10,
        padding: 3,
        alignItems: 'center',
    },
    btn: {
        padding: 0,
        width: 250,
        borderRadius: 100,
        // backgroundColor: '#049C01',
        backgroundColor: '#E42E4B',
    },
    btnTxt: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 40,
        textAlign: 'center',
    },
    btnColor: {
        padding: 10,
        borderRadius: 40,
        marginHorizontal: 3,
        backgroundColor: '#eee',
        marginTop: 5,
    },
});
