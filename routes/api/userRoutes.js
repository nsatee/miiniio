const express = require('express')
const router = express.Router();
const User = require('../../db/models/User');
// const passport = require('../../services/');


router.post('/new_user', (req, res) => {
    console.log(req.body);
    const {
        username,
        email,
        password
    } = req.body;

    User.findOne({
        username: username
    }, (err, user) => {
        if (err) {
            console.log("server is error", err);
        } else if (user) {
            res.json({error: `${username} is already taken`});
        } else {
            const newUser = new User({
                username: username,
                password: password,
                email: email
            });

            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser);
            });
        }
    });
});

module.exports = router;