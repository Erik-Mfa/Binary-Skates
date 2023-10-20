require('./database/mongodb');

const express = require("express");
const app = express();

app.use(express.json);

app.get('/', (req, res) => {
    res.send('testing');
});

app.listen(3001, () => console.log('rodano'));

module.exports = app;