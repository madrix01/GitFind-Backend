const express= require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const app = express();

// Routes
const authRoute = require('./Routes/auth').router;
const homeRoute = require('./Routes/home');
const searchRoute = require('./Routes/search');

dotenv.config();

const clientID = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET

//Initialize firebase 

app.use(express.json());
app.use(cors());

app.use('/api', authRoute);
app.use('/api/home', homeRoute);
app.use('/api/search', searchRoute);
  
app.listen(process.env.PORT0, () => {
    console.log('Ayy Ayy captain');
});  
