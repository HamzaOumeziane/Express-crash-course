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
// setup static folder
//app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get('/api/posts', (req, res) => {
    res.json(posts);
})

app.get('/api/posts/:id', (req, res) => {
    const id = req.params.id;
    const post = posts.find(post => post.id == id);
    res.send(post);
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})