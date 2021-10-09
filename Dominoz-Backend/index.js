const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const menuAPI = require('./src/api/menu.api');
const cartAPI = require('./src/api/cart.api');
const userAPI = require('./src/api/user.api');
const paymentAPI = require('./src/api/payment.api');
const deliveryAPI = require('./src/api/delivery.api');

dotenv.config();
const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
}, (error) => {
    if (error) {
        console.log('Database Error: ', error.message);
    }
});

mongoose.connection.once('open', () => {
    console.log('Database connected.');
});

app.route('/').get((req, res) => {
    res.send('UEE Dominoz Pizza App');
});

app.use('/menu', menuAPI());
app.use('/cart', cartAPI());
app.use('/user', userAPI());
app.use('/payment', paymentAPI());
app.use('/delivery', deliveryAPI());

app.listen(PORT, () => {
    console.log(`Server is up and running on PORT ${PORT}`);
})
