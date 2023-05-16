//require the library
const mongoose = require('mongoose');
//connect to the database
mongoose.connect('mongodb+srv://awadheshg798:0l4iIPkA9NaS1jDm@cluster0.0xysves.mongodb.net/');
//acquire the connection(to check if it's successful)
const db = mongoose.connection;

//error
db.on('error', function(err) { console.log(err.message); });

//up and running then print the message
db.once('open', function() {
  
    console.log("Successfully connected to the database");

});
