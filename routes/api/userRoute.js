const router = require("express").Router();
const db = require("../../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const checkAuth = require("../../middleware/checkAuth");
const nodemailer = require("nodemailer");

router.get("/test", (req, res) => {
    res.json("working here at api/user/test");
});

router.get("/sendemail", (req, res) => {
    console.log(process.env.EMAIL_FROM);

    const ranNum = Math.floor(Math.random() * 900000 + 100000);

    const transporter = nodemailer.createTransport({
        service: "outlook",
        auth: {
            user: process.env.EMAIL_FROM,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: "",
        subject: "Sending Email using Node.js",
        text: "Pin to reset your password: " + ranNum,
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            res.json({ err });
        } else {
            console.log(info);
            res.json({ info });
        }
    });
});

router.get("/all", (req, res, next) => {
    db.User.find()
        .then((result) => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post("/login", (req, res, next) => {
    db.User.findOne({ email: req.body.email })
        .exec()
        .then((user) => {
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (err) {
                    console.log(err);
                    return res.status(401).json({
                        message: "Auth failed",
                    });
                }
                if (result === true) {
                    jwt.sign(
                        // payload of the token
                        {
                            username: user.username,
                            userID: user._id,
                            highscores: user.highscores,
                        },
                        process.env.JWT_KEY,
                        { expiresIn: "3h" },
                        (err, token) => {
                            if (err) {
                                return res.status(401).json({
                                    message: "Auth failed",
                                });
                            }
                            return res.status(200).json({
                                message: "Auth succeeded",
                                token,
                                username: user.username,
                                highscores: user.highscores,
                            });
                        },
                    );
                } else {
                    return res.status(401).json({
                        message: "Auth failed",
                    });
                }
            });
        })
        .catch((err) => {
            res.status(401).json({
                message: "Auth failed",
            });
        });
});

router.post("/signup", (req, res, next) => {
    db.User.find({ email: req.body.email }).then((alreadyUser) => {
        console.log(alreadyUser);
        if (alreadyUser.length > 0) {
            return res.status(200).json({
                err: { code: 11000 },
                message: "Already a user by that email",
                success: false,
            });
        } else {
            // hash password first
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    return res.status(500).json(err);
                }
                const newUser = new db.User({
                    username: req.body.username,
                    email: req.body.email,
                    password: hash,
                });

                newUser
                    .save()
                    .then((result) => {
                        console.log(result);
                        res.status(201).json({
                            message: "User Created",
                            success: true,
                        });
                    })
                    .catch((err) => res.status(200).json({ err }));
            });
        }
    });
});

router.get("/checktoken", checkAuth, (req, res, next) => {
    res.status(200).json({
        message: "Token checks out",
        username: req.user.username,
        user: true,
        userID: req.user.userID,
    });
});

module.exports = router;
