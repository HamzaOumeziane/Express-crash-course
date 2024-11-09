const express = require('express');
const app = express();
const posts = require('./routes/posts');
const path = require('path');
require('dotenv').config();


const port = process.env.PORT || 8000


//app.use(express.static(path.join(__dirname, 'public')));


// setup static folder
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

// Routes
app.use('/api/posts', posts);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})