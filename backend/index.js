const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { db } = require('./db/database');
const {config} = require('./db/Config');
const postsRoutes = require('./routes/api/PostController')
const commentsRoutes = require('./routes/api/CommentController');
const userRoutes = require('./routes/api/UserController');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log(err));

const verifyUserToken = (req, res, next) => {
    let token = req.headers.authorization;
    //console.log('Token ',token);
    if (!token) return res.status(401).send("Access Denied / Unauthorized request");

    try {
        token = token.split(' ')[1] // Remove Bearer from string

        if (token === 'null' || !token) return res.status(401).send('Unauthorized request');

        let verifiedUser = jwt.verify(token, config.TOKEN_SECRET);   // config.TOKEN_SECRET => 'secretKey'
        if (!verifiedUser) return res.status(401).send('Unauthorized request')

        req.user = verifiedUser; // user_id
        next();

    } catch (error) {
        console.log(error);
        res.status(400).send("Invalid Token");
    }

}
app.use('/api/auth/', userRoutes);
app.use('/api/posts',postsRoutes);
//app.use('/api/posts', verifyUserToken,postsRoutes);
app.use('/api/comments', commentsRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));