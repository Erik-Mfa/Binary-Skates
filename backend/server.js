require('./database/mongodb');
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

var userRouter = require('./routes/user');
var loginRouter = require('./routes/login');
var productRouter = require('./routes/product');

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/product', productRouter);

app.listen(3001,'0.0.0.0',() => console.log('rodano'));

module.exports = app;