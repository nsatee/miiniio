const express = require("express");
const router = express.Router();
const User = require("../../db/models/User");
const passport = require("../../services");

router.get("/user", (req, res) => {
    if (req.user) {
        res.json({ currentUser: req.user });
    } else {
        res.json({ currentUser: null });
    }
});

router.post("/new_user", (req, res) => {
    console.log(req.body);
    const { username, email, password, firstname, lastname } = req.body;

    User.findOne(
        {
            username: username
        },
        (err, user) => {
            if (err) {
                console.log("server is error", err);
            } else if (user) {
                res.json({ error: `${username} is already taken` });
            } else {
                const newUser = new User({
                    username: username,
                    password: password,
                    email: email,
                    firstname: firstname,
                    lastname: lastname
                });

                newUser.save((err, savedUser) => {
                    if (err) return res.json(err);
                    res.json(savedUser);
                });
            }
        }
    );
});

router.post("/login", function(req, res, next) {
    passport.authenticate("local", function(err, user) {
        if (err) {
            return next(err); // will generate a 500 error
        }
        // Generate a JSON response reflecting authentication status
        if (!user) {
            return res.send({
                success: false,
                message: "Incorrect username or password"
            });
        }
        
        req.login(user, loginErr => {
            if (loginErr) {
                return next(loginErr);
            }
            return res.send({
                success: true,
                message: "authentication succeeded"
            });
        });
    })(req, res, next);
});


router.post("/logout", (req, res) => {
    if (req.user) {
        req.logout();
        res.send({ msg: "logging out" });
    } else {
        res.send({ msg: "no user to log out" });
    }
});

module.exports = router;
