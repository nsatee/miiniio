const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Post = require("./Post");
const bcrypt = require("bcryptjs");
mongoose.Promise = Promise;

// define user schema
const userSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    firstname: String,
    lastname: String,
});

// define schema methods
userSchema.methods = {
    checkPassword: function(inputPassword) {
        return bcrypt.compareSync(inputPassword, this.password);
    },
    hashPassword: plainPassword => {
        return bcrypt.hashSync(plainPassword, 10);
    }
};

// define hook for pre-saving
userSchema.pre("save", function(next) {
    if (!this.password) {
        console.log("no password provided");
    } else {
        this.password = this.hashPassword(this.password);
        next();
    }
});

const User = mongoose.model("user", userSchema, 'users');
module.exports = User;
