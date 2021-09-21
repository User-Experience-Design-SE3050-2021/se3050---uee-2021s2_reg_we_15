/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const dummyData = [
    {
        id: 1,
        name: 'All',
    },
    {
        id: 2,
        name: 'Best Sellers',
    },
    {
        id: 3,
        name: 'Veg-Pizza',
    },
    {
        id: 4,
        name: 'Non-Veg',
    },
    {
        id: 5,
        name: 'Favorite',
    },
];
export default class CartScreen extends React.Component {
    static navigationOptions = {
        title: 'Cart',
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {/* <FlatList
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.flatList}
                        horizontal={true}
                        data={dummyData}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity style={styles.cardContainer}>
                                    <View style={styles.tag}>
                                        <Text style={styles.text}>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            );
                        }}
                    /> */}
                    <TouchableOpacity style={[styles.card, { borderColor: '#00BFFF' }]}>
                        {/* Row */}
                        <View style={styles.cardContent}>
                            {/* Column for image */}
                            <View style={styles.imageContainer}>
                                <Image style={[styles.image, styles.imageContent]} source={{ uri: 'https://i0.wp.com/www.eatlanka.com/wp-content/uploads/2020/11/216054.jpg' }} />
                            </View>
                            {/* Column for text */}
                            <View style={styles.imageContainer}>
                                <Text style={styles.name}>Spicy Chicken Pizza</Text>
                                <Text style={styles.price}>LKR: 5000</Text>
                                <TouchableOpacity style={styles.btnColor}>
                                    <Text style={styles.btnText}>Update</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.card, { borderColor: '#00BFFF' }]}>
                        {/* Row */}
                        <View style={styles.cardContent}>
                            {/* Column for image */}
                            <View style={styles.imageContainer}>
                                <Image style={[styles.image, styles.imageContent]} source={{ uri: 'https://kfoods.com/images1/newrecipeicon/spicy-chicken-pizza_4963.jpg' }} />
                            </View>
                            {/* Column for text */}
                            <View style={styles.imageContainer}>
                                <Text style={styles.name}>Spicy Chicken Pizza</Text>
                                <Text style={styles.price}>LKR: 5000</Text>
                                <TouchableOpacity style={styles.btnColor}>
                                    <Text style={styles.btnText}>Update</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
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
    cardContainer: {
        height: 40,
        width: width * 0.3,
        marginRight: 8,
    },
    tag: {
        height: 40,
        width: width * 0.3,
        borderRadius: 50,
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
        padding: 10,
        // marginTop: 5,
        backgroundColor: 'white',
        flexDirection: 'column',
        marginBottom: 20,
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
        width: 150,
        height: 130,
        borderRadius: 10,
    },
    name: {
        // textAlign: 'left',
        fontSize: 16,
        fontWeight: '500',
        margin: 10,
        // alignSelf: 'left'
    },
    price: {
        fontSize: 15,
        marginLeft: 10,
        color: '#FF5833',
    },
    btnColor: {
        padding: 5,
        borderRadius: 40,
        // marginHorizontal: 3,
        backgroundColor: '#0970CE',
        marginTop: 20,
        width: 110,
        // height: 30
    },
    btnText: {
        color: '#fff',
        fontSize: 14,
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