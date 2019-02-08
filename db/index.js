const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const keys = require('../config/keys');

const uri = `mongodb://${keys.username}:${keys.password}@ds123645.mlab.com:23645/auth-myself`;

mongoose.connect(uri, { useNewUrlParser: true }).then( 
    () => {
        console.log("connected to db");
    },
    err => {
        console.log("error connect to db");
        console.log(err);
    }
);

module.exports = mongoose.connection;
