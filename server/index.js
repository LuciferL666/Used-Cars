const express = require('express');

const routes = require('./routes');

const app = express();

app.get('/', (req, res) => {
    res.send('RESTful service');
});

app.use(routes);

app.listen(3030, () => console.log('server is listening on port 3030...'));