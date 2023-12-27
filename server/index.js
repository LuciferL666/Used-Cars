const express = require('express');

const routes = require('./routes');

const app = express();

app.get('/', (req, res) => {
    res.send('RESTful service');
});

app.use('/data', routes); //if start with data if not remove data!

app.listen(3030, () => console.log('server is listening on port 3030...'));