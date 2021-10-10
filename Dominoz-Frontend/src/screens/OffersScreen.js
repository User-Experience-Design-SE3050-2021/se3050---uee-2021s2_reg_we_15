/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, Dimensions, Button } from 'react-native';

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
export default class OffersScreen extends React.Component {
    static navigationOptions = {
        title: 'Everyday Value Offers',
        headerRight: <Button onPress={() => alert('This is a button!')}
            title="Profile"
            color="#0000"/>,
        
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
                                <Image style={[styles.image, styles.imageContent]} source={{ uri: 'https://th.bing.com/th/id/OIP.8OgO7REHpnWneRWR-bpsGQHaE8?w=302&h=201&c=7&r=0&o=5&pid=1.7' }} />
                            </View>
                            {/* Column for text */}
                            <View style={styles.imageContainer}>
                                <Text style={styles.name}>Family Deals</Text>
                                <Text style={styles.price}>20% Off</Text>
                                <Text style={styles.det}>Large pan Pizza, Potato Wedges, Cheesy Dip </Text>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={styles.name}>LKR: 3500</Text>
                                <TouchableOpacity style={styles.btnColor}
                                    onPress={() => this.props.navigation.navigate('CartScreen')}>
                                    <Text style={styles.btnText}>Select</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.card, { borderColor: '#00BFFF' }]}>
                        {/* Row */}
                        <View style={styles.cardContent}>
                            {/* Column for image */}
                            <View style={styles.imageContainer}>
                                <Image style={[styles.image, styles.imageContent]} source={{ uri: 'https://th.bing.com/th/id/OIP.4mADq8p1QvtEQFHgTrM8QAHaJQ?w=152&h=190&c=7&r=0&o=5&pid=1.7' }} />
                            </View>
                            {/* Column for text */}
                            <View style={styles.imageContainer}>
                                <Text style={styles.name}>Party Combo</Text>
                                <Text style={styles.price}>Save Rs.450</Text>
                                <Text style={styles.det}>Two Large pan Pizza, Potato Wedges</Text>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={styles.name}>LKR: 2500</Text>
                                <TouchableOpacity style={styles.btnColor}
                                onPress={() => this.props.navigation.navigate('CartScreen')}>
                                    <Text style={styles.btnText}>Select</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.card, { borderColor: '#00BFFF' }]}>
                        {/* Row */}
                        <View style={styles.cardContent}>
                            {/* Column for image */}
                            <View style={styles.imageContainer}>
                                <Image style={[styles.image, styles.imageContent]} source={{ uri: 'https://th.bing.com/th/id/OIP.CsCxKLgElKLPm9VcuMCF2AHaKD?w=143&h=195&c=7&r=0&o=5&pid=1.7' }} />
                            </View>
                            {/* Column for text */}
                            <View style={styles.imageContainer}>
                                <Text style={styles.name}>Sri Lankan Meaty</Text>
                                <Text style={styles.price}>Free Pepsi 200ml</Text>
                                <Text style={styles.det}>Large pan Pizza, Peri Peri Sauce Dip </Text>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={styles.name}>LKR: 1550</Text>
                                <TouchableOpacity style={styles.btnColor}
                                onPress={() => this.props.navigation.navigate('CartScreen')}>
                                    <Text style={styles.btnText}>Select</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        </View>
                    </TouchableOpacity>

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
                                <Text style={styles.price}>Save Rs.200</Text>
                                <Text style={styles.det}>Two Medium Pan Pizza</Text>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={styles.name}>LKR: 1650</Text>
                                <TouchableOpacity style={styles.btnColor}>
                                    <Text style={styles.btnText}>Select</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
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
        padding:10,
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
        margin: 5,
        // alignSelf: 'left'
    },
    det: {
        // textAlign: 'left',
        fontSize: 12,
        fontWeight: '400',
        margin: 5,
        // alignSelf: 'left'
    },
    price:{
        fontSize: 20,
        marginLeft: 10,
        color: '#FF5833',
    },
    btnColor: {
        padding: 5,
        borderRadius: 40,
        // marginHorizontal: 3,
        backgroundColor: '#049C01',
        marginTop: 20,
        width: 110,
        // height: 30
    },
    btnText:{
        color:'#fff',
        fontSize: 14,
        textAlign: 'center',
    },
});