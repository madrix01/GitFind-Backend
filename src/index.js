const express= require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const app = express();
const helmet = require('helmet')


// Routes
const authRoute = require('./Routes/auth').router;
const homeRoute = require('./Routes/home');
const searchRoute = require('./Routes/search');

dotenv.config();

//Initialize firebase 

app.use(express.json());
app.use(cors());
app.use(helmet.frameguard())
app.use('/', express.static('static'))


app.use('/api', authRoute);
app.use('/api/home', homeRoute);
app.use('/api/search', searchRoute);
  
app.listen(process.env.PORT, () => {
    console.log('Ayy Ayy captain', process.env.PORT);
});  
