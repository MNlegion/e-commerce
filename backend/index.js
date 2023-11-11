const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Post = require('./models/Post')

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware

app.use(cors());
app.use(express.json());

// MondoDB connection

mongoose.connect('mongodb://localhost/e_commerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Routes
// ...
// GET all posts
app.get('/api/posts', async (req, res) => {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // GET a single post by ID
  app.get('/api/posts/:id', async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // CREATE a new post
  app.post('/api/posts', async (req, res) => {
    const post = new Post({
      title: req.body.title,
      content: req.body.content,
    });
  
    try {
      const newPost = await post.save();
      res.status(201).json(newPost);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  // UPDATE a post by ID
  app.put('/api/posts/:id', async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      post.title = req.body.title;
      post.content = req.body.content;
  
      const updatedPost = await post.save();
      res.json(updatedPost);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  // DELETE a post by ID
  app.delete('/api/posts/:id', async (req, res) => {
    try {
      await Post.findByIdAndDelete(req.params.id);
      res.json({ message: 'Post deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});