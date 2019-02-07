const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const mongoose = require("mongoose");
const dbConnection = require("./db");
const MongoStore = require("connect-mongo")(session);
const passport = require("passport");
const PORT = process.env.PORT || 5000;

const app = express();

// routes require
const user = require("./routes/api/userRoutes");

// middleware
app.use(morgan("dev"));
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());

// handle session
app.use(
    session({
        secret: "qwertyuiop5tuyghjknrmewf8uiojk",
        store: new MongoStore({
            mongooseConnection: dbConnection
        }),
        resave: false,
        saveUninitialized: false
    })
);

app.use(passport.initialize());
app.use(passport.session());

// routes
app.use("/api", user);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
