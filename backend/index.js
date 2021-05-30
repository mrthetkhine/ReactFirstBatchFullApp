const express = require('express');
const mongoose = require('mongoose');
const { db } = require('./db/database');
const postsRoutes = require('./routes/api/PostController')
const commentsRoutes = require('./routes/api/CommentController');

const app = express();
app.use(express.json());

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log(err));

app.use('/api/posts', postsRoutes);
app.use('/api/comments', commentsRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));