require('./database/mongodb');
const express = require("express");

const cors = require("cors");
const app = express();
const http = require("http");
const server = http.createServer(app);

const io = require("socket.io")(server, {  //init the server
    cors: {
      origin: "http://localhost:3000",  //by writing an origin like this, 
      // server will only allow requests from localhost:3000
    },
  });

let onlineUsers = [];
  
io.on("connection", (socket) => {
  
  // add new user
  socket.on("new-user-add", (newUserId) => {
    if (!onlineUsers.some((user) => user.userId === newUserId)) {  
      // if user is not added before
      onlineUsers.push({ userId: newUserId, socketId: socket.id });
      console.log("new user is here!", onlineUsers);
    }
    // send all active users to new user
    io.emit("get-users", onlineUsers);
  });
  
  socket.on("disconnect", () => {
    onlineUsers = onlineUsers.filter((user) => user.socketId !== socket.id)
    console.log("user disconnected", onlineUsers);
    // send all online users to all users
    io.emit("get-users", onlineUsers);
  });
  
  socket.on("offline", () => {
    // remove user from active users
    onlineUsers = onlineUsers.filter((user) => user.socketId !== socket.id)
    console.log("user is offline", onlineUsers);
    // send all online users to all users
    io.emit("get-users", onlineUsers);
  });
  
});






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