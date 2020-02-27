const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const port = process.env.PORT || 4000
// const db = require('./db');
// const model = require('./team/model')
const teamRouter = require("./team/router");

app.use(teamRouter);
app.use(jsonParser);







app.get('/', (req, res) => res.send('Hello World! I am tired ....'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))