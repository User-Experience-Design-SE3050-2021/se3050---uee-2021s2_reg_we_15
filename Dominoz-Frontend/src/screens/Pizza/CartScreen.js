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
                    color: "#FF4500",
                    icon: "https://images3.alphacoders.com/104/1041781.jpg",
                    name: "Chicken Spicy Pizza",
                    price: 'Rs. 1189/='
                },
                {
                    id: 2,
                    color: "#87CEEB",
                    icon: "https://mocah.org/uploads/posts/565777-pizza.jpg",
                    name: "Detroit Pizza",
                    price: 'Rs. 1939/='
                },
                {
                    id: 3,
                    color: "#4682B4",
                    icon: "https://image.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg",
                    name: "Sicilian Pizza",
                    price: 'Rs. 1500/='
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

                                            <View style={{ flex: 1, flexDirection: 'row', width: 100, height: 50 }}>

                                                <View style={{ flex: 1, flexDirection: 'column', width: 100, height: 50, borderWidth: 4 }}>
                                                    <View style={{ flex: 1, flexDirection: 'row', width: 100 }}>
                                                        <Text style={styles.price}>1000</Text>
                                                    </View>

                                                    <View style={{ flex: 1, flexDirection: 'row', width: 100, height: 50, borderWidth: 4 }}>
                                                        <Text style={styles.price}>2000</Text>
                                                    </View>
                                                </View>


                                                <View style={{ flex: 1, flexDirection: 'column', width: 100, height: 50, borderWidth: 4 }}>
                                                    <View style={{ flex: 1, flexDirection: 'row', width: 100, height: 50 }}>
                                                        <Text style={styles.price}>3000</Text>
                                                    </View>

                                                    <View style={{ flex: 1, flexDirection: 'row', width: 100, height: 50, borderWidth: 4 }}>
                                                        <Text style={styles.price}>4000</Text>
                                                    </View>
                                                </View>



                                            </View>

                                            {/* <TouchableOpacity style={styles.cartBtn}
                                                onPress={() => this.props.navigation.navigate('CartScreen')}>
                                                <Text style={styles.btnText}>Add To Cart</Text>
                                            </TouchableOpacity> */}
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </ScrollView>
                <TouchableOpacity style={styles.loginBtn}
                    onPress={() => this.props.navigation.navigate('DeliveryScreen')}>
                    <Text style={styles.loginText}>Checkout</Text>
                </TouchableOpacity>
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
        height: null,
        // paddingTop: 10,
        // paddingBottom: 10,
        padding: 5,
        // marginTop: 5,
        backgroundColor: 'white',
        flexDirection: 'column',
        marginBottom: 15,
        borderRadius: 15,
    },
    cardContent: {
        flexDirection: 'row',
        // marginLeft: 10,
    },
    imageContent: {
        // marginTop: -40,
    },
    image: {
        width: 130,
        height: 110,
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
        marginTop: -3
    },
    cartBtn: {
        padding: 3,
        borderRadius: 15,
        // marginHorizontal: 3,
        backgroundColor: '#049C01',
        marginTop: '10%',
        width: 100,
        marginLeft: '35%'
        // height: 30
    },
    btnText: {
        color: '#fff',
        fontSize: 13,
        textAlign: 'center',
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#E42E4B",
    },
    loginText: {
        color: "#f6f6f6"
    }
});