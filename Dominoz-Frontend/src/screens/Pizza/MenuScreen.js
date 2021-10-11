/* eslint-disable prettier/prettier */
import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, Dimensions, Button } from 'react-native';

const { width, height } = Dimensions.get('window');
const tags = [
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

export default class MenuScreen extends React.Component {
	static navigationOptions = {
		title: 'Explore Menu',
		headerRight: <Button onPress={() => alert('This is a button!')}
			title="null"
			color="#0000" />,
	}

	constructor(props) {
		super(props);
		this.state = {
			data: [
				// TODO: remove this when be integrated
				{
					id: 1,
					color: '#FF4500',
					icon: 'https://image.freepik.com/free-photo/pizza-with-fresh-champignons-bacon-smoked-chicken-fillet-mozzarella-cheese-sliced-tomato-green-onions-piece-is-cut-off-from-pizza-white-background-isolated-closeup_323569-268.jpg',
					name: 'Chicken Spicy Pizza',
					price: 'Rs. 1189/=',
				},
				{
					id: 2,
					color: '#87CEEB',
					icon: 'https://thumbs.dreamstime.com/b/fresh-tasty-pizza-white-background-clipping-path-included-85746388.jpg',
					name: 'Detroit Pizza',
					price: 'Rs. 1939/=',
				},
				{
					id: 3,
					color: '#4682B4',
					icon: 'https://previews.123rf.com/images/typssiaod/typssiaod1209/typssiaod120900069/15223003-hawaiian-pizza-on-white-background.jpg',
					name: 'Sicilian Pizza',
					price: 'Rs. 1500/=',
				},
				{
					id: 4,
					color: '#6A5ACD',
					icon: 'https://previews.123rf.com/images/sacura123/sacura1231703/sacura123170300159/74828679-pepperoni-pizza-isolated-on-white-background.jpg',
					name: 'Neapolitan Pizza',
					price: 'Rs. 1235/=',
				},
				{
					id: 5,
					color: '#FF69B4',
					icon: 'https://previews.123rf.com/images/gbh007/gbh0071712/gbh007171200400/92223692-pizza-with-chicken-and-vegetables-on-white-background.jpg',
					name: 'Meatilicious Pizza',
					price: 'Rs. 850/=',
				},
				{
					id: 6,
					color: '#00BFFF',
					icon: 'https://previews.123rf.com/images/gbh007/gbh0071806/gbh007180600466/103181956-pizza-with-chicken-and-vegetables-on-white-background.jpg',
					name: 'Mighty Meaty Pizza',
					price: 'Rs. 1050/=',
				},
			],
			pizzaDetails: [],
		};
		this.getMenu = this.getMenu.bind(this);
	}

	componentDidMount = () => {
		this.getMenu();
	}

	getMenu = () => {
		var url = 'http://192.168.8.105:8080/menu/';
		axios.get(url)
			.then(response => {
				this.setState({ pizzaDetails: response.data.data });
			})
			.catch(error => {
				console.log(error);
				alert(error.message);
			});
	}

	navigateToDetails = (item) => {
		// Alert.alert(item.name);
		this.props.navigation.navigate('PizzaDetailScreen', { item: item });
	}

	render() {
		console.log("sdn", this.state.pizzaDetails);
		return (
			<View style={styles.container}>
				<ScrollView>
					{/* Tag List */}
					<FlatList
						showsHorizontalScrollIndicator={false}
						contentContainerStyle={styles.flatList}
						horizontal={true}
						data={tags}
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
					/>
					{/* Pizza Details */}
					<FlatList
						style={styles.notificationList}
						// TODO: should change
						data={this.state.pizzaDetails}
						keyExtractor={(item) => {
							return item.id;
						}}
						renderItem={({ item }) => {
							return (
								<TouchableOpacity
									style={[styles.card, { borderColor: '#000' }]}
									onPress={() => { this.navigateToDetails(item); }}>
									{/* Row */}
									<View style={styles.cardContent}>
										{/* Column for image */}
										<View style={styles.imageContainer}>
											<Image style={styles.image} source={{ uri: item.pizzaImage }} />
										</View>
										{/* Column for text */}
										<View style={styles.imageContainer}>
											<Text style={styles.name}>{item.pizzaName}</Text>
											<Text style={styles.price}>Rs. {item.pizzaPrice}/=</Text>
											<TouchableOpacity style={styles.cartBtn}
												onPress={() => this.props.navigation.navigate('CartScreen')}>
												<Text style={styles.btnText}>Add To Cart</Text>
											</TouchableOpacity>
										</View>
									</View>
								</TouchableOpacity>
							);
						}}
					/>
				</ScrollView>
				<View style={{ paddingTop: 10, padding: 3, alignItems: 'center', backgroundColor: '' }}>
					<TouchableOpacity
						onPress={() => this.props.navigation.navigate('CartScreen')}
						style={styles.btn}>
						<Text style={styles.btnTxt}>View Cart</Text>
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
		elevation: 10,
		padding: 5,
		backgroundColor: '#fff',
		flexDirection: 'column',
		marginBottom: 15,
		borderRadius: 15,
	},
	cardContent: {
		flexDirection: 'row',
	},
	image: {
		width: 130,
		height: 110,
		resizeMode: 'contain',
		borderRadius: 10,
	},
	name: {
		fontSize: 16,
		fontWeight: '500',
		margin: 5,
		color: '#0078ad',
	},
	price: {
		fontSize: 15,
		marginLeft: 10,
		color: '#e51837',
		marginTop: -3,
	},
	cartBtn: {
		width: 100,
		marginTop: '10%',
		marginLeft: '33%',
		padding: 3,
		borderRadius: 5,
		backgroundColor: '#10BC10',
	},
	btnText: {
		color: '#fff',
		fontSize: 13,
		textAlign: 'center',
	},
	btn: {
		padding: 0,
		width: 250,
		borderRadius: 100,
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
