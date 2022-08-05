const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json());

app.get('/', (request, response) => {
    console.log('[TEST]!');

    response.send('Hello From Homepage!');
});

const todoRoutes = require('./src/routes/route');

app.use('/api/v1/todo', todoRoutes);

app.listen(port, () => console.log(`Server Running on port: http://localhost:${port} `));