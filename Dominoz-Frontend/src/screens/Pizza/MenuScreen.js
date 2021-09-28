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
				{
					id: 4,
					color: "#6A5ACD",
					icon: "https://images7.alphacoders.com/596/596343.jpg",
					name: "Neapolitan Pizza",
					price: 'Rs. 1235/='
				},
				{
					id: 5,
					color: "#FF69B4",
					icon: "https://www.spiceography.com/wp-content/uploads/2019/11/good-spices-for-pizza-1024x682.jpg",
					name: "Meatilicious Pizza",
					price: 'Rs. 850/='
				},
				{
					id: 6,
					color: "#00BFFF",
					icon: "https://www.veganlifemag.com/wp-content/uploads/2021/07/Untitled-design.png",
					name: "Mighty Meaty Pizza",
					price: 'Rs. 1050/='
				}
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
					/>
					<FlatList
						style={styles.notificationList}
						data={this.state.data}
						keyExtractor={(item) => {
							return item.id;
						}}
						renderItem={({ item }) => {
							return (
								<TouchableOpacity
									style={[styles.card, { borderColor: '#000',  }]}
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
											<Text style={styles.price}>{item.price}</Text>
											<TouchableOpacity style={styles.cartBtn}
												onPress={() => this.props.navigation.navigate('CartScreen')}>
												<Text style={styles.btnText}>Add To Cart</Text>
											</TouchableOpacity>
										</View>
									</View>
								</TouchableOpacity>
							)
						}}
					/>
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
});