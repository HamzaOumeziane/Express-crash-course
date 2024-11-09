const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();


const port = process.env.PORT || 8000


let posts = [
    {id: 1, title: 'Post 1', content: 'This is post 1'},
    {id: 2, title: 'Post 2', content: 'This is post 2'},
    {id: 3, title: 'Post 3', content: 'This is post 3'}

]
//app.use(express.static(path.join(__dirname, 'public')));


// setup static folder
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

// get all posts
app.get('/api/posts', (req, res) => {
    const limit = parseInt(req.query.limit)
    if(!isNaN(limit) && limit > 0) {
        res.status(200).json(posts.slice(0, limit));
    }else{
        res.status(200).json(posts);
    }

})

// get single post
app.get('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    res.status(200).json(post);
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})