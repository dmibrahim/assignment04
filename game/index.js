const express = require('express');
const router = require('./api/route/');
const app = express();
require('dotenv').config();
require('../shared/shared-connection').openConnection(process.env.GAMES_DB);




app.use(router);

app.listen(process.env.GAMES_PORT,() =>{
    console.log(`listening at port ${process.env.GAMES_PORT}`)
})