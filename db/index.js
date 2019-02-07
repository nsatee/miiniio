const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const uri = "mongodb://golfzoozoo:test1234@ds123645.mlab.com:23645/auth-myself";

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
