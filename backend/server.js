require('./database/mongodb');
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

var userRouter = require('./routes/user');
var loginRouter = require('./routes/login');
var productRouter = require('./routes/product');
var categoryRouter = require('./routes/category');
var orderRouter = require('./routes/order');

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/category', categoryRouter);
app.use('/product', productRouter);
app.use('/order', orderRouter);

app.listen(3001,'0.0.0.0',() => console.log('rodano'));

module.exports = app;