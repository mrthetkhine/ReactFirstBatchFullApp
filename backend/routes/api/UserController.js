const express = require('express');
const {config} = require('../../db/Config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const router = express.Router();
const User = require('../../models/User');


router.post('/register', async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    // Create an user object
    let user = new User({
        name: req.body.name,
        password: hashPassword,
    })

    // Save User in the database
    user.save((err, registeredUser) => {
        if (err) {
            console.log(err)
        } else {
            // create payload then Generate an access token
            let payload = { id: registeredUser._id };
            const token = jwt.sign(payload, config.TOKEN_SECRET);
            res.status(200).send({ token })
        }
    })
});
router.post('/login', async (req, res) => {
    User.findOne({ name: req.body.name }, async (err, user) => {
        if (err) {
            console.log(err)
        } else {
            if (user) {
                const validPass = await bcrypt.compare(req.body.password, user.password);
                if (!validPass) return res.status(401).send("Mobile/Email or Password is wrong");

                // Create and assign token
                let payload = { id: user._id };
                const token = jwt.sign(payload, config.TOKEN_SECRET);

                res.status(200).header("auth-token", token).send({
                    "success":true,
                    "token": token });
            }
            else {
                res.status(401).send('Invalid mobile')
            }

        }
    })
});
module.exports = router;