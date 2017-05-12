const express = require('express');
const path = require('path');

// const client = require('./server');
const api = require('./api');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './dist')));
app.use('/api', api);

app.listen(port, function(){
    console.log(`The server is listening on port ${port}`);
});
