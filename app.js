const express = require("express");
const path = require('path');
const bodyParser = require('body-parser'); //it grabs the data when we submit the form 
const cors = require('cors'); // aloow access from any domain middileware we can request to our api from diff domain name 
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// connect to database 
mongoose.Promise = global.Promise;
mongoose.connect(config.database);
//database connection 
mongoose.connection.on('connected',()=>{
    console.log(`connected to database ${config.database}`);
});

//db error
mongoose.connection.on('error',(err)=>{
    console.log(`Database error: ${err}`);
});

const users = require('./routes/users'); // bringing the users routes 

const app = express(); //initalizing app variable with express


//cors middleware 
app.use(cors());

// Body parser Middelwrae 
app.use(bodyParser.json());

//passport middleware

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);



app.use('/users', users);


app.use(express.static(path.join(__dirname,'client'))); //joining the main page index

app.get('/', (req,res) => {
    res.send('invalid Endpoint');
});

//port number
const port = 3000;

app.listen(port, ()=>{ // function  takes a port and start server
    console.log('Server started on port ' + port);
});


 