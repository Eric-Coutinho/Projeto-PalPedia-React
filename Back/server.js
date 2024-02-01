const express = require('express');
const cors = require('cors');

const app = express();

require('./Startup/db')();

app.use(cors({
    origin: '*'
}));

require('./Startup/routes')(app);

const port = 8080;

app.listen(port, () => console.log(`Acesse: http://localhost:${port}`))