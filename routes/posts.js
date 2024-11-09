import express from 'express';

const router = express.Router();

let posts = [
    {id: 1, title: 'Post 1', content: 'This is post 1'},
    {id: 2, title: 'Post 2', content: 'This is post 2'},
    {id: 3, title: 'Post 3', content: 'This is post 3'}

]

router.get('/', (req, res) => {
    const limit = parseInt(req.query.limit)
    if(!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit));
    }
    res.status(200).json(posts);
    

})

// get single post
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if(!post){
        return res.status(404).json({msg: `A post with id ${id} does not exist`});
    }
    
    res.status(200).json(post);
    
})

// create new post
router.post('/', (req, res) => {
    //const lastPostId = posts[posts.length -1].id
    const newPost = {
        id: posts.length+1,
        title: req.body.title, 
        content: "New content"
    };

    if(!newPost.title){
        return res.status(400).json({msg: 'Please include a title'});
    }

    posts.push(newPost);

    res.status(201).json(posts);
})

export default router;


