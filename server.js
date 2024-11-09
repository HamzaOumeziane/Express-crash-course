const express = require('express');
const app = express();
const path = require('path');

const port = 8000;


app.get('/', (req, res) => {
    res.send({message: 'Hello World!'});
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})