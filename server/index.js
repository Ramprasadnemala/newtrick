const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();

// require('./db');
const PORT = process.env.PORT || 8080;
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
app.use(express.json());

app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

app.get('/', (req, res) => {
    res.send('products api running new deploy');
});

app.get('/ping', (req, res) => {
    res.send('PONG')
});
// /products
app.use('/products', productRoutes);
// /users
app.use('/users', userRoutes);

app.listen(8080, () => {
    console.log('Server is listenin on PORT :' + PORT);
})