/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, ScrollView, FlatList, Dimensions } from 'react-native';
import pizza_s from '../../../images/pizza_s.png';
import pizza_m from '../../../images/pizza_m.png';
import pizza_l from '../../../images/pizza_l.png';
import cheese from '../../../images/cheese.png';
import onion from '../../../images/onion.png';
import tomato from '../../../images/tomato.png';
import pineapple from '../../../images/pineapple.png';
import capsicum from '../../../images/capsicum.png';

const { width, height } = Dimensions.get('window');

const size = [
    {
        id: 1,
        name: 'Regular',
        icon: pizza_s
    },
    {
        id: 2,
        name: 'Medium',
        icon: pizza_m
    },
    {
        id: 3,
        name: 'Large',
        icon: pizza_l
    }
];

const toppings = [
    {
        id: 1,
        name: 'Cheese',
        icon: cheese
    },
    {
        id: 2,
        name: 'Onion',
        icon: onion
    },
    {
        id: 3,
        name: 'Tomato',
        icon: tomato
    },
    {
        id: 4,
        name: 'Pineapple',
        icon: pineapple
    },
    {
        id: 5,
        name: 'Capsicum',
        icon: capsicum
    },
];


export default class PizzaDetailScreen extends React.Component {
    static navigationOptions = {
        title: 'Details'
    };

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            selectedSize: 0,
            toppingsData: toppings,
            selectedToppings: []
        };
    }

    componentDidMount = () => {
        const { navigation } = this.props;
        const param = navigation.getParam('item');
        this.setState({
            data: param
        });

    }

    cardClickEventListener = (item) => {
        Alert.alert(item.name);
    }

    tagClickEventListener = (tagName) => {
        Alert.alert(tagName);
    }

    renderTags = (item) => {
        return item.tags.map((tag, key) => {
            return (
                <TouchableOpacity key={key} style={styles.btnColor} onPress={() => { this.tagClickEventListener(tag) }}>
                    <Text>{tag}</Text>
                </TouchableOpacity>
            );
        })
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
            return geeks != value;

        });
    }

    render() {

        console.log('item details', this.state.data);

        return (
            <View style={styles.container}>
                <ScrollView>
                    {/* Image of Pizza */}
                    <Image style={styles.pizzaImage} source={{ uri: this.state.data.icon }} />
                    {/* Pizza Details Card */}
                    <TouchableOpacity
                        style={styles.pizzaCard}
                        activeOpacity={1}>
                        {/* Row for pizza details */}
                        <View style={styles.cardRow}>
                            <Text style={styles.pizzaName}>{this.state.data.name}</Text>
                        </View>
                        <View style={styles.cardRow}>
                            <Text style={styles.pizzaPrize}>{this.state.data.price}</Text>
                        </View>
                        {/* Row for Description */}
                        <View style={styles.cardRow}>
                            <Text style={styles.pizzaDescription}>
                                Crispy chicken bacon, jalapeno and pineapple titbits on a mozzarella crust</Text>
                        </View>
                        {/* Size Row */}
                        {/* <View style={{ borderWidth: 1, borderColor: 'gray', margin: 5, backgroundColor: '#F1F5FF'}}> */}
                        <Text style={styles.selectionTxt}>Choose Size</Text>
                        <View style={[styles.cardRow]}>
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
                        {/* </View> */}
                        {/* Toppings */}
                        <Text style={styles.selectionTxt}>Add Toppings</Text>
                        <View style={[styles.cardRow]}>
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={styles.selectionFlatlist}
                                horizontal={true}
                                data={toppings}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({ item }) => {
                                    return (
                                        <TouchableOpacity style={[styles.cardContainer, { height: 65 }]} onPress={() => this.onPressHandler(item.id)}>
                                            <View style={[styles.toppingList, item.selected == true ? styles.toppingSelected : {}]}>
                                                <View style={styles.topIconContainer}>
                                                    <Image style={styles.icon} source={item.icon} />
                                                </View>
                                                <View style={styles.topIconContainer}>
                                                    <Text style={[styles.sizeTxt, item.selected == true ? styles.sizeSelectedTxt : {}, { marginLeft: '0%', marginTop: '5%' }]}>{item.name}</Text>
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
                <View style={{ padding: 3, alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('CartScreen')}
                        style={styles.btn}>
                        <Text style={styles.btnTxt}>Add To Cart</Text>
                    </TouchableOpacity>
                </View>
                {/* </ScrollView> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        // padding: 8,
        // paddingTop: 10,
    },
    pizzaImage: {
        width: width,
        height: width * 0.8,
        resizeMode: 'cover'
    },
    pizzaCard: {
        flexDirection: 'column',
        height: null,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 0,
        marginTop: -100,
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
    },
    // Row
    cardRow: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    // Column
    imageContainer: {
        flexDirection: 'column',
        width: width * 0.5
    },
    pizzaName: {
        color: '#000',
        fontSize: 22,
        fontWeight: 'bold',
        padding: 5,
    },
    pizzaPrize: {
        padding: 5,
        paddingTop: -3,
        fontSize: 17,
        // color: 'blue',
        // FIXME:
        // marginTop: 3,
        // color: '#d2112c',
        // alignSelf: 'center'
    },
    pizzaDescription: {
        fontSize: 14,
        textAlign: 'justify',
        color: 'gray',
        padding: 10,
        paddingTop: 10,
        marginBottom: 5
    },
    selectionTxt: {
        color: '#414141',
        fontSize: 16,
        // textAlign: 'justify',
        paddingLeft: 20
    },
    selectionFlatlist: {
        paddingHorizontal: 16,
        paddingVertical: 16
    },
    cardContainer: {
        height: 45,
        width: width * 0.38,
        marginRight: 0
    },
    iconContainer: {
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'center'
    },
    icon: {
        padding: 5,
        width: 30,
        height: 30
    },
    sizeTxt: {
        color: '#000',
        marginLeft: '-15%'
    },
    sizeSelectedTxt: {
        color: '#fff',
        marginLeft: '-15%'
    },
    sizeList: {
        flex: 1,
        flexDirection: 'row',
        // alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        width: width * 0.35,
        // width: 130,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#000',
        padding: 8,
        backgroundColor: '#fff'
    },
    sizeSelected: {
        // alignSelf: 'center',
        height: 40,
        width: width * 0.35,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'black',
        padding: 8,
        backgroundColor: '#e42e4ce3'
    },
    toppingList: {
        flex: 1,
        flexDirection: 'column',
        // alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        width: width * 0.30,
        // width: 130,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        padding: 8,
        backgroundColor: '#fff'
    },
    toppingSelected: {
        // alignSelf: 'center',
        height: 40,
        width: width * 0.30,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        padding: 8,
        backgroundColor: '#4683b4d3'
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
        backgroundColor: '#006341'
    },
    btn: {
        padding: 0,
        width: 140,
        marginLeft: '10%',
        marginRight: '10%',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#006491'
    },
    btnTxt: {
        color: '#fff',
        fontSize: 13,
        lineHeight: 40,
        textAlign: 'center',
        // backgroundColor: "#000000c0",
        // backgroundColor: '#006491',
        // borderRadius: 50,
    },
    btnColor: {
        padding: 10,
        borderRadius: 40,
        marginHorizontal: 3,
        backgroundColor: '#eee',
        marginTop: 5,
    }
});